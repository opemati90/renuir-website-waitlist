import type { Transition, Easing } from "framer-motion";

const easeBezier: Easing = [0.6, 0.01, 0.05, 0.9];

export const transition1: Transition = {
  duration: 1.3,
  ease: easeBezier,
};

export const transition2: Transition = {
  duration: 0.7,
  ease: easeBezier,
};
