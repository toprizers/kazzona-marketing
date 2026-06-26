"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      aria-hidden="true"
    >
      {/* Main glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(252,74,26,0.06) 0%, rgba(247,183,51,0.03) 40%, transparent 70%)",
        }}
      />
      {/* Small bright dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-primary/30 blur-[2px]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
}
