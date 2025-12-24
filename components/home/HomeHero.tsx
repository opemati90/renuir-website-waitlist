"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const HomeHero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
      </div>

      <div className="app-container relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Badge */}
          <motion.div
            variants={fadeIn("down", "tween", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass px-4 py-2 rounded-full flex items-center gap-2 border-primary-100 shadow-sm"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-600"></span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-primary-900 tracking-wide uppercase">
              Coming Soon &bull; Join the Waitlist
            </span>
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary-500 ml-1" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <Typography variant="h1" className="text-dark-900 leading-[1.1] md:leading-[1.05]">
              Lost it? <span className="text-primary-600 italic">Renuir</span> it.
            </Typography>
            <Typography variant="h4" className="text-dark-600 max-w-2xl mx-auto font-normal leading-relaxed">
              We&apos;re building the world&apos;s first truly intelligent lost & found platform. 
              Using AI to reunite you with your belongings in minutes, not days.
            </Typography>
          </motion.div>

          {/* CTA and Benefits */}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="/#waitlist" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 rounded-2xl text-lg font-bold shadow-xl shadow-primary-200 hover:shadow-primary-300 hover:-translate-y-0.5 transition-all bg-primary-600"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[
                "Priority Launch Access",
                "Updates on Progress",
                "Always Free to Join"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary-600" />
                  <span className="text-sm md:text-base font-medium text-dark-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full pt-8 md:pt-16"
          >
            <div className="relative mx-auto max-w-5xl group">
              <div className="absolute inset-0 bg-primary-200 rounded-[2rem] md:rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              {!imageError ? (
                <div className="relative bg-white p-2 rounded-[2rem] md:rounded-[3rem] border border-dark-100 shadow-2xl overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Renuir Dashboard Preview"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-[1.5rem] md:rounded-[2.5rem]"
                    priority
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-dark-50 rounded-[2rem] md:rounded-[3rem] border border-dark-100 flex items-center justify-center shadow-xl">
                  <div className="text-center p-8">
                    <Typography variant="h3" className="text-primary-600 mb-2">
                      The Future of Lost & Found
                    </Typography>
                    <Typography variant="smallText" className="text-dark-400">
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
