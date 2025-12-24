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

import { Mail, Loader2, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export const EarlyAccessSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 409) {
          throw new Error("This email is already on the waitlist.");
        } else if (response.status === 400) {
          throw new Error(errorData.error || "Please enter a valid email address.");
        } else if (response.status >= 500) {
          throw new Error("Our servers are experiencing issues. Please try again in a few moments.");
        } else {
          throw new Error(errorData.error || "Something went wrong. Please try again.");
        }
      }

      console.log("Waitlist email submitted:", values.email);
      setIsSubmitted(true);
      form.reset();
      // Keep success state longer for better UX
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err) {
      console.error("Error submitting form:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unable to connect. Please check your internet connection and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section id="waitlist" className="bg-white section-padding overflow-hidden">
      <div className="app-container">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-dark-900 px-6 py-16 md:py-24 md:px-12 lg:px-24 overflow-hidden shadow-2xl"
        >
          {/* Background visuals */}
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30 overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-full h-[140%] bg-primary-600 rounded-full blur-[120px] rotate-12" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                <div className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
                <span className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">
                  Final Chance for Early Access
                </span>
              </div>
              
              <Typography variant="h2" className="text-white leading-tight">
                Secure your spot <br />
                on the <span className="text-primary-400">priority list</span>
              </Typography>

              <Typography variant="lead" className="text-dark-300 max-w-lg">
                Join thousands of others waiting for the smartest lost & found platform. 
                We&apos;ll notify you the moment we launch.
              </Typography>

              <div className="flex flex-col gap-4 pt-4">
                {[
                  "Early adopter perks",
                  "Direct line to our dev team",
                  "Exclusive launch offers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary-400" />
                    </div>
                    <span className="text-dark-100 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-8"
                  >
                    <div className="mx-auto h-20 w-20 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-primary-400" />
                    </div>
                    <div className="space-y-2">
                      <Typography variant="h3" className="text-white font-bold">
                        You&apos;re on the list!
                      </Typography>
                      <Typography variant="p" className="text-dark-300">
                        Thank you for joining our mission. Check your inbox for a confirmation shortly.
                      </Typography>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="text-white border-white/20 hover:bg-white/10"
                    >
                      Sign up another email
                    </Button>
                  </motion.div>
                ) : (
                  <div className="space-y-8">
                    <div className="space-y-2 text-center lg:text-left">
                      <Typography variant="h4" className="text-white font-bold">
                        Ready to join?
                      </Typography>
                      <Typography variant="smallText" className="text-dark-400">
                        Enter your email below to get started.
                      </Typography>
                    </div>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-dark-500" />
                                  <Input
                                    {...field}
                                    placeholder="your@email.com"
                                    className="pl-12 h-16 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-dark-600 focus:bg-white/10 focus:border-primary-500 transition-all text-lg"
                                    disabled={isSubmitting}
                                    type="email"
                                    aria-label="Email address for waitlist"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full h-16 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg shadow-xl shadow-primary-900/20 group transition-all"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Join the Waitlist
                              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>

                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3"
                      >
                        <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200 font-medium">{error}</p>
                      </motion.div>
                    )}

                    <Typography variant="smallText" className="text-center text-dark-500 text-[13px] leading-relaxed">
                      By joining, you agree to our{" "}
                      <a href="/terms-conditions" className="text-dark-300 hover:text-white underline transition-colors">Terms</a>
                      {" "}and{" "}
                      <a href="/privacy" className="text-dark-300 hover:text-white underline transition-colors">Privacy Policy</a>.
                    </Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
