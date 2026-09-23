"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.15,
  });

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.15,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine)"
    );

    const update = () => {
      setEnabled(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* Outer cursor */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 bg-cyan-300/[0.03] mix-blend-screen md:block"
      />

      {/* Center dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_4px_rgba(103,232,249,0.35)] md:block"
      />
    </>
  );
}