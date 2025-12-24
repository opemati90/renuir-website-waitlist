"use client";

import { Typography } from "@/components/ui/typography";
import { Clock, ArrowRight } from "lucide-react";
import { Loststat, times } from "../utils/data/homeItems";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export const LostSomething = () => {
  return (
    <section className="bg-dark-50 section-padding" id="how-it-works">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 md:mb-24 text-center max-w-3xl mx-auto">
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
              The Process
            </Typography>
            <Typography variant="h2" className="text-dark-900">
              How Renuir Will Work
            </Typography>
            <Typography
              variant="lead"
              className="text-dark-600 font-medium"
            >
              We know how stressful losing something important can be. We&apos;re building Renuir to make getting it back as simple as possible.
            </Typography>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 lg:mb-32">
          {Loststat.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1 + 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative p-10 rounded-[2.5rem] bg-white border border-dark-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
            >
              {/* Step Number Background */}
              <span className="absolute top-[-10%] right-[-5%] text-9xl font-black text-primary-50/50 group-hover:text-primary-50 transition-colors duration-500 select-none">
                {stat.order}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <div
                  className={`flex items-center justify-center h-14 w-14 rounded-2xl ${stat.bg} shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500`}
                >
                  <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-3">
                    <Typography
                      variant="smallText"
                      className={`font-bold tracking-widest uppercase text-xs ${stat.iconColor}`}
                    >
                      {stat.tag}
                    </Typography>
                  </div>
                  <Typography variant="h3" className="font-bold text-dark-900 leading-tight">
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-dark-600 font-medium leading-relaxed"
                  >
                    {stat.label}
                  </Typography>
                </div>

                <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-dark-50 w-fit text-dark-700 text-sm font-semibold">
                  <Clock className="h-4 w-4 text-primary-600" />
                  <span>{stat.time}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expected Times Section */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-primary-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-primary-800 rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-primary-700 rounded-full opacity-30 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x divide-white/10">
            {times.map((s, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="flex items-center justify-center h-16 w-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6 ring-1 ring-white/20">
                  <s.icon className="h-8 w-8 text-primary-100" />
                </div>

                <Typography variant="h2" className="font-bold text-white mb-2 tracking-tight">
                  {s.value}
                </Typography>

                <Typography
                  variant="p"
                  className="text-primary-200 text-sm md:text-base font-medium m-0"
                >
                  {s.label}
                </Typography>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center space-y-8"
        >
          <Typography variant="h4" className="text-dark-800 font-semibold italic">
            Ready to be among the first to use Renuir?
          </Typography>
          <a href="/#waitlist" className="inline-block">
            <Button
              size="lg"
              className="h-14 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-primary-100 hover:shadow-primary-200 hover:-translate-y-1 transition-all"
            >
              Join the Waitlist - It&apos;s Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
