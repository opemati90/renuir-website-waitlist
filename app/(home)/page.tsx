import { FAQSection } from "@/components/home/HomeFaq";
import HomeHero from "@/components/home/HomeHero";
import HomeQuote from "@/components/home/HomeQuote";
import { EarlyAccessSection } from "@/components/home/HomeWaitlist";
import { LostSomething } from "@/components/home/LostSomething";
import { TailoredForEveryone } from "@/components/home/TailoredFor";
import { TrustedByStats } from "@/components/home/TrustedBy";

const SECTIONS = [
  { Component: HomeHero, className: "mt-48" },
  { Component: TrustedByStats, className: "mt-24" },
  { Component: LostSomething, className: "mt-24" },
  { Component: TailoredForEveryone, className: "mt-24" },
  { Component: HomeQuote, className: "mt-24" },
  { Component: FAQSection, className: "mt-24" },
  { Component: EarlyAccessSection, className: "mt-24" },
];

export default function Home() {
  return (
    <main className=" overflow-hidden">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
