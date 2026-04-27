import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import { profile } from "../mock";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      const inbox = JSON.parse(localStorage.getItem("raaj_inbox") || "[]");
      inbox.unshift({ ...form, id: Date.now() });
      localStorage.setItem("raaj_inbox", JSON.stringify(inbox));
      toast.success("Message saved locally — will wire up to backend next.");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#9d8fb5]">
              <span className="font-mono text-[#c9a875]">07</span>
              <span className="h-px w-10 bg-white/15" />
              Contact
            </div>
            <h2 className="mt-6 font-display text-5xl lg:text-7xl leading-[0.98] tracking-tight text-balance">
              Have a system
              <br />
              worth
              <span className="italic text-[#c9a875]"> obsessing</span>
              <br />
              over?
            </h2>
            <p className="mt-6 text-[#cdbfe1]/75 max-w-md text-lg leading-relaxed">
              I take on a small number of staff & principal engagements each year. If your team needs deep infrastructure, distributed systems, or DX leadership — send a note.
            </p>

            <div className="mt-10 space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group" data-cursor="hover">
                <span className="h-11 w-11 rounded-full ring-1 ring-white/10 flex items-center justify-center group-hover:bg-[#c9a875] group-hover:text-[#0a0612] transition">
                  <Mail size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5]">Email</div>
                  <div className="text-[#ece4f5]">{profile.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="h-11 w-11 rounded-full ring-1 ring-white/10 flex items-center justify-center">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5]">Location</div>
                  <div className="text-[#ece4f5]">{profile.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {[
                { icon: Github, href: profile.social.github, label: "GitHub" },
                { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: profile.social.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-cursor="hover"
                  className="h-11 w-11 rounded-full ring-1 ring-white/10 flex items-center justify-center text-[#cdbfe1] hover:bg-[#c9a875] hover:text-[#0a0612] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 p-8 lg:p-10 rounded-3xl bg-[#100722] ring-1 ring-white/10"
          >
            <div className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">Your name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Ada Lovelace"
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#c9a875] outline-none py-3 text-[#ece4f5] placeholder:text-[#6f6383] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="ada@example.com"
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#c9a875] outline-none py-3 text-[#ece4f5] placeholder:text-[#6f6383] transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">Tell me about your system</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder="What are you building? What's blocking you?"
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#c9a875] outline-none py-3 text-[#ece4f5] placeholder:text-[#6f6383] resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                data-cursor="hover"
                className="group w-full inline-flex items-center justify-between px-6 py-4 rounded-full bg-[#c9a875] text-[#0a0612] font-medium hover:bg-[#e3c490] disabled:opacity-50 transition-colors"
              >
                <span>{sending ? "Sending..." : "Send message"}</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
