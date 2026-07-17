import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-ink">
          <span className="text-amber">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="text-amber">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-amber ${
                  active === link.href ? "text-amber" : "text-ink-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center rounded-full border border-amber/40 px-4 py-1.5 text-sm font-mono text-amber hover:bg-amber hover:text-base transition-colors"
        >
          Hire me
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-base/95 backdrop-blur-md border-b border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="text-ink-muted hover:text-amber">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`} className="text-amber">
                  Hire me →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
