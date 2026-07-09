import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink-faint">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
        <p>Designed &amp; coded from scratch.</p>
      </div>
    </footer>
  );
}
