"use client";

import { Typography } from "@/components/ui/typography";
import { trustedByStats } from "../utils/data/homeItems";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { Card } from "../ui/Card";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustedByStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.1 + 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center justify-center h-16 w-16 rounded-2xl bg-[#026dc7]/20 border border-[#026dc7]/30 shadow-sm"
                  >
                    <stat.icon className="h-8 w-8 text-[#026dc7]" />
                  </motion.div>

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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
