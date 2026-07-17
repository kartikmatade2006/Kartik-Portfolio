import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-10 dot-grid overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-amber/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-amber text-sm mb-3">05 · Let's talk</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-5">
            Interested in working together?
          </h2>
          <p className="text-ink-muted text-base md:text-lg max-w-xl mx-auto mb-10">
            I'm actively looking for internships, freshman/junior dev roles and
            collaborative projects. If something here caught your eye, I'd love to
            hear from you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm md:text-base font-mono font-semibold text-base hover:bg-amber-soft transition-colors"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <motion.button
              onClick={copyEmail}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-mono text-ink hover:border-teal hover:text-teal transition-colors"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} className="text-teal" /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy email"}
            </motion.button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-5 mt-12">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-ink-muted hover:text-amber hover:border-amber transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-ink-muted hover:text-teal hover:border-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
