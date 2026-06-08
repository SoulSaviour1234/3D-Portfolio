import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#0a0612]/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <img src="/Srijit.png" alt="Srijit Paul" className="h-9 w-9 rounded-md object-cover ring-1 ring-white/10" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#c9a875] animate-pulse" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm tracking-[0.2em] text-[#ece4f5]/90 font-medium">{profile.name.toUpperCase()}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9d8fb5]">{profile.role}</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline px-4 py-2 text-sm text-[#cdbfe1] hover:text-[#e3c490] transition-colors"
              data-cursor="hover"
            >
              <span className="font-mono text-[10px] text-[#7a6c93] mr-1">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c9a875] text-[#0a0612] text-sm font-medium hover:bg-[#e3c490] transition-colors"
          >
            Let's talk
            <span className="h-1.5 w-1.5 rounded-full bg-[#0a0612] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-[#ece4f5]"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#0a0612]/95 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[#cdbfe1] hover:text-[#e3c490]"
                >
                  <span className="font-mono text-xs text-[#7a6c93] mr-2">0{i + 1}</span>
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#c9a875] text-[#0a0612] font-medium"
              >
                Let's talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
