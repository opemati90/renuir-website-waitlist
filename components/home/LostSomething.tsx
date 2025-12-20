"use client";
import { Typography } from "@/components/ui/typography";
import { Clock } from "lucide-react";
import { Loststat, times } from "../utils/data/homeItems";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { transition2 } from "../Transition";

export const LostSomething = () => {
  return (
    <motion.section className="mt-48 " id="how-it-works">
      <div className="app-container pb-24">
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <Typography variant="h2" className="text-center  font-bold mb-4">
            Lost something important?
          </Typography>

          <Typography
            variant="h4"
            className="text-center text-dark-800 max-w-2xl mx-auto mb-14 font-medium"
          >
            We know how stressful it is. That&apos;s why we made getting it back
            as simple as possible.
          </Typography>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Loststat.map((stat, index) => (
            <motion.div
              variants={fadeIn("up", "tween", index * 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              whileHover={{ scale: 1.1 }}
              transition={transition2}
              key={index}
              className="relative p-8 rounded-2xl   bg-dark-50 border-none shadow-none"
            >
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-300">
                {stat.order}
              </span>

              <div
                className={`flex items-center justify-center h-12 w-12 rounded-xl ${stat.bg}`}
              >
                <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
              </div>

              <Typography
                variant="smallText"
                className={` pt-2 font-medium ${stat.iconColor}`}
              >
                {stat.tag}
              </Typography>

              <Typography variant="h3" className="mt-2 font-bold">
                {stat.value}
              </Typography>

              <Typography
                variant="h4"
                className=" text-sm leading-relaxed mt-2 font-medium"
              >
                {stat.label}
              </Typography>

              <div className="mt-6 flex items-center gap-2 text-dark-700 text-sm">
                <Clock className="h-4 w-4" />
                <span>{stat.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#04192c] rounded-2xl mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {times.map((s, index) => (
              <motion.div
                variants={fadeIn("up", "tween", index * 0.2, 0.8)}
                initial="hidden"
                whileInView={"show"}
                exit={"show"}
                whileHover={{ scale: 1.1 }}
                transition={transition2}
                key={index}
                className="flex flex-col items-center gap-3 py-12 "
              >
                <div className="flex items-center justify-center h-12 w-12 bg-white/10 rounded-full ">
                  <s.icon className="h-7 w-7 text-white" />
                </div>

                <Typography variant="h3" className="font-bold text-white">
                  {s.value}
                </Typography>

                <Typography
                  variant="h4"
                  className="text-dark-400 text-sm text-center -mt-2"
                >
                  {s.label}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <Typography variant="lead" className=" text-center mt-8">
            Ready to find waht you&apos;ve lost?
          </Typography>
          <Button
            variant="default"
            size="lg"
            className="mt-4 shadow-xs shadow-primary-50 flex mx-auto"
          >
            Join the waitlist - It&apos;s free
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
