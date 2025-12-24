"use client";

import React from "react";
import { Typography } from "../ui/typography";
import { QuoteIcon } from "lucide-react";
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
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-primary-10 mt-24" id="about">
      <div className="app-container py-12">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuoteIcon className="text-primary-300" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
              margin: "0px 0px -100px 0px",
            }}
            className="italic font-semibold max-w-3xl mt-12 text-center"
          >
            <Typography variant="h2" className="inline">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-1.5"
                >
                  {word}
                </motion.span>
              ))}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typography
              variant="h5"
              className="font-bold text-center mx-auto max-w-xl mt-4"
            >
              Sarah Jenkins
            </Typography>
            <Typography variant="smallText" className="font-normal">
              Operations Director, Horizon Hotels Group
            </Typography>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuote;
