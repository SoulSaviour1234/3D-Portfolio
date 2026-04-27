import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Twitter } from "lucide-react";
import HeroScene from "./three/HeroScene";
import { profile } from "../mock";

const marqueeWords = [
  "Distributed Systems",
  "•",
  "Edge Compute",
  "•",
  "Developer Experience",
  "•",
  "Rust",
  "•",
  "Go",
  "•",
  "TypeScript",
  "•",
  "Performance Engineering",
  "•"
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Three.js background canvas */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Vignette / gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#0a0612_85%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a0612]" />

      {/* Foreground content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-36 lg:pt-48 pb-24 min-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]"
        >
          <span className="h-px w-10 bg-[#c9a875]/60" />
          Available for principal & staff roles — 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 font-display font-light leading-[0.92] tracking-tight text-balance text-[clamp(3rem,9vw,8.5rem)]"
        >
          <span className="text-[#ece4f5]">Building</span>
          <br />
          <span className="italic text-[#c9a875]">scalable</span>
          <span className="text-[#ece4f5]"> solutions</span>
          <br />
          <span className="text-[#ece4f5]">for a better </span>
          <span className="italic text-[#9d80c2]">tomorrow.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <p className="max-w-md text-[#cdbfe1]/85 leading-relaxed text-base">
            Hi, I'm <span className="text-[#e3c490]">{profile.name}</span>— a software engineer crafting infrastructure, edge platforms, and developer tools that scale to millions.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#work"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c9a875] text-[#0a0612] text-sm font-medium hover:bg-[#e3c490] transition-colors"
            >
              View selected work
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              data-cursor="hover"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-[#ece4f5] text-sm hover:bg-white/5 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 border-t border-white/10 pt-8"
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-display text-3xl lg:text-4xl text-[#ece4f5]">{s.value}</span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#9d8fb5]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden border-y border-white/10 bg-[#100722]/60 backdrop-blur-sm">
        <div className="flex w-max animate-marquee py-4">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className={`mx-6 font-display text-2xl ${
                w === "•" ? "text-[#c9a875]" : "text-[#ece4f5]/85 italic"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
