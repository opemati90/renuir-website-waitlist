"use client";

import React from "react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { transition1 } from "../Transition";
import { fadeIn } from "../Variants";

const HomeHero = () => {
  return (
    <motion.section className="bg-linear-to-b from-white to-primary-10 pt-12">
      <div className="app-container flex flex-col md:flex-row gap-12 basis items-center pb-20">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full md:basis-[1/2] "
        >
          <div className="flex flex-col gap-6 items-start">
            <div className="inline-flex items-center rounded-full border border-border shadow-xs px-3 py-2">
              <div className="h-2.5 w-2.5 rounded-full animate-[pulse-primary_1.2s_ease-in-out_infinite] bg-primary-600" />

              <span className="ml-2 text-sm font-medium text-foreground">
                Coming Soon - Join the Waitlist
              </span>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <Typography variant="h1" className="text-black  font-bold">
                Lost it?
              </Typography>
              <Typography variant="h1" className="text-primary-600 font-bold">
                Renuir it.
              </Typography>
            </div>
            <Typography
              variant="h4"
              className="text-dark-700 mt-3 leading-8 max-w-lg font-normal"
            >
              We&apos;re building an AI-powered lost & found platform that actually works. 
              Join our waitlist to be among the first to experience it when we launch.
            </Typography>
            <div className="flex flex-row gap-2 items-center">
              <a href="#waitlist">
                <Button
                  variant="default"
                  size="lg"
                  className="flex flex-row gap-2 items-center shadow-primary-200 shadow-md "
                >
                  Join the Waitlist
                  <ArrowRight />
                </Button>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">Early Access</Typography>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">Launch Updates</Typography>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <CheckCircleIcon className="text-primary-600" />
                <Typography variant="smallText">Free to Join</Typography>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="basis-full md:basis-[1/2] ">
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            src="/images/hero.png"
            alt="renuir image"
            className="max-w-120"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HomeHero;
