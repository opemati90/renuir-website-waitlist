"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

import { Mail, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const EarlyAccessSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Waitlist email:", values.email);
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section id="waitlist" className="bg-primary-10 py-24">
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className="app-container max-w-3xl text-center"
      >
        <div className="inline-flex items-center rounded-full border border-border shadow-xs px-3 py-2">
          <div className="h-2.5 w-2.5 rounded-full animate-[pulse-primary_1.2s_ease-in-out_infinite] bg-primary-600" />

          <span className="ml-2 text-sm font-medium text-foreground">
            Launching Soon
          </span>
        </div>
        <Typography variant="h1" className="font-bold text-black mb-3">
          Join the Waitlist
        </Typography>

        <Typography variant="h4" className=" mb-10 text-dark-700">
          Renuir is currently under development. Be among the first to experience 
          our AI-powered lost & found platform when we launch. No spam, just updates 
          on our progress and early access when we&apos;re ready.
        </Typography>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full sm:w-90">
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        {...field}
                        placeholder="Enter your email"
                        className="pl-10 h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-primary-600"
                        disabled={isSubmitting || isSubmitted}
                        type="email"
                        aria-label="Email address for waitlist"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || isSubmitted}
              className="h-12 px-6 rounded-xl bg-black hover:bg-dark-400 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : isSubmitted ? (
                "✓ Joined!"
              ) : (
                "Join the Waitlist →"
              )}
            </Button>
          </form>
        </Form>

        {isSubmitted && (
          <p className="mt-4 text-sm text-primary-600 font-medium">
            Thank you! We&apos;ll notify you when Renuir launches.
          </p>
        )}
        <p className="mt-4 text-sm text-dark-800">
          By signing up, you agree to our{" "}
          <a
            href="/terms-conditions"
            className="underline font-semibold hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 rounded"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="underline font-semibold hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 rounded"
          >
            Privacy Policy
          </a>
        </p>

        {/* <div className="mt-8 flex items-center justify-center gap-3 text-sm text-dark-400">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-gray-200 border border-white"
              />
            ))}
          </div>
          <span>Join 10,000+ others on the waitlist</span>
        </div> */}
      </motion.div>
    </motion.section>
  );
};
