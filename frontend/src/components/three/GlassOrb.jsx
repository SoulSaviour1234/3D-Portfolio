import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Glass() {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const dotRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotate central mesh
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18;
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
    }

    // Continuous rotation for wireframe on Y and Z axes
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.25;
      wireframeRef.current.rotation.z = t * 0.15;
    }

    // Orbiting glowing dot
    if (dotRef.current) {
      const radius = 1.6;
      dotRef.current.position.x = Math.cos(t * 0.8) * radius;
      dotRef.current.position.z = Math.sin(t * 0.8) * radius;
      dotRef.current.position.y = Math.sin(t * 0.5) * (radius * 0.5);
    }
  });

  return (
    <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.8}>
      {/* Central Mesh */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#9d80c2"
          roughness={0.12}
          metalness={0.8}
          emissive="#5b3d8c"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Rotating Wireframe */}
      <mesh ref={wireframeRef} scale={1.08}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial color="#c9a875" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Orbiting Glowing Dot */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#ece4f5" toneMapped={false} />
        <pointLight intensity={2} distance={3} color="#ece4f5" />
      </mesh>
    </Float>
  );
}

export default function GlassOrb({ className = "" }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
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
