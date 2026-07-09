import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
import { certifications } from "../data/portfolioData";
import Reveal from "./Reveal";

// Import certificate images here, then map them by imageKey below.
// To add a new certificate: drop the image in src/assets, import it here,
// add it to `imageRegistry`, then add an entry to `certifications` in portfolioData.js.
import jpmorganImg from "../assets/cert-jpmorgan.png";
import tataImg from "../assets/cert-tata.png";

const imageRegistry = {
  jpmorgan: jpmorganImg,
  tata: tataImg,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6 md:px-10 bg-base-light/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-amber text-sm mb-3">03 · Proof of work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Certifications
          </h2>
          <p className="text-ink-muted max-w-xl mb-14">
            Job simulations and courses I've completed to build practical, real-world
            skills beyond the classroom.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glow rounded-2xl border border-white/10 bg-base-card/60 overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={imageRegistry[cert.imageKey]}
                  alt={`${cert.title} certificate`}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-card via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-teal font-mono mt-1">
                      {cert.issuer} · {cert.platform}
                    </p>
                  </div>
                  <Award className="text-amber shrink-0" size={22} />
                </div>

                <div className="flex items-center gap-2 text-ink-faint text-xs font-mono">
                  <Calendar size={14} />
                  {cert.date}
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {cert.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-ink-muted"
                    >
                      <CheckCircle2 size={12} className="text-teal" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
