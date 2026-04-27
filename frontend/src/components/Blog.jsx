import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { blog } from "../mock";

const Blog = () => {
  return (
    <section id="writing" className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
              <span className="font-mono text-[#c9a875]">06</span>
              <span className="h-px w-10 bg-white/15" />
              Writing
            </div>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance max-w-3xl">
              Notes from the trenches of
              <span className="italic text-[#c9a875]"> production.</span>
            </h2>
          </div>
          <a
            href="#"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-sm text-[#cdbfe1] hover:text-[#e3c490] link-underline"
          >
            View all essays <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blog.map((b, i) => (
            <motion.a
              key={b.id}
              href="#"
              data-cursor="hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group flex flex-col rounded-3xl overflow-hidden bg-[#100722] ring-1 ring-white/10 hover:ring-[#c9a875]/40 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612]/85 via-[#0a0612]/30 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0a0612]/70 backdrop-blur ring-1 ring-[#c9a875]/30">
                  <Tag size={11} className="text-[#c9a875]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a875]">{b.tag}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#9d8fb5] font-mono">
                  <span>{b.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock size={11} />{b.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-[#ece4f5] leading-tight group-hover:text-[#e3c490] transition-colors">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-[#cdbfe1]/70 leading-relaxed flex-1">{b.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#c9a875]">
                  Read essay
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
