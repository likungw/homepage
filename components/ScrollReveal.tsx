import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Shared, understated entrance for the text-led sections (not the draggable photo galleries). */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.66, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
