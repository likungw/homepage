import type { ReactElement } from "react";
import { NextSeo } from "next-seo";
import { motion, useReducedMotion } from "framer-motion";
import Link from "components/Link";
import ResearchShowcase from "components/ResearchShowcase";
import TypewriterText from "components/TypewriterText";
import { researchDemos } from "../data/research";

// Visual-only palette: keep data/research.ts (including custom video paths) untouched.
const galleryPalette = [
  { accent: "#B9A5FF", background: "#28204A" },
  { accent: "#BCA8FF", background: "#26234E" },
  { accent: "#DFB5FF", background: "#39234E" },
  { accent: "#A4B2FF", background: "#242647" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring" as const, stiffness: 86, damping: 21, mass: 1, delay: reduceMotion ? 0 : delay },
  });

  return (
    <>
      <NextSeo
        title="Kun Li Research Group | Tsinghua AIR"
        description="Research at the intersection of high-performance computing, Physical AI, and AI for Science: scalable intelligence for the physical world."
        openGraph={{ url: "/", title: "Kun Li Research Group | Tsinghua AIR" }}
      />

      <div className="research-home flex flex-col gap-20 pb-5 sm:gap-24 lg:gap-28">
        <section aria-label="Research group introduction" className="home-hero relative isolate pt-4 sm:pt-10">
          <div className="home-ambient home-ambient-one" aria-hidden="true" />
          <div className="home-ambient home-ambient-two" aria-hidden="true" />
          <motion.div {...fadeUp(0.02)} className="home-eyebrow">
            <span className="home-status-dot" aria-hidden="true" />
            KUN LI RESEARCH GROUP <span className="home-eyebrow-separator">/</span> TSINGHUA AIR
          </motion.div>
          <motion.h1 {...fadeUp(0.13)} className="home-hero-title">
            Building intelligence for the <span className="home-accent">physical world.</span>
          </motion.h1>
          <motion.div {...fadeUp(0.24)} className="home-hero-copy">
            <TypewriterText
              text="We connect high-performance computing, artificial intelligence, and scientific discovery to model, simulate, and understand complex physical systems across scales."
              className="home-hero-typewriter"
              speed={25}
            />
          </motion.div>
          <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link  href="/projects" className="home-cta-primary">
              Explore research <span className="home-cta-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link href="/people" className="home-cta-secondary">
              Meet the team <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </section>

        {/* Keep the freely arranged four-video gallery from v2. */}
        <ResearchShowcase demos={researchDemos.map((demo, i) => ({ ...demo, ...galleryPalette[i % galleryPalette.length] }))} />


      </div>
    </>
  );
}

// Broad Home for research visuals; use the shared responsive site gutters.
Home.getLayout = (page: ReactElement) => (
  <main className="site-container site-container--home ring-offset-primary">
    {page}
  </main>
);
