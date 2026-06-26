"use client";

import { type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export function Parallax({ children, className = "", speed = 0.3, direction = "up" }: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, factor * speed * 300]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
