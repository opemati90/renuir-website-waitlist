import { Metadata } from "next";
import { FAQSection } from "@/components/home/HomeFaq";
import HomeHero from "@/components/home/HomeHero";
import HomeQuote from "@/components/home/HomeQuote";
import { EarlyAccessSection } from "@/components/home/HomeWaitlist";
import { LostSomething } from "@/components/home/LostSomething";
import { TailoredForEveryone } from "@/components/home/TailoredFor";
import { TrustedByStats } from "@/components/home/TrustedBy";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Join the waitlist for Renuir, an AI-powered lost & found platform currently in development. Be among the first to experience it when we launch.",
  openGraph: {
    title: "Renuir - AI-Powered Lost & Found Platform | Join the Waitlist",
    description:
      "Join the waitlist for Renuir, an AI-powered lost & found platform that actually works. Be among the first to experience it when we launch.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Renuir - AI-Powered Lost & Found Platform",
      },
    ],
  },
};

const SECTIONS = [
  { Component: HomeHero, className: "mt-32 md:mt-40 lg:mt-48" },
  { Component: TrustedByStats, className: "mt-16 md:mt-24 lg:mt-32" },
  { Component: LostSomething, className: "mt-16 md:mt-24 lg:mt-32" },
  { Component: TailoredForEveryone, className: "mt-16 md:mt-24 lg:mt-32" },
  { Component: HomeQuote, className: "mt-16 md:mt-24 lg:mt-32" },
  { Component: FAQSection, className: "mt-16 md:mt-24 lg:mt-32" },
  { Component: EarlyAccessSection, className: "mt-16 md:mt-24 lg:mt-32" },
];

export default function Home() {
  return (
    <main id="main-content" className=" overflow-hidden">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
