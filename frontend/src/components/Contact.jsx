import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "../mock";

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS credentials — fill these in after setting up your EmailJS account.
// Guide: https://www.emailjs.com/docs/introduction/how-does-emailjs-work/
//
// 1. Sign up free at https://emailjs.com
// 2. "Email Services" → Add Service → Gmail → connect your Gmail account → Copy Service ID
// 3. "Email Templates" → Create Template → design your template → Copy Template ID
//    Template variables to use: {{from_name}}, {{from_email}}, {{message}}, {{to_name}}
// 4. "Account" → API Keys → Copy your Public Key
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

const IS_CONFIGURED =
  EMAILJS_SERVICE_ID  !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY  !== "YOUR_PUBLIC_KEY";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields before sending.");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // If keys haven't been configured yet, save locally and show a helpful notice.
    if (!IS_CONFIGURED) {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 700));
      const inbox = JSON.parse(localStorage.getItem("raaj_inbox") || "[]");
      inbox.unshift({ ...form, id: Date.now() });
      localStorage.setItem("raaj_inbox", JSON.stringify(inbox));
      setStatus("error");
      setErrorMsg("EmailJS not configured yet — message saved locally. See Contact.jsx for setup instructions.");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          reply_to:   form.email,
          name:       form.name,   // used by {{name}} in "From Name" field
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try emailing me directly at " + profile.email);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── Left panel ── */}
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
              Let's build
              <br />
              something
              <span className="italic text-[#c9a875]"> exceptional.</span>
            </h2>
            <p className="mt-6 text-[#cdbfe1]/75 max-w-md text-lg leading-relaxed">
              I am always open to discussing full-stack architecture, hackathon
              collaborations, or new engineering roles. Whether you are building
              intelligent AI platforms or need a dedicated developer to scale
              your system — send a note.
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
                { icon: Github,        href: profile.social.github,    label: "GitHub" },
                { icon: Linkedin,      href: profile.social.linkedin,  label: "LinkedIn" },
                { icon: Instagram,     href: profile.social.instagram, label: "Instagram" },
                { icon: MessageCircle, href: profile.social.whatsapp,  label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="hover"
                  className="h-11 w-11 rounded-full ring-1 ring-white/10 flex items-center justify-center text-[#cdbfe1] hover:bg-[#c9a875] hover:text-[#0a0612] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Form panel ── */}
          <motion.form
            ref={formRef}
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 p-8 lg:p-10 rounded-3xl bg-[#100722] ring-1 ring-white/10 relative overflow-hidden"
          >

            {/* ── Success overlay ── */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#100722] rounded-3xl px-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="h-16 w-16 rounded-full bg-[#c9a875]/15 ring-1 ring-[#c9a875]/40 flex items-center justify-center"
                  >
                    <CheckCircle2 size={28} className="text-[#c9a875]" />
                  </motion.div>
                  <h3 className="text-2xl font-display text-[#ece4f5]">Message sent!</h3>
                  <p className="text-[#cdbfe1]/70 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">
                  Your name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Ada Lovelace"
                  disabled={isSending}
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#c9a875] outline-none py-3 text-[#ece4f5] placeholder:text-[#6f6383] transition-colors disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="ada@example.com"
                  disabled={isSending}
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#c9a875] outline-none py-3 text-[#ece4f5] placeholder:text-[#6f6383] transition-colors disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[#9d8fb5] font-mono">
                  How can we collaborate?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder="What are you building? How can I help?"
                  disabled={isSending}
                  className="mt-2 w-full bg-transparent border-b border-white/15 focus:border-[#c9a875] outline-none py-3 text-[#ece4f5] placeholder:text-[#6f6383] resize-none transition-colors disabled:opacity-50"
                />
              </div>

              {/* Error banner */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-500/10 ring-1 ring-red-500/30 text-red-300 text-sm"
                  >
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSending}
                data-cursor="hover"
                className="group w-full inline-flex items-center justify-between px-6 py-4 rounded-full bg-[#c9a875] text-[#0a0612] font-medium hover:bg-[#e3c490] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  {isSending && (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  )}
                  {isSending ? "Sending..." : "Send message"}
                </span>
                <Send
                  size={16}
                  className={`transition-transform duration-300 ${isSending ? "opacity-0" : "group-hover:translate-x-1"}`}
                />
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
