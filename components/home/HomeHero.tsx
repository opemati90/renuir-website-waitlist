"use client";

import React from "react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { ArrowRight, Fingerprint, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      <div className="app-container relative">
        {/* Centered Layout */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
          {/* Main Heading with Embedded Icons */}
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 leading-[1.1]">
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#9ca3af]">
                The future of lost & found is
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 leading-[1.1]">
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                h
              </span>
              <Fingerprint className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 text-[#026dc7] inline-block" />
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                man
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                {" "}+{" "}
              </span>
              <Sparkles className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 text-[#026dc7] inline-block" />
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                I
              </span>
            </div>
          </motion.div>

          {/* Sub-headline */}
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Typography variant="lead" className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              We help you report lost items, track matches in real-time, and reunite with your belongings through intelligent AI-powered matching.
            </Typography>
          </motion.div>

          {/* CTA Button - Dark background with Renuir blue border */}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pt-4"
          >
            <a href="/#waitlist">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold rounded-lg border-2 border-[#026dc7] bg-[#141414] text-white hover:bg-[#1a1a1a] transition-all"
              >
                Join The Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
