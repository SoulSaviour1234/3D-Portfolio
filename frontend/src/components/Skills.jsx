import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { skills } from "../mock";

function OrbCluster() {
  const group = useRef();
  useFrame((s) => {
    if (!group.current) return;
    group.current.rotation.y = s.clock.elapsedTime * 0.15;
    group.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.2) * 0.15;
  });

  const orbs = [
    { p: [0, 0, 0], s: 1.0, c: "#7b5aa3" },
    { p: [1.7, 0.8, -0.4], s: 0.55, c: "#c9a875" },
    { p: [-1.6, -0.6, 0.4], s: 0.65, c: "#4a5fc9" },
    { p: [0.8, -1.4, 0.6], s: 0.45, c: "#9d80c2" },
    { p: [-1.2, 1.2, -0.4], s: 0.4, c: "#e3c490" },
    { p: [1.5, -0.4, 0.8], s: 0.35, c: "#5b6dd0" },
  ];

  return (
    <group ref={group}>
      {orbs.map((o, i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.8}>
          <mesh position={o.p} scale={o.s}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              color={o.c}
              roughness={0.18}
              metalness={0.7}
              emissive={o.c}
              emissiveIntensity={0.18}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

const categories = ["Languages", "Frontend", "Backend", "DevOps"];

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
            <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[3, 4, 4]} intensity={1.1} color="#e3c490" />
              <pointLight position={[-3, -2, -2]} intensity={0.7} color="#4a5fc9" />
              <Suspense fallback={null}>
                <OrbCluster />
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
              The stack I reach for when
              <span className="italic text-[#c9a875]"> reliability matters.</span>
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
