"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hover = true,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.05, y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-lg",
        hover && "hover:border-[#026dc7]/50 hover:shadow-xl hover:shadow-[#026dc7]/10",
        "transition-all duration-500",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
