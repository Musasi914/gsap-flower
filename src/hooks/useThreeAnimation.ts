import { useEffect, useRef } from "react";
import * as THREE from "three";

export function useThreeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const mouse = new THREE.Vector2();
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      mouse.x = (e.clientX / canvasRef.current.clientWidth) * 2 - 1;
      mouse.y = -(e.clientY / canvasRef.current.clientHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = -0.2;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

    const geometry = new THREE.PlaneGeometry(1, 1, 50, 50);
    const aRandom = new Float32Array(geometry.attributes.position.count);
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      aRandom[i] = Math.random();
    }
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(aRandom, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float aRandom;
        varying vec2 vUv;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.z += aRandom * 0.1;
          gl_Position = projectionMatrix * viewMatrix * modelPosition;
          vUv = uv;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          float strength = 1.0 - distance(vUv, vec2(0.5)) * 3.7;
          gl_FragColor = vec4(1.0, 0.0, 0.0, strength);
        }
      `,
      transparent: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      const goalPosition = new THREE.Vector2(mouse.x * 0.02, -mouse.y * 0.02);
      camera.position.y += (goalPosition.y - camera.position.y) * 0.03;
      camera.position.x += (goalPosition.x - camera.position.x) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return canvasRef;
}
