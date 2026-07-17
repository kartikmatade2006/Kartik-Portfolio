import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "../data/portfolioData";
import ProjectLogo from "./ProjectLogo";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-sm mb-3">04 · Things I've built</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Projects
          </h2>
          <p className="text-ink-muted max-w-xl mb-14">
            A running list — this section is built to grow, so expect more here as I
            ship new things.
          </p>
        </Reveal>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="card-glow relative rounded-2xl border border-white/10 bg-base-card/60 p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-7 items-start"
            >
              {project.featured && (
                <div className="absolute -top-3 left-8 flex items-center gap-1.5 rounded-full bg-amber px-3 py-1 text-[11px] font-mono font-semibold text-base">
                  <Sparkles size={12} /> Featured
                </div>
              )}

              <ProjectLogo logoKey={project.logo} className="w-16 h-16 md:w-20 md:h-20 shrink-0" />

              <div>
                <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-ink-muted leading-relaxed mb-5 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-mono text-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-mono font-semibold text-base hover:bg-amber-soft transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-mono text-ink hover:border-teal hover:text-teal transition-colors"
                    >
                      <Github size={16} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Placeholder card hinting the list will keep growing */}
          <Reveal>
            <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-ink-faint font-mono text-sm">
              More projects coming soon — this space grows automatically as new entries
              are added to <span className="text-amber">portfolioData.js</span>.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
