"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, hoverLift = false }: { children: ReactNode; className?: string; delay?: number; hoverLift?: boolean }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={hoverLift && !reduced ? { y: -5, transition: { duration: 0.22 } } : undefined} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduced ? 0 : 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
