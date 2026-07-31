"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion/fade";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedReveal({ children, className }: Props) {
  return (
    <motion.div
      variants={fadeUp as any}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
