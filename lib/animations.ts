// lib/animations.ts
import type { MotionProps } from "framer-motion";

export const ctaAnimation: MotionProps = {
  whileHover: {
    y: -5,
    opacity: 0.85,
  },
  whileTap: {
    scale: 0.97,
  },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export const arrowAnimation: MotionProps = {
  whileHover: {
    x: 5,
  },
  transition: {
    type: "spring",
    stiffness: 400,
  },
};
