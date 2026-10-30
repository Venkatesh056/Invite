/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreePetalCanvasProps {
  burstTrigger?: number;
}

// Scratch reusable vector objects outside tick loop to prevent GC
const _dummyMatrix = new THREE.Matrix4();
const _position = new THREE.Vector3();
const _rotation = new THREE.Euler();
const _quaternion = new THREE.Quaternion();
const _scale = new THREE.Vector3();

export const ThreePetalCanvas: React.FC<ThreePetalCanvasProps> = ({ burstTrigger = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const burstRef = useRef(burstTrigger);
  const sceneRef = useRef<{
    triggerBurst: () => void;
  } | null>(null);

  useEffect(() => {
    burstRef.current = burstTrigger;
    if (sceneRef.current && burstTrigger > 0) {
      sceneRef.current.triggerBurst();
    }
  }, [burstTrigger]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Software WebGL probe as required by threejs skill
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';

    // Ambient light & Warm/Cool 3-point studio lighting
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffe6b8, 1.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Procedural Petal Canvas Texture (Rose Red & Gold Marigold)
    function createPetalTexture(isRose: boolean): THREE.CanvasTexture {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;

      ctx.clearRect(0, 0, 128, 128);
      ctx.beginPath();
      // Organic petal teardrop curvature
      ctx.moveTo(64, 15);
      ctx.bezierCurveTo(95, 20, 115, 60, 105, 95);
      ctx.bezierCurveTo(90, 115, 75, 120, 64, 125);
      ctx.bezierCurveTo(53, 120, 38, 115, 23, 95);
      ctx.bezierCurveTo(13, 60, 33, 20, 64, 15);
      ctx.closePath();

      const grad = ctx.createRadialGradient(64, 50, 5, 64, 70, 60);
      if (isRose) {
        grad.addColorStop(0, '#E63956');
        grad.addColorStop(0.5, '#BA1331');
        grad.addColorStop(1, '#66081B');
      } else {
        grad.addColorStop(0, '#FFE866');
        grad.addColorStop(0.6, '#F5A623');
        grad.addColorStop(1, '#D97706');
      }
      ctx.fillStyle = grad;
      ctx.fill();

      // Subtle gold vein lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(64, 25);
      ctx.quadraticCurveTo(64, 75, 64, 120);
      ctx.stroke();

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    }

    const roseTexture = createPetalTexture(true);
    const marigoldTexture = createPetalTexture(false);

    // Geometry: Curved petal plane
    const petalGeo = new THREE.PlaneGeometry(0.35, 0.48, 4, 4);
    // Slight organic curl
    const posAttr = petalGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const curl = (x * x + y * y) * 0.12;
      posAttr.setZ(i, -curl);
    }
    petalGeo.computeVertexNormals();

    const roseMat = new THREE.MeshStandardMaterial({
      map: roseTexture,
      transparent: true,
      alphaTest: 0.05,
      side: THREE.DoubleSide,
      roughness: 0.4,
      metalness: 0.1,
    });

    const marigoldMat = new THREE.MeshStandardMaterial({
      map: marigoldTexture,
      transparent: true,
      alphaTest: 0.05,
      side: THREE.DoubleSide,
      roughness: 0.45,
      metalness: 0.15,
    });

    const PETAL_COUNT = isSoftwareGl ? 35 : 70;
    const roseInstanced = new THREE.InstancedMesh(petalGeo, roseMat, Math.floor(PETAL_COUNT / 2));
    const marigoldInstanced = new THREE.InstancedMesh(petalGeo, marigoldMat, Math.ceil(PETAL_COUNT / 2));

    roseInstanced.frustumCulled = false;
    marigoldInstanced.frustumCulled = false;

    scene.add(roseInstanced);
    scene.add(marigoldInstanced);

    interface PetalData {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      rx: number;
      ry: number;
      rz: number;
      rvx: number;
      rvy: number;
      rvz: number;
      scale: number;
      isRose: boolean;
      indexInMesh: number;
    }

    const petals: PetalData[] = [];
    let rIdx = 0;
    let mIdx = 0;

    for (let i = 0; i < PETAL_COUNT; i++) {
      const isRose = i % 2 === 0;
      const indexInMesh = isRose ? rIdx++ : mIdx++;

      petals.push({
        x: (Math.random() - 0.5) * 16,
        y: Math.random() * 14 - 6,
        z: (Math.random() - 0.5) * 6,
        vx: (Math.random() - 0.5) * 0.015,
        vy: -0.012 - Math.random() * 0.02,
        vz: (Math.random() - 0.5) * 0.01,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        rz: Math.random() * Math.PI * 2,
        rvx: (Math.random() - 0.5) * 0.03,
        rvy: (Math.random() - 0.5) * 0.03,
        rvz: (Math.random() - 0.5) * 0.02,
        scale: 0.75 + Math.random() * 0.5,
        isRose,
        indexInMesh,
      });
    }

    const triggerBurst = () => {
      petals.forEach((p) => {
        p.y = 7 + Math.random() * 3;
        p.x = (Math.random() - 0.5) * 12;
        p.vy = -0.04 - Math.random() * 0.05;
        p.vx = (Math.random() - 0.5) * 0.06;
        p.rvx = (Math.random() - 0.5) * 0.1;
      });
    };

    sceneRef.current = { triggerBurst };

    let animationFrameId: number = 0;
    let lastTime = performance.now();

    const renderLoop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      petals.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(currentTime * 0.0015 + p.z) * 0.005;
        p.z += p.vz;

        p.rx += p.rvx;
        p.ry += p.rvy;
        p.rz += p.rvz;

        // Wrap around when falling below viewport
        if (p.y < -8) {
          p.y = 8 + Math.random() * 2;
          p.x = (Math.random() - 0.5) * 16;
          p.vy = -0.012 - Math.random() * 0.025;
        }

        _position.set(p.x, p.y, p.z);
        _rotation.set(p.rx, p.ry, p.rz);
        _quaternion.setFromEuler(_rotation);
        _scale.set(p.scale, p.scale, p.scale);

        _dummyMatrix.compose(_position, _quaternion, _scale);

        if (p.isRose) {
          roseInstanced.setMatrixAt(p.indexInMesh, _dummyMatrix);
        } else {
          marigoldInstanced.setMatrixAt(p.indexInMesh, _dummyMatrix);
        }
      });

      roseInstanced.instanceMatrix.needsUpdate = true;
      marigoldInstanced.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        // Pace frame loop on software WebGL
        window.setTimeout(() => {
          animationFrameId = requestAnimationFrame(renderLoop);
        }, 60);
      } else {
        animationFrameId = requestAnimationFrame(renderLoop);
      }
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      petalGeo.dispose();
      roseMat.dispose();
      marigoldMat.dispose();
      roseTexture.dispose();
      marigoldTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    />
  );
};
