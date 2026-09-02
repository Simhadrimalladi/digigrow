"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid trailing physics (orb trails smoothly behind cursor)
  const springX = useSpring(mouseX, { stiffness: 250, damping: 20, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 20, mass: 0.4 });

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest('[role="button"]') ||
        target.closest(".interactive-card") ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Outer Soft Orange Glow Ring */}
      <motion.div
        className="rounded-full pointer-events-none"
        animate={{
          width: isHovered ? 46 : isClicking ? 18 : 26,
          height: isHovered ? 46 : isClicking ? 18 : 26,
          backgroundColor: isHovered
            ? "rgba(249, 115, 22, 0.25)"
            : "rgba(249, 115, 22, 0.75)",
          borderWidth: isHovered ? "2px" : "0px",
          borderColor: "#f97316",
          boxShadow: isHovered
            ? "0 0 24px rgba(249, 115, 22, 0.8), inset 0 0 10px rgba(249, 115, 22, 0.4)"
            : "0 0 14px rgba(249, 115, 22, 0.85)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      />
    </motion.div>
  );
}
