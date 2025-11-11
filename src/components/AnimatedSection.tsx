"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedSectionProps {
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  yOffset = 24,
}: PropsWithChildren<AnimatedSectionProps>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
