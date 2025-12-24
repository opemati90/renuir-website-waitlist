"use client";

import React from "react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { ArrowRight, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { ProfileCard } from "./ProfileCard";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      <div className="app-container relative">
        {/* Split Layout: Left Text, Right Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and CTA */}
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading with Color Variations */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 leading-[1.1]">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Lost it?
                </span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#026dc7]">
                  Renuir
                </span>
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  it.
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">The future of lost & found is</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">human</span>
                  <Search className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#026dc7]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">+</span>
                  <Zap className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-[#026dc7]" />
                  <span className="text-white">AI</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <Typography variant="lead" className="text-lg md:text-xl text-[#9ca3af] max-w-xl leading-relaxed">
              We help you report lost items, track matches in real-time, and reunite with your belongings through intelligent AI-powered matching.
            </Typography>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="/#waitlist">
                <Button
                  size="lg"
                  className="h-14 px-10 text-lg font-bold rounded-lg border-2 border-[#026dc7] bg-transparent text-[#026dc7] hover:bg-[#026dc7] hover:text-white transition-all"
                >
                  Join The Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Card */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
