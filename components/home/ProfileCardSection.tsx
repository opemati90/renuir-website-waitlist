"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { ProfileCard } from "./ProfileCard";

export const ProfileCardSection = () => {
  return (
    <section className="bg-[#0a0a0a] section-padding relative overflow-hidden">
      {/* Background image or gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#026dc7]/10 to-transparent" />
      </div>
      
      <div className="app-container relative">
        <div className="flex justify-center items-center">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

