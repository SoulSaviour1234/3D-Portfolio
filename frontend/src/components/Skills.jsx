import React, { useRef, Suspense, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Decal, Html, useTexture, PerspectiveCamera, Text } from "@react-three/drei";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { skills } from "../mock";

// Top 5 skills for the 3D visualization - Distinct Bright Colors
const topSkills = [
  { id: 1, name: "React / Next.js", percent: 95, color: "#FF0000", logo: "https://cdn.simpleicons.org/react/FF0000" },
  { id: 2, name: "Tailwind CSS", percent: 92, color: "#10B981", logo: "https://cdn.simpleicons.org/tailwindcss/10B981" },
  { id: 3, name: "FastAPI", percent: 90, color: "#0EA5E9", logo: "https://cdn.simpleicons.org/fastapi/0EA5E9" },
  { id: 4, name: "Gemini AI", percent: 88, color: "#A855F7", logo: "https://cdn.simpleicons.org/googlegemini/A855F7" },
  { id: 5, name: "PostgreSQL", percent: 85, color: "#EAFF00", logo: "https://cdn.simpleicons.org/postgresql/EAFF00" },
];

function SkillSphere({ skill, index, hoveredId, setHoveredId }) {
  const rigidBody = useRef();
  const sphereRef = useRef();
  const isHovered = hoveredId === skill.id;
  const isDimmed = hoveredId !== null && !isHovered;
  const [textureError, setTextureError] = useState(false);
  
  // Calculate radius based on percentage
  const radius = (skill.percent / 100) * 1.35;
  
  // Load texture with error handling
  const texture = useTexture(skill.logo, () => {}, () => {
    setTextureError(true);
  });

  useFrame((state) => {
    if (!rigidBody.current) return;

    // 1. Magnetic Repulsion from Cursor
    const spherePos = rigidBody.current.translation();
    const pointer = new THREE.Vector3(state.pointer.x * 6, state.pointer.y * 6, 0);
    const dist = pointer.distanceTo(new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z));

    if (dist < 3.5) {
      const dir = new THREE.Vector3().subVectors(new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z), pointer).normalize();
      const force = (3.5 - dist) * 45;
      rigidBody.current.applyImpulse({ x: dir.x * force, y: dir.y * force, z: dir.z * force }, true);
    }

    // 2. Gentle Drift back to center
    const centerForce = new THREE.Vector3().subVectors(new THREE.Vector3(0, 0, 0), new THREE.Vector3(spherePos.x, spherePos.y, spherePos.z)).multiplyScalar(2.5);
    rigidBody.current.applyImpulse(centerForce, true);

    // 3. Damping to prevent infinite bouncing
    const velocity = rigidBody.current.linvel();
    rigidBody.current.setLinvel({ x: velocity.x * 0.93, y: velocity.y * 0.93, z: velocity.z * 0.93 }, true);
  });

  return (
    <RigidBody
      ref={rigidBody}
      colliders="ball"
      type="dynamic"
      position={[(index - 2) * 2.8, Math.sin(index) * 2, 0]}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <group
        onPointerOver={() => setHoveredId(skill.id)}
        onPointerOut={() => setHoveredId(null)}
      >
        {/* Main Sphere - Metallic & Lustrous */}
        <mesh ref={sphereRef} scale={isHovered ? 1.2 : 1}>
          <sphereGeometry args={[radius, 64, 64]} />
          <meshPhysicalMaterial
            color={skill.color}
            transparent
            opacity={isDimmed ? 0.3 : 1}
            metalness={0.9}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={1}
            emissive={skill.color}
            emissiveIntensity={isHovered ? 0.8 : 0.2}
          />
          
          {/* Internal Glowing Core - The "Light Bulb" effect */}
          <mesh scale={0.4}>
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial
              color={skill.color}
              emissive={skill.color}
              emissiveIntensity={isHovered ? 50 : 2}
              transparent
              opacity={isDimmed ? 0.1 : 1}
            />
          </mesh>

          {/* Internal Light Source */}
          {isHovered && <pointLight intensity={10} distance={radius * 5} color={skill.color} />}
          
          {!textureError && texture && (
            <Decal
              position={[0, 0, radius]}
              rotation={[0, 0, 0]}
              scale={[radius * 1.3, radius * 1.3, 1]}
            >
              <meshBasicMaterial
                map={texture}
                polygonOffset
                polygonOffsetFactor={-1}
                transparent
                opacity={isDimmed ? 0.3 : 1}
              />
            </Decal>
          )}
        </mesh>
        
        <Html distanceFactor={10} position={[0, radius + 0.6, 0]} center>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 15, scale: 0.8, filter: "blur(10px)" }}
                className="whitespace-nowrap pointer-events-none"
              >
                <div className="bg-[#0a0612]/95 backdrop-blur-3xl border border-white/20 px-6 py-2.5 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  <span className="text-[12px] font-mono text-[#e3c490] mr-3 uppercase tracking-[0.2em]">{skill.name}</span>
                  <span className="text-base font-bold text-white">{skill.percent}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Html>
      </group>
    </RigidBody>
  );
}

function SkillsScene() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <ambientLight intensity={1.0} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#fff" castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#4a5fc9" />
      <pointLight position={[0, 5, 0]} intensity={1} color="#e3c490" />
      <Physics gravity={[0, 0, 0]}>
        {topSkills.map((skill, i) => (
          <SkillSphere
            key={skill.id}
            skill={skill}
            index={i}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </Physics>
    </>
  );
}

const categories = ["LANGUAGES", "FRONTEND", "BACKEND", "AI & WEB3"];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 lg:py-36 bg-gradient-to-b from-[#0a0612] via-[#0d0820] to-[#0a0612]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
          <span className="font-mono text-[#c9a875]">03</span>
          <span className="h-px w-10 bg-white/15" />
          Toolkit
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 3D scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative aspect-square w-full max-w-md mx-auto rounded-3xl bg-gradient-to-br from-[#1a0f2e] to-[#0f1840] ring-1 ring-white/10 overflow-hidden"
          >
            <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true, antialias: true }}>
              <Suspense fallback={null}>
                <SkillsScene />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Skills list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance">
              The stack I reach for to turn
              <span className="italic text-[#c9a875]"> problems into solutions.</span>
            </h2>

            <div className="mt-10 space-y-8">
              {categories.map((cat) => (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#9d8fb5]">{cat}</span>
                    <span className="flex-1 h-px bg-white/10" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {skills.filter((s) => s.category === cat).map((s) => (
                      <div key={s.name} className="group">
                        <div className="flex items-baseline justify-between">
                          <span className="text-[#ece4f5] group-hover:text-[#e3c490] transition-colors">{s.name}</span>
                          <span className="font-mono text-xs text-[#9d8fb5]">{s.level}%</span>
                        </div>
                        <div className="mt-1.5 h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#7b5aa3] via-[#9d80c2] to-[#c9a875]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
