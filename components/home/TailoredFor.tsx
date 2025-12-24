"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { features } from "../utils/data/homeItems";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { transition2 } from "../Transition";

export const TailoredForEveryone = () => {
  const [audience, setAudience] = useState<"business" | "consumer">("business");

  return (
    <motion.section className="app-container mt-28" id="features">
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="text-center max-w-2xl mx-auto"
      >
        <Typography variant="h2" className="font-bold">
          Tailored for Everyone
        </Typography>

        <Typography
          variant="h4"
          className="text-dark-600 font-medium mt-1 leading-7"
        >
          Whether you manage a venue or just lost your keys, Renuir will simplify
          the recovery process. Coming soon.
        </Typography>

        {/* Toggle */}
        <div className="inline-flex mt-8 rounded-full border border-border bg-muted p-1">
          <Button
            size="sm"
            variant={audience === "business" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setAudience("business")}
          >
            For Business
          </Button>
          <Button
            size="sm"
            variant={audience === "consumer" ? "default" : "ghost"}
            className="rounded-full"
            onClick={() => setAudience("consumer")}
          >
            For Consumers
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {features.map((feature, index) => (
          <motion.div
            variants={fadeIn("up", "tween", index * 0.2, 0.8)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            whileHover={{ scale: 1.1 }}
            transition={transition2}
            key={index}
            className="p-6 border-primary-50 shadow-sm rounded-3xl"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50 ">
              <feature.icon className="h-8 w-8 text-primary-600" />
            </div>

            <Typography variant="h5" className="font-semibold mt-2 mb-2">
              {feature.title}
            </Typography>

            <Typography
              variant="smallText"
              className="text-dark-600 text-sm  leading-6 "
            >
              {feature.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
