"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 300, x: "10%", y: "20%", color: "rgba(252,74,26,0.08)", duration: 20, delay: 0 },
  { size: 400, x: "80%", y: "10%", color: "rgba(247,183,51,0.06)", duration: 25, delay: 2 },
  { size: 250, x: "70%", y: "60%", color: "rgba(252,74,26,0.05)", duration: 18, delay: 4 },
  { size: 350, x: "20%", y: "70%", color: "rgba(247,183,51,0.07)", duration: 22, delay: 1 },
  { size: 200, x: "50%", y: "40%", color: "rgba(244,63,94,0.04)", duration: 30, delay: 3 },
];

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -40, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
