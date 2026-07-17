import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "../data/portfolioData";
import profileImg from "../assets/profile.jpeg";

function Terminal() {
  const lines = profile.terminalLines;
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex];

    if (charIndex <= current.length) {
      const t = setTimeout(() => {
        setDisplay((prev) => {
          const copy = [...prev];
          copy[lineIndex] = current.slice(0, charIndex);
          return copy;
        });
        setCharIndex((c) => c + 1);
      }, 26);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 420);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="w-full max-w-md rounded-xl border border-white/10 bg-base-light/60 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F45D5D]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#F2A93B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#4FD1C5]" />
        <span className="ml-3 font-mono text-xs text-ink-faint">kartik@portfolio: ~</span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[180px]">
        {lines.map((_, i) => {
          const isPrompt = i % 2 === 0;
          const text = display[i] ?? "";
          const isCurrent = i === lineIndex;
          if (text === "" && i > lineIndex) return null;
          return (
            <div key={i} className={isPrompt ? "text-teal" : "text-ink pl-4 mb-2"}>
              {isPrompt && <span className="text-amber">$ </span>}
              {text}
              {isCurrent && <span className="inline-block w-2 h-4 bg-amber ml-0.5 animate-blink align-middle" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 dot-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-amber/10 blur-[100px] animate-floaty"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-teal/10 blur-[100px] animate-floaty"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-amber text-sm mb-4 tracking-wide">
            Hi, I'm
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] text-ink">
            {profile.name}
          </h1>
          <p className="font-mono text-teal mt-4 text-base md:text-lg">
            {profile.role} · {profile.tagline}
          </p>
          <p className="text-ink-muted mt-6 text-base md:text-lg leading-relaxed max-w-lg">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-mono text-ink hover:border-amber hover:text-amber transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-mono text-ink hover:border-teal hover:text-teal transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-mono text-base font-semibold hover:bg-amber-soft transition-colors"
            >
              <Mail size={16} /> Email me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-amber/40 to-teal/30 blur-lg opacity-60" />
            <img
              src={profileImg}
              alt={profile.name}
              className="relative w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
          <Terminal />
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-amber transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to skills"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
