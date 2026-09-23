"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main ambient glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[-15%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.045] blur-[130px]"
      />

      {/* Purple ambient glow */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-15%] top-[15%] h-[550px] w-[550px] rounded-full bg-purple-500/[0.045] blur-[140px]"
      />

      {/* Bottom glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[30%] h-[450px] w-[600px] rounded-full bg-blue-500/[0.025] blur-[150px]"
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Moving horizontal light */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 top-[35%] h-px w-[35%] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
      />

      {/* Small floating dots */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[18%] top-[32%] h-1 w-1 rounded-full bg-cyan-300"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.65, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[23%] top-[42%] h-1 w-1 rounded-full bg-purple-300"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.15, 0.6, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[55%] top-[20%] h-1 w-1 rounded-full bg-white"
      />
    </div>
  );
}