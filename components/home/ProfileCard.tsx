"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "../ui/typography";
import { HexBadge } from "../ui/hex-badge";
import { CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  progress?: number;
  completed?: boolean;
}

interface ProfileCardProps {
  name?: string;
  title?: string;
  certifications?: Certification[];
  badges?: { name: string; stars: number }[];
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Renuir User",
  title = "Lost & Found Specialist",
  certifications = [
    { title: "Lost Item Recovery", progress: 85 },
    { title: "AI Matching Specialist", progress: 70 },
  ],
  badges = [
    { name: "Item Matching", stars: 3 },
    { name: "Verification", stars: 3 },
    { name: "Recovery", stars: 2 },
  ],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl hover:border-[#026dc7]/50 hover:shadow-[#026dc7]/20 transition-all duration-500"
    >
      {/* Profile Header - Picture and Name Side by Side */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#026dc7] to-[#0357a1] flex items-center justify-center text-white font-bold text-xl">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#141414]" />
        </div>
        <div>
          <Typography variant="h4" className="text-white font-bold mb-1">
            {name}
          </Typography>
          <Typography variant="smallText" className="text-[#9ca3af] text-sm">
            {title}
          </Typography>
        </div>
      </div>

      {/* Certifications Section - Two Cards Side by Side */}
      <div className="mb-8">
        <Typography variant="h6" className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
          Certifications
        </Typography>
        <div className="grid grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-4 rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-[#026dc7]/30 transition-colors"
            >
              <Typography variant="smallText" className="text-white font-semibold text-sm mb-3">
                {cert.title}
              </Typography>
              {cert.progress !== undefined && (
                <div className="w-full h-2 bg-[#0a0a0a] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cert.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#026dc7] to-[#38a9f8] rounded-full"
                  />
                </div>
              )}
              {cert.completed && (
                <div className="mt-2 flex items-center justify-end">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <Typography variant="h6" className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
          Badges
        </Typography>
        <div className="flex items-center gap-4 flex-wrap">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
            >
              <HexBadge name={badge.name} stars={badge.stars} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
