"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { faqs } from "../utils/data/homeItems";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export const FAQSection = () => {
  return (
    <motion.section className="mt-36 ">
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="app-container max-w-3xl py-12"
      >
        <Typography variant="h2" className="text-center font-bold ">
          Frequently Asked Questions
        </Typography>

        <Typography variant="lead" className="text-center text-dark-700  ">
          Common questions about Renuir.
        </Typography>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4 mt-12"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-dark-700 hover:no-underline data-[state=open]:text-primary-600">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-dark-800 text-lg leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.section>
  );
};
