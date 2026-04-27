import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { profile, navLinks } from "../mock";

const Footer = () => {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-20 pb-10 bg-[#070410] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Big name */}
        <div className="border-b border-white/5 pb-12 mb-10">
          <div className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.9] tracking-tighter text-balance">
            <span className="text-[#ece4f5]">Let's build </span>
            <span className="italic text-[#c9a875]">tomorrow.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-gradient-to-br from-[#3d2d63] to-[#1e2a5e] ring-1 ring-white/10">
                <span className="font-display text-lg text-[#e3c490]">R</span>
              </span>
              <div>
                <div className="text-sm tracking-[0.2em] text-[#ece4f5]">{profile.name.toUpperCase()}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#9d8fb5]">{profile.role}</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-[#cdbfe1]/65 leading-relaxed">
              Independent principal engineer. Currently helping a small set of teams ship infrastructure they're proud of.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">Sitemap</div>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[#cdbfe1] hover:text-[#e3c490] text-sm transition-colors link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">Elsewhere</div>
            <div className="mt-4 flex items-center gap-3">
              {[
                { Icon: Github, href: profile.social.github, label: "GitHub" },
                { Icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: profile.social.twitter, label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor="hover"
                  className="h-10 w-10 rounded-full ring-1 ring-white/10 flex items-center justify-center text-[#cdbfe1] hover:bg-[#c9a875] hover:text-[#0a0612] transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              data-cursor="hover"
              className="mt-5 inline-block text-[#ece4f5] hover:text-[#e3c490] link-underline"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#6f6383] font-mono uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} {profile.name}. Crafted with care.</div>
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
