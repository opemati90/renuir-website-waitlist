"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { features } from "../utils/data/homeItems";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../Variants";
import { Card } from "../ui/Card";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");

  return (
    <section className="bg-[#0a0a0a] section-padding" id="features">
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
              className="text-[#026dc7] font-bold uppercase tracking-[0.2em]"
            >
              Tailored Experience
            </Typography>
            <Typography variant="h2" className="text-white">
              Solutions for Everyone
            </Typography>
            <Typography
              variant="lead"
              className="text-[#9ca3af] font-medium"
            >
              Whether you&apos;re a business managing high volumes or an individual who just lost their keys, Renuir simplifies everything.
            </Typography>
          </motion.div>

          {/* Custom Animated Toggle */}
          <div className="relative mt-12 p-1.5 bg-[#141414] rounded-2xl border border-white/10 flex items-center shadow-inner">
            <motion.div
              layout
              className="absolute h-[calc(100%-12px)] w-[calc(50%-6px)] bg-[#026dc7] rounded-xl z-0"
              animate={{ x: audience === "business" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setAudience("business")}
              className={`relative z-10 flex-1 px-8 py-3 text-sm font-bold transition-colors duration-200 ${
                audience === "business" ? "text-white" : "text-[#9ca3af] hover:text-white"
              }`}
            >
              For Business
            </button>
            <button
              onClick={() => setAudience("consumer")}
              className={`relative z-10 flex-1 px-8 py-3 text-sm font-bold transition-colors duration-200 ${
                audience === "consumer" ? "text-white" : "text-[#9ca3af] hover:text-white"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex flex-col h-full space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#026dc7]/20 border border-[#026dc7]/30 shadow-sm"
                    >
                      <feature.icon className="h-7 w-7 text-[#026dc7]" />
                    </motion.div>

                    <div className="space-y-3">
                      <Typography variant="h4" className="text-xl font-bold text-white group-hover:text-[#026dc7] transition-colors">
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="p"
                        className="text-[#9ca3af] text-[15px] leading-relaxed m-0"
                      >
                        {feature.description}
                      </Typography>
                    </div>
                  </div>
                </Card>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#026dc7]/10 rounded-full border border-[#026dc7]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#026dc7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#026dc7]"></span>
            </span>
            <Typography variant="smallText" className="text-[#026dc7] font-semibold tracking-wide uppercase text-[10px]">
              Coming Soon to venues and individuals worldwide
            </Typography>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
