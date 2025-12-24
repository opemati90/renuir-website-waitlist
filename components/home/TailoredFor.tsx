"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { features } from "../utils/data/homeItems";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../Variants";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");

  return (
    <section className="bg-white section-padding" id="features">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            variants={fadeIn("down", "tween", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-bold uppercase tracking-[0.2em]"
            >
              Tailored Experience
            </Typography>
            <Typography variant="h2" className="text-dark-900">
              Solutions for Everyone
            </Typography>
            <Typography
              variant="lead"
              className="text-dark-600 font-medium"
            >
              Whether you&apos;re a business managing high volumes or an individual who just lost their keys, Renuir simplifies everything.
            </Typography>
          </motion.div>

          {/* Custom Animated Toggle */}
          <div className="relative mt-12 p-1.5 bg-dark-50 rounded-2xl border border-dark-100 flex items-center shadow-inner">
            <motion.div
              layout
              className="absolute h-[calc(100%-12px)] w-[calc(50%-6px)] bg-white rounded-xl shadow-md z-0"
              animate={{ x: audience === "business" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setAudience("business")}
              className={`relative z-10 flex-1 px-8 py-3 text-sm font-bold transition-colors duration-200 ${
                audience === "business" ? "text-primary-600" : "text-dark-500 hover:text-dark-700"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setAudience("consumer")}
              className={`relative z-10 flex-1 px-8 py-3 text-sm font-bold transition-colors duration-200 ${
                audience === "consumer" ? "text-primary-600" : "text-dark-500 hover:text-dark-700"
              }`}
            >
              For Consumers
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-[2rem] bg-white border border-dark-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-500"
              >
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 group-hover:bg-primary-600 group-hover:rotate-6 transition-all duration-500 shadow-sm group-hover:shadow-primary-200">
                    <feature.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-500" />
                  </div>

                  <div className="space-y-3">
                    <Typography variant="h4" className="text-xl font-bold text-dark-900 group-hover:text-primary-700 transition-colors">
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-dark-500 text-[15px] leading-relaxed m-0"
                    >
                      {feature.description}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer info */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/50 rounded-full border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <Typography variant="smallText" className="text-blue-700 font-semibold tracking-wide uppercase text-[10px]">
              Coming Soon to venues and individuals worldwide
            </Typography>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
