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
import { Card } from "../ui/card";

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-[#0a0a0a] section-padding">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#026dc7]/10 rounded-full border border-[#026dc7]/20 mb-4">
              <HelpCircle className="h-4 w-4 text-[#026dc7]" />
              <Typography variant="smallText" className="text-[#026dc7] font-bold uppercase tracking-wider text-[10px]">
                Support
              </Typography>
            </div>
            <Typography variant="h2" className="text-white">
              Common Questions
            </Typography>
            <Typography
              variant="lead"
              className="text-[#9ca3af] font-medium"
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-2xl border border-white/10 bg-[#141414] px-6 md:px-8 shadow-sm hover:shadow-md hover:border-[#026dc7]/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-bold text-white hover:no-underline hover:text-[#026dc7] py-6">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-[#9ca3af] text-base leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Secondary Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <Card>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <Typography variant="h4" className="text-white font-bold mb-1">
                    Still have questions?
                  </Typography>
                  <Typography variant="smallText" className="text-[#9ca3af] text-sm">
                    We&apos;re here to help you understand our vision.
                  </Typography>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@renuir.com" 
                  className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl font-bold text-white hover:bg-[#026dc7] hover:border-[#026dc7] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Support
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
