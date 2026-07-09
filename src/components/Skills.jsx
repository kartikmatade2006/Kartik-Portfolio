import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { SkillIcon } from "./icons";
import Reveal from "./Reveal";

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export default function Skills() {
  const grouped = groupByCategory(skills);

  return (
    <section id="skills" className="relative py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-sm mb-3">02 · What I work with</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Skills &amp; Toolkit
          </h2>
          <p className="text-ink-muted max-w-xl mb-14">
            A growing set of languages, frameworks and fundamentals I use to build,
            debug and ship software — updated as I keep learning.
          </p>
        </Reveal>

        <div className="space-y-14">
          {Object.entries(grouped).map(([category, items], gi) => (
            <div key={category}>
              <Reveal delay={gi * 0.05}>
                <h3 className="font-mono text-teal text-sm mb-5 uppercase tracking-wider">
                  {category}
                </h3>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="card-glow group rounded-xl border border-white/10 bg-base-card/60 p-4 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <SkillIcon iconKey={skill.icon} size={18} />
                      </div>
                      {typeof skill.level === "number" && (
                        <span className="font-mono text-[11px] text-ink-faint">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink font-medium leading-snug">
                      {skill.name}
                    </p>
                    {typeof skill.level === "number" && (
                      <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-amber to-teal"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
