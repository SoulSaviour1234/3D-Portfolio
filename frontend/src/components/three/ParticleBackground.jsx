import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const FloatingOrbs = ({ count = 75 }) => {
  const orbsRef = useRef([]);

  const orbData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 55,
      y: (Math.random() - 0.5) * 60,
      z: (Math.random() - 0.5) * 30,
      size: 0.08 + Math.random() * 0.25,
      speed: 0.2 + Math.random() * 0.45,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    orbsRef.current.forEach((orb, i) => {
      if (orb) {
        const { speed, offset } = orbData[i];
        // Active floating movement
        orb.position.x = orbData[i].x + Math.sin(time * speed * 0.8 + offset) * 5;
        orb.position.y = orbData[i].y + Math.cos(time * speed + offset) * 5;
        orb.position.z = orbData[i].z + Math.sin(time * speed * 1.2 + offset) * 4;
      }
    });
  });

  return (
    <group>
      {orbData.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (orbsRef.current[i] = el)}
          position={[data.x, data.y, data.z]}
        >
          <sphereGeometry args={[data.size, 16, 16]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.65} />
        </mesh>
      ))}
    </group>
  );
};

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{ alpha: false }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#0a0612']} />
        <ambientLight intensity={1.8} />
        
        {/* Enhanced Golden Glitters */}
        <Sparkles 
          count={2000} 
          scale={[80, 80, 60]} 
          size={4} 
          color="#FFD700" 
          speed={0.5} 
          opacity={0.85} 
        />

        {/* Enhanced Purple Floating Orbs */}
        <FloatingOrbs count={75} />

        {/* Enhanced Radiance Effect */}
        <EffectComposer disableNormalPass>
          <Bloom 
            intensity={1.5} 
            luminanceThreshold={0.1} 
            mipmapBlur 
            radius={0.5} 
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
