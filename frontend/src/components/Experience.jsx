import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { experience } from "../mock";

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
          <span className="font-mono text-[#c9a875]">04</span>
          <span className="h-px w-10 bg-white/15" />
          Experience
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance sticky top-32">
              A decade of
              <span className="italic text-[#c9a875]"> shipping </span>
              quietly important software.
            </h2>
          </div>

          <div className="lg:col-span-8 relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#c9a875]/40 via-white/10 to-transparent" />

            <div className="space-y-12">
              {experience.map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="relative pl-12 lg:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-2 lg:left-4 top-2 h-5 w-5 rounded-full bg-[#0a0612] ring-2 ring-[#c9a875] flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9a875]" />
                  </div>

                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-2xl lg:text-3xl text-[#ece4f5]">{e.role}</h3>
                    <span className="text-[#c9a875]">@ {e.company}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.2em] text-[#9d8fb5] font-mono">
                    <span className="inline-flex items-center gap-1.5"><Briefcase size={12} />{e.period}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin size={12} />{e.location}</span>
                  </div>
                  <p className="mt-4 text-[#cdbfe1]/80 leading-relaxed max-w-2xl">{e.description}</p>
                  <ul className="mt-5 space-y-2 max-w-2xl">
                    {e.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#cdbfe1]/70">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[#c9a875] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
