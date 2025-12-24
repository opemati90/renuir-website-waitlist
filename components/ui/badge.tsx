"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  name: string;
  stars?: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  name, 
  stars = 3, 
  className 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative flex flex-col items-center justify-center p-4 cursor-pointer group",
        className
      )}
    >
      {/* Hexagon shape using clip-path */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[#026dc7]/20 border-2 border-[#026dc7]/40 clip-hexagon group-hover:bg-[#026dc7]/30 group-hover:border-[#026dc7]/60 transition-all duration-300" />
        <div className="relative z-10 text-center">
          <div className="text-xs font-bold text-white mb-1">{name}</div>
          <div className="flex items-center justify-center gap-0.5">
            {[...Array(stars)].map((_, i) => (
              <Star
                key={i}
                className="h-2.5 w-2.5 fill-[#026dc7] text-[#026dc7]"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
