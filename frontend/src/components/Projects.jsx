import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../mock";

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const [tx, setTx] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTx({ rx: (0.5 - y) * 8, ry: (x - 0.5) * 10, mx: x * 100, my: y * 100 });
  };
  const onLeave = () => setTx({ rx: 0, ry: 0, mx: 50, my: 50 });

  return (
    <motion.a
      href={project.link}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      style={{
        transform: `perspective(1200px) rotateX(${tx.rx}deg) rotateY(${tx.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative block rounded-3xl overflow-hidden bg-[#100722] ring-1 ring-white/10 hover:ring-[#c9a875]/40 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-[#0a0612]/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${tx.mx}% ${tx.my}%, rgba(227,196,144,0.18), transparent 55%)`,
          }}
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#0a0612]/70 backdrop-blur text-[10px] uppercase tracking-[0.2em] text-[#c9a875] ring-1 ring-[#c9a875]/30">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#0a0612]/70 backdrop-blur text-[10px] tracking-widest text-[#cdbfe1] ring-1 ring-white/10 font-mono">
            {project.year}
          </span>
        </div>
        <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[#0a0612]/80 backdrop-blur ring-1 ring-white/10 flex items-center justify-center text-[#ece4f5] group-hover:bg-[#c9a875] group-hover:text-[#0a0612] transition-colors">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="relative p-6 lg:p-7">
        <h3 className="font-display text-2xl text-[#ece4f5] leading-tight">{project.title}</h3>
        <p className="mt-3 text-sm text-[#cdbfe1]/70 leading-relaxed line-clamp-2">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-[#cdbfe1] font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-3 gap-3">
          {Object.entries(project.metrics).map(([k, v]) => (
            <div key={k}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9d8fb5]">{k}</div>
              <div className="mt-1 font-display text-base text-[#e3c490]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

const Projects = () => {
  return (
    <section id="work" className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
              <span className="font-mono text-[#c9a875]">02</span>
              <span className="h-px w-10 bg-white/15" />
              Selected Work
            </div>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance max-w-3xl">
              Systems that ship,
              <span className="italic text-[#c9a875]"> survive</span>
              , and scale.
            </h2>
          </div>
          <p className="max-w-sm text-[#cdbfe1]/70">
            A few projects from the last decade. Hover for details — each card responds to your cursor in real-time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <TiltCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
