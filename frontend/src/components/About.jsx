import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile } from "../mock";
import GlassOrb from "./three/GlassOrb";

const About = () => {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
          <span className="font-mono text-[#c9a875]">01</span>
          <span className="h-px w-10 bg-white/15" />
          About
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — 3D orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-[#1a0f2e] to-[#0f1840] ring-1 ring-white/10 overflow-hidden">
              <GlassOrb className="absolute inset-0" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs font-mono text-[#9d8fb5]">
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
              className="hidden lg:flex absolute -right-6 top-10 px-4 py-3 rounded-2xl bg-[#0a0612]/90 ring-1 ring-white/10 backdrop-blur shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Sparkles size={16} className="text-[#c9a875]" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9d8fb5]">Currently</div>
                  <div className="text-sm text-[#ece4f5]">Edge runtimes & CRDTs</div>
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
              Engineer obsessed with
              <span className="italic text-[#c9a875]"> systems </span>
              that disappear into the
              <span className="italic text-[#9d80c2]"> background.</span>
            </h2>

            <p className="mt-8 text-[#cdbfe1]/80 text-lg leading-relaxed max-w-2xl">
              {profile.bio} I care about latency, ergonomics, and the developer who has to ship at 2 AM. Most of my work lives at the boundary between distributed systems and the human beings who depend on them.
            </p>

            <p className="mt-6 text-[#cdbfe1]/70 leading-relaxed max-w-2xl">
              Outside of work I write essays on engineering culture, contribute to open-source consensus libraries, and occasionally teach a workshop on building for reliability.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-lg">
              <div className="p-5 rounded-2xl bg-[#100722] ring-1 ring-white/5 hover:ring-[#c9a875]/30 transition">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5]">Based in</div>
                <div className="mt-2 font-display text-2xl text-[#ece4f5]">{profile.location}</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#100722] ring-1 ring-white/5 hover:ring-[#c9a875]/30 transition">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5]">Focus</div>
                <div className="mt-2 font-display text-2xl text-[#ece4f5]">Infra & DX</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
