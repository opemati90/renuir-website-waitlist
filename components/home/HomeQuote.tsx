"use client";

import React from "react";
import { Typography } from "../ui/typography";
import { Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";

const HomeQuote = () => {
  const quoteText =
    "We're excited about Renuir's vision to transform lost-and-found management. The transparency and efficiency it promises is exactly what our industry needs. We're looking forward to being among the first to partner with them.";
  const words = quoteText.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-dark-900 section-padding relative overflow-hidden" id="about">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-800 rounded-full blur-[150px]" />
      </div>

      <div className="app-container relative z-10">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-4 bg-white/5 backdrop-blur-sm rounded-2xl ring-1 ring-white/10"
          >
            <Quote className="h-8 w-8 text-primary-400 fill-primary-400/20" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center mb-12">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mr-[0.3em] mb-2"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            <div className="space-y-1">
              <Typography
                variant="h4"
                className="text-white text-xl md:text-2xl font-bold"
              >
                Sarah Jenkins
              </Typography>
              <Typography variant="smallText" className="text-primary-300 text-sm md:text-base font-medium uppercase tracking-widest">
                Operations Director, Horizon Hotels Group
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
