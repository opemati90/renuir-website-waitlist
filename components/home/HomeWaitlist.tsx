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
    <motion.section id="waitlist" className="bg-[#0a0a0a] section-padding overflow-hidden">
      <div className="app-container">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-3xl bg-[#141414] px-6 py-16 md:py-24 md:px-12 lg:px-24 overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Background visuals */}
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-20 overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-full h-[140%] bg-[#026dc7] rounded-full blur-[120px] rotate-12" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#026dc7]/10 backdrop-blur-md rounded-full border border-[#026dc7]/20">
                <div className="h-2 w-2 rounded-full bg-[#026dc7] animate-pulse" />
                <span className="text-xs md:text-sm font-bold text-[#026dc7] tracking-widest uppercase">
                  Final Chance for Early Access
                </span>
              </div>
              
              <Typography variant="h2" className="text-white leading-tight">
                Secure your spot <br />
                on the <span className="text-[#026dc7]">priority list</span>
              </Typography>

              <Typography variant="lead" className="text-[#9ca3af] max-w-lg">
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
                    <div className="h-6 w-6 rounded-full bg-[#026dc7]/20 flex items-center justify-center flex-shrink-0 border border-[#026dc7]/30">
                      <CheckCircle2 className="h-4 w-4 text-[#026dc7]" />
                    </div>
                    <span className="text-[#e5e5e5] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="p-8 md:p-10 rounded-3xl bg-[#1a1a1a] border border-white/10 shadow-2xl">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-8"
                  >
                    <div className="mx-auto h-20 w-20 rounded-full bg-[#026dc7]/20 flex items-center justify-center border border-[#026dc7]/30">
                      <CheckCircle2 className="h-10 w-10 text-[#026dc7]" />
                    </div>
                    <div className="space-y-2">
                      <Typography variant="h3" className="text-white font-bold">
                        You&apos;re on the list!
                      </Typography>
                      <Typography variant="p" className="text-[#9ca3af]">
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
                      <Typography variant="smallText" className="text-[#9ca3af]">
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
                                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9ca3af]" />
                                  <Input
                                    {...field}
                                    placeholder="your@email.com"
                                    className="pl-12 h-16 rounded-2xl bg-[#0a0a0a] border-white/10 text-white placeholder:text-[#6b7280] focus:bg-[#141414] focus:border-[#026dc7] transition-all text-lg"
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
                          className="w-full h-16 rounded-2xl bg-[#026dc7] hover:bg-[#0357a1] text-white font-bold text-lg shadow-xl shadow-[#026dc7]/20 group transition-all"
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

                    <Typography variant="smallText" className="text-center text-[#9ca3af] text-[13px] leading-relaxed">
                      By joining, you agree to our{" "}
                      <a href="/terms-conditions" className="text-[#026dc7] hover:text-[#38a9f8] underline transition-colors">Terms</a>
                      {" "}and{" "}
                      <a href="/privacy" className="text-[#026dc7] hover:text-[#38a9f8] underline transition-colors">Privacy Policy</a>.
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
