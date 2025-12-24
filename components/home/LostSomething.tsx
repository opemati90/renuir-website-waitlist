"use client";

import { Typography } from "@/components/ui/typography";
import { Clock, ArrowRight } from "lucide-react";
import { Loststat, times } from "../utils/data/homeItems";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { Card } from "../ui/card";

export const LostSomething = () => {
  return (
    <section className="bg-[#0a0a0a] section-padding" id="how-it-works">
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
              className="text-[#026dc7] font-bold uppercase tracking-[0.2em]"
            >
              The Process
            </Typography>
            <Typography variant="h2" className="text-white">
              How Renuir Will Work
            </Typography>
            <Typography
              variant="lead"
              className="text-[#9ca3af] font-medium"
            >
              We know how stressful losing something important can be. We&apos;re building Renuir to make getting it back as simple as possible.
            </Typography>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 lg:mb-32">
          {Loststat.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1 + 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="relative h-full overflow-hidden group">
                {/* Step Number Background */}
                <span className="absolute top-[-10%] right-[-5%] text-9xl font-black text-[#026dc7]/10 group-hover:text-[#026dc7]/20 transition-colors duration-500 select-none pointer-events-none">
                  {stat.order}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#026dc7]/20 border border-[#026dc7]/30 shadow-sm mb-8"
                  >
                    <stat.icon className="h-7 w-7 text-[#026dc7]" />
                  </motion.div>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3">
                      <Typography
                        variant="smallText"
                        className="font-bold tracking-widest uppercase text-xs text-[#026dc7]"
                      >
                        {stat.tag}
                      </Typography>
                    </div>
                    <Typography variant="h3" className="font-bold text-white leading-tight">
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-[#9ca3af] font-medium leading-relaxed"
                    >
                      {stat.label}
                    </Typography>
                  </div>

                  <div className="flex items-center gap-2 py-3 px-4 rounded-xl bg-[#1a1a1a] w-fit text-[#9ca3af] text-sm font-semibold border border-white/5">
                    <Clock className="h-4 w-4 text-[#026dc7]" />
                    <span>{stat.time}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Expected Times Section */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#026dc7] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#0357a1] rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[#0e8ceb] rounded-full opacity-30 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:divide-x divide-white/20">
            {times.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center h-16 w-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6 ring-1 ring-white/20"
                >
                  <s.icon className="h-8 w-8 text-white" />
                </motion.div>

                <Typography variant="h2" className="font-bold text-white mb-2 tracking-tight">
                  {s.value}
                </Typography>

                <Typography
                  variant="p"
                  className="text-white/80 text-sm md:text-base font-medium m-0"
                >
                  {s.label}
                </Typography>
              </motion.div>
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
          <Typography variant="h4" className="text-[#9ca3af] font-semibold italic">
            Ready to be among the first to use Renuir?
          </Typography>
          <a href="/#waitlist" className="inline-block">
            <Button
              size="lg"
              className="h-14 px-10 rounded-lg text-lg font-bold border-2 border-[#026dc7] bg-transparent text-[#026dc7] hover:bg-[#026dc7] hover:text-white transition-all"
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
