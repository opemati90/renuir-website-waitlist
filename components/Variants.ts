import { Transition, Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "none";

export const fadeIn = (
  direction: Direction,
  type: Transition["type"],
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut", // ✅ valid Easing keyword
      },
    },
  };
};
