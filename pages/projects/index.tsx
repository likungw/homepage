import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import { motion, useReducedMotion } from "framer-motion";
import ResearchDirections from "components/ResearchDirections";
import TypewriterText from "components/TypewriterText";
import { researchDirections } from "../../data/research";
import { researchVision } from "../../data/researchVision";
import { researchProjects } from "../../data/projects";

export default function ProjectsPage() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <NextSeo
        title="Projects | Kun Li Research Group"
        description="Explore Physical AI, AI for Science, and High-Performance Computing projects at the Kun Li Research Group."
        canonical="https://www.likun.tech/projects"
      />
      <div className="projects-page research-home">
        <section aria-labelledby="projects-heading" className="projects-intro">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : .66, ease: "easeOut" }}
          >
            <p className="home-section-kicker"><span className="home-kicker-line" /> WHAT WE EXPLORE</p>
            <h1 id="projects-heading" className="direction-section-title">
              Our Research <span className="home-accent">Directions</span><span className="home-purple-dot">.</span>
            </h1>
          </motion.div>
          <TypewriterText text={researchVision} className="direction-vision" speed={27} />
          <p className="projects-interaction-hint">
            <span className="projects-hint-spark" aria-hidden="true">✳</span> Hover over a direction to reveal its projects. Tap to explore on touch devices.
          </p>
        </section>

        <ResearchDirections directions={researchDirections} projects={researchProjects} />
        <p className="projects-footnote">
          Project detail pages are editable showcases. Items marked “Concept demo” are layout examples, not published results.
        </p>
      </div>
    </>
  );
}

ProjectsPage.getLayout = (page: ReactElement) => (
  <main className="site-container site-container--standard ring-offset-primary">{page}</main>
);
