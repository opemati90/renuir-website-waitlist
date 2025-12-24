"use client";

import { Typography } from "@/components/ui/typography";
import { trustedByStats } from "../utils/data/homeItems";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export const TrustedByStats = () => {
  return (
    <section className="bg-[#0a0a0a] section-padding border-y border-white/10">
      <div className="app-container">
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              className="text-[#026dc7] font-bold uppercase tracking-[0.2em] mb-4"
            >
              Why Join Renuir
            </Typography>
            <Typography variant="h2" className="text-white mb-6">
              The numbers speak for themselves
            </Typography>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustedByStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1 + 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative group p-8 rounded-2xl border border-white/10 bg-[#141414] hover:border-[#026dc7]/50 hover:bg-[#1a1a1a] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div
                  className="flex items-center justify-center h-16 w-16 rounded-2xl bg-[#026dc7]/20 border border-[#026dc7]/30 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500"
                >
                  <stat.icon className="h-8 w-8 text-[#026dc7]" />
                </div>

                <div className="space-y-1">
                  <Typography variant="h2" className="font-bold text-white group-hover:text-[#026dc7] transition-colors">
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="smallText"
                    className="text-[#9ca3af] text-base font-medium tracking-wide uppercase"
                  >
                    {stat.label}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
