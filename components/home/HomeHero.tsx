"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Search, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const HomeHero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      <div className="app-container relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
          {/* Main Heading with Icons Embedded */}
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 leading-[1.1]">
              <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                The future of lost & found is
              </span>
              <div className="flex items-center gap-2">
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">human</span>
                <Search className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-[#026dc7] inline-block" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">+</span>
                <Zap className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 text-[#026dc7] inline-block" />
                <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">AI</span>
              </div>
            </div>
            
            <Typography variant="lead" className="text-xl md:text-2xl text-[#9ca3af] max-w-3xl mx-auto font-normal leading-relaxed">
              We help you report lost items, track matches in real-time, and reunite with your belongings through intelligent AI-powered matching.
            </Typography>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pt-4"
          >
            <a href="/#waitlist">
              <Button
                size="lg"
                className="h-14 px-10 text-lg font-bold rounded-lg border-2 border-[#026dc7] bg-transparent text-[#026dc7] hover:bg-[#026dc7] hover:text-white transition-all"
              >
                Join The Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full pt-12 md:pt-16"
          >
            <div className="relative mx-auto max-w-6xl">
              {!imageError ? (
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/hero.png"
                    alt="Renuir Platform Preview"
                    width={1400}
                    height={800}
                    className="w-full h-auto"
                    priority
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-[#141414] rounded-2xl md:rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Search className="h-12 w-12 text-[#026dc7]" />
                      <Zap className="h-12 w-12 text-[#026dc7]" />
                    </div>
                    <Typography variant="h3" className="text-white mb-2">
                      The Future of Lost & Found
                    </Typography>
                    <Typography variant="smallText" className="text-[#9ca3af]">
                      Smart AI Matching &bull; Real-time Alerts &bull; Secure Verification
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
