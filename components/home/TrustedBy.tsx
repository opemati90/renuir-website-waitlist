"use client";

import { Typography } from "@/components/ui/typography";

import { trustedByStats } from "../utils/data/homeItems";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { transition2 } from "../Transition";

export const TrustedByStats = () => {
  return (
    <motion.section className=" mt-48 border-b border-gray-300">
      <motion.div className="app-container pb-24">
        <Typography
          variant="h6"
          className="text-center text-dark-500 font-bold uppercase tracking-wide mb-10"
        >
          Why Join Renuir
        </Typography>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustedByStats.map((stat, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              whileHover={{ scale: 1.1 }}
              transition={transition2}
              key={index}
              className="flex flex-col items-center gap-3 py-8 "
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-lg ${stat.bg}`}
              >
                <stat.icon className={`h-7 w-7 ${stat.iconColor}`} />
              </div>

              <Typography variant="h3" className="font-bold">
                {stat.value}
              </Typography>

              <Typography
                variant="h4"
                className="text-dark-500 text-sm text-center -mt-2"
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
