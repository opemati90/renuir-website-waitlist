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
import { HelpCircle, Mail } from "lucide-react";

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-white section-padding">
      <div className="app-container">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            variants={fadeIn("down", "tween", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-100 mb-4">
              <HelpCircle className="h-4 w-4 text-primary-600" />
              <Typography variant="smallText" className="text-primary-700 font-bold uppercase tracking-wider text-[10px]">
                Support
              </Typography>
            </div>
            <Typography variant="h2" className="text-dark-900">
              Common Questions
            </Typography>
            <Typography
              variant="lead"
              className="text-dark-600 font-medium"
            >
              Everything you need to know about Renuir and our upcoming launch.
            </Typography>
          </motion.div>
        </div>

        {/* Accordion */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-[1.5rem] border border-dark-100 bg-white px-6 md:px-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-dark-800 hover:no-underline hover:text-primary-600 py-6">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-dark-600 text-base leading-relaxed pb-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Secondary Footer CTA */}
          <div className="mt-16 p-8 rounded-[2rem] bg-dark-50 border border-dark-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Typography variant="h4" className="text-dark-900 font-bold mb-1">
                Still have questions?
              </Typography>
              <Typography variant="smallText" className="text-dark-500 text-sm">
                We&apos;re here to help you understand our vision.
              </Typography>
            </div>
            <a 
              href="mailto:contact@renuir.com" 
              className="flex items-center gap-2 px-6 py-3 bg-white border border-dark-200 rounded-xl font-bold text-dark-800 hover:bg-dark-100 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
