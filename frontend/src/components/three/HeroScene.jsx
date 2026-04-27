import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Knot({ position = [0, 0, 0], scale = 1, color = "#7b5aa3", speed = 0.4 }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.18}
        metalness={0.85}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}

function Crystal({ position, scale = 1, color = "#4a5fc9" }) {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.4) * 0.3;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </mesh>
    </Float>
  );
}

function Ring({ position, scale = 1, color = "#c9a875" }) {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * 0.25;
    ref.current.rotation.z = s.clock.elapsedTime * 0.15;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1.2, 0.06, 32, 200]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.95} emissive={color} emissiveIntensity={0.12} />
    </mesh>
  );
}

function Particles({ count = 280 }) {
  const points = useRef();

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [count]);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.04,
        color: new THREE.Color("#e3c490"),
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
      }),
    []
  );

  useFrame((s) => {
    if (!points.current) return;
    points.current.rotation.y = s.clock.elapsedTime * 0.03;
  });

  return <points ref={points} geometry={geometry} material={material} />;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0a0612"]} />
      <fog attach="fog" args={["#0a0612", 7, 18]} />

      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#e3c490" />
      <pointLight position={[-5, -2, -3]} intensity={1.2} color="#4a5fc9" />
      <pointLight position={[5, 2, 2]} intensity={0.8} color="#7b5aa3" />
      <pointLight position={[0, 0, 4]} intensity={0.5} color="#c9a875" />

      <Suspense fallback={null}>
        <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
          <Knot position={[0, 0.1, 0]} scale={1.05} color="#6a4a92" />
        </Float>

        <Crystal position={[-3.2, 1.4, -1]} scale={0.7} color="#5b6dd0" />
        <Crystal position={[3.0, -1.2, -0.5]} scale={0.55} color="#8a6bb8" />
        <Crystal position={[2.4, 1.8, -2]} scale={0.4} color="#c9a875" />

        <Ring position={[-2.8, -1.4, 0.5]} scale={0.7} color="#c9a875" />
        <Ring position={[3.4, 0.6, -1.5]} scale={0.55} color="#9d80c2" />

        <Particles count={250} />
      </Suspense>
    </Canvas>
  );
}
