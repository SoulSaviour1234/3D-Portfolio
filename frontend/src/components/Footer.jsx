import React from "react";
import { ArrowUp, FileText } from "lucide-react";
import { profile, navLinks } from "../mock";

const Footer = () => {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const stackTags = ["React", "FastAPI", "Gemini", "PostgreSQL"];

  return (
    <footer className="relative pt-20 pb-10 bg-[#070410] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── Big headline ── */}
        <div className="border-b border-white/5 pb-12 mb-10">
          <div className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.9] tracking-tighter text-balance">
            <span className="text-[#ece4f5]">Let's build </span>
            <span className="italic text-[#c9a875]">tomorrow.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* ── Brand & Bio ── */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/Srijit.png" alt="Srijit Paul" className="h-9 w-9 rounded-md object-cover ring-1 ring-white/10" />
              <div>
                <div className="text-sm tracking-[0.2em] text-[#ece4f5]">RAAJPAKHI</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#9d8fb5]">THE ULTIMATE DEVELOPER</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-[#cdbfe1]/65 leading-relaxed">
              Computer Science undergraduate pushing the boundaries of web architecture. Scaling ideas from competitive hackathon sprints to production-ready platforms.
            </p>
          </div>

          {/* ── Sitemap ── */}
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">Sitemap</div>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[#cdbfe1] hover:text-[#e3c490] text-sm transition-colors link-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── System Status Board ── */}
          <div className="md:col-span-4 flex flex-col gap-4">

            {/* STATUS */}
            <div className="flex flex-col gap-[3px]">
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#9d8fb5]/50">STATUS</span>
              <span className="text-xs font-mono text-[#cdbfe1] leading-relaxed">
                Architecting SCMS &amp; competing in hackathons.
              </span>
            </div>

            {/* LATEST DEPLOYMENT */}
            <div className="flex flex-col gap-[3px]">
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#9d8fb5]/50">LATEST</span>
              <span className="text-xs font-mono text-[#cdbfe1] leading-relaxed">
                Dr. Brinjal — Dual-tier AI crop pathology diagnostics.
              </span>
            </div>

            {/* RESUME */}
            <div className="flex flex-col gap-[6px]">
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#9d8fb5]/50">RESUME</span>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 self-start px-4 py-2 rounded-md font-mono text-xs tracking-widest text-[#e3c490] ring-1 ring-[#c9a875]/30 bg-[#c9a875]/5 hover:bg-[#c9a875]/15 hover:ring-[#c9a875]/60 transition-all duration-300"
              >
                <FileText size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                View Resume
              </a>
            </div>



          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6f6383] font-mono uppercase tracking-[0.2em]">
          <div>© 2026 RAAJPAKHI. CRAFTED WITH CARE.</div>
          <button
            onClick={goTop}
            data-cursor="hover"
            className="inline-flex items-center gap-2 hover:text-[#e3c490] transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
