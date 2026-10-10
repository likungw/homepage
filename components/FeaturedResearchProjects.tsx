import { motion, useReducedMotion } from "framer-motion";
import Link from "components/Link";
import type { ResearchProject } from "../data/projects";

const featuredSlugs = ["atomworld-mem", "atomworld-mirror", "wamachine"] as const;

const featuredThemes: Record<string, { number: string; caption: string; symbol: string }> = {
  "atomworld-mem": { number: "01", caption: "MEMORY-RESTORED WORLDS", symbol: "◎" },
  "atomworld-mirror": { number: "02", caption: "MACRO-STEP DYNAMICS", symbol: "↗" },
  wamachine: { number: "03", caption: "STATEFUL AI INFERENCE", symbol: "⌘" },
};

/** Three persistent project cards complement the direction-based hover explorer. */
export default function FeaturedResearchProjects({ projects }: { projects: ResearchProject[] }) {
  const reduceMotion = useReducedMotion();
  const chosen = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter(
    (project): project is ResearchProject => project !== undefined
  );

  return (
    <section className="rsi-featured-section" aria-labelledby="rsi-featured-title">
      <div className="rsi-featured-header">
        <div>
          <p className="home-section-kicker"><span className="home-kicker-line" /> SELECTED RESEARCH</p>
          <h2 id="rsi-featured-title" className="rsi-featured-title">Featured <span className="home-accent">projects</span>.</h2>
        </div>
        <p className="rsi-featured-caption">Explore student-maintained research sites and project details.</p>
      </div>
      <div className="rsi-featured-grid">
        {chosen.map((project, index) => {
          const theme = featuredThemes[project.slug];
          const href = project.websiteUrl || `/projects/${project.slug}`;
          const external = Boolean(project.websiteUrl);
          return (
            <motion.div
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
            >
              <Link href={href} className="rsi-featured-card" aria-label={`Explore ${project.title}`}>
                <div className="rsi-featured-topline"><span>{theme.number} / RSI SCIENCE</span><span aria-hidden="true">↗</span></div>
                <div className={`rsi-featured-art rsi-featured-art--${project.slug}`} aria-hidden="true">
                  <span className="rsi-featured-orbit" />
                  <span className="rsi-featured-symbol">{theme.symbol}</span>
                </div>
                <div className="rsi-featured-content">
                  <p>{theme.caption}</p>
                  <h3>{project.title}</h3>
                  <span>{project.summary}</span>
                  <strong>{external ? "Open project website" : "View project & paper"} <span aria-hidden="true">↗</span></strong>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
