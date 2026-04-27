import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Glass() {
  const ref = useRef();
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.18;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.4) * 0.15;
  });
  return (
    <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#9d80c2"
          roughness={0.12}
          metalness={0.8}
          emissive="#5b3d8c"
          emissiveIntensity={0.25}
        />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#c9a875" wireframe transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

export default function GlassOrb({ className = "" }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4], fov: 40 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 4]} intensity={1.4} color="#e3c490" />
        <pointLight position={[-3, -2, 2]} intensity={1.1} color="#4a5fc9" />
        <pointLight position={[3, -2, -2]} intensity={0.7} color="#c9a875" />
        <Suspense fallback={null}>
          <Glass />
        </Suspense>
      </Canvas>
    </div>
  );
}
