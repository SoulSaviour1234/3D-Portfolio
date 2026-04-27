import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../mock";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section className="relative py-28 lg:py-36 bg-gradient-to-b from-[#0a0612] via-[#0d0820] to-[#0a0612]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
          <span className="font-mono text-[#c9a875]">05</span>
          <span className="h-px w-10 bg-white/15" />
          Words from teammates
        </div>

        <div className="mt-12 relative">
          <Quote size={64} className="absolute -top-2 -left-2 text-[#c9a875]/15" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl lg:text-4xl leading-[1.25] text-balance text-[#ece4f5] max-w-4xl"
            >
              “{t.quote}”
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full ring-2 ring-[#c9a875]/40 object-cover"
                />
                <div>
                  <div className="text-[#ece4f5] font-medium">{t.name}</div>
                  <div className="text-sm text-[#9d8fb5]">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#c9a875]" : "w-1.5 bg-white/15 hover:bg-white/30"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  data-cursor="hover"
                  className="h-11 w-11 rounded-full ring-1 ring-white/15 flex items-center justify-center text-[#ece4f5] hover:bg-white/5 transition"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  data-cursor="hover"
                  className="h-11 w-11 rounded-full bg-[#c9a875] text-[#0a0612] flex items-center justify-center hover:bg-[#e3c490] transition"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
