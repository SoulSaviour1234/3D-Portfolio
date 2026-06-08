import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile } from "../mock";
import GlassOrb from "./three/GlassOrb";

const About = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), { stiffness: 120, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 120, damping: 25 });
  
  const glareX = useSpring(useTransform(mouseX, [0, 1], ["0%", "100%"]), { stiffness: 120, damping: 25 });
  const glareY = useSpring(useTransform(mouseY, [0, 1], ["0%", "100%"]), { stiffness: 120, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
          <span className="font-mono text-[#c9a875]">01</span>
          <span className="h-px w-10 bg-white/15" />
          About
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Interactive 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-[#1a0f2e] to-[#0f1840] ring-1 ring-white/10 overflow-hidden shadow-2xl">
              <GlassOrb className="absolute inset-0" />
              
              {/* Dynamic Glare Overlay */}
              <motion.div 
                style={{ 
                  background: useTransform(
                    [glareX, glareY],
                    ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.08) 0%, transparent 60%)`
                  )
                }}
                className="absolute inset-0 pointer-events-none z-10" 
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs font-mono text-[#9d8fb5] z-20">
                <span>system.ts</span>
                <span className="text-[#c9a875]">● running</span>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex absolute -right-6 top-10 px-4 py-3 rounded-2xl bg-[#0a0612]/90 ring-1 ring-white/10 backdrop-blur shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-default group/tag"
            >
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-[#c9a875] transition-transform group-hover/tag:rotate-12" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9d8fb5]">Currently</div>
                  <div className="text-sm text-[#ece4f5]">Real-Time UIs & Databases</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Innovator obsessed with turning
              <span className="italic text-[#c9a875]"> complex chaos </span>
              into solutions that feel
              <span className="italic text-[#9d80c2]"> effortless.</span>
            </h2>

            <p className="mt-8 text-[#cdbfe1]/80 text-lg leading-relaxed max-w-2xl">
              I am a full-stack developer and computer science undergraduate driven by the challenge of bridging heavy, unseen logic with elegant, responsive interfaces. I believe that the best applications are built on a bedrock of strong foundational computing principles, engineered to perform efficiently under any load.
            </p>

            <p className="mt-6 text-[#cdbfe1]/70 leading-relaxed max-w-2xl">
              Outside of academic life, my playground is the competitive coding circuit. Collaborating with teammates to build complete, functional products during intense hackathons is where I do my best learning. I am constantly exploring emerging architectures, turning abstract ideas into tangible, high-impact digital experiences.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-lg">
              <div className="p-5 rounded-2xl bg-[#100722] ring-1 ring-white/5 hover:ring-[#c9a875]/30 transition">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5]">Based in</div>
                <div className="mt-2 font-display text-2xl text-[#ece4f5]">{profile.location}</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#100722] ring-1 ring-white/5 hover:ring-[#c9a875]/30 transition">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5]">Focus</div>
                <div className="mt-2 font-display text-2xl text-[#ece4f5]">Full-Stack Web Dev</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
