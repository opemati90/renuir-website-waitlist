import {
  HeartIcon,
  Phone,
  Sparkle,
  Shield,
  Clock1,
  Users2,
} from "lucide-react";
import { Users, Zap, ShieldCheck, Star } from "lucide-react";
import { BarChart3, RefreshCw } from "lucide-react";

export const Loststat = [
  {
    icon: Phone,
    tag: "You snap a photo",
    value: "Tell us what you lost",
    label:
      "Lost your keys at the coffee shop? Left your bag on the train? Just take a photo or describe it — we'll handle the rest.",
    bg: "bg-primary-50",
    iconColor: "text-primary-600",
    order: "1",
    time: "Takes 60 seconds",
  },
  {
    icon: Sparkle,
    tag: "We search for you",
    value: "Sit back while we match",
    label:
      "Our AI instantly scans thousands of found items across your area. No more scrolling through endless posts or calling lost & found offices.",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
    order: "2",
    time: "Results in real-time",
  },
  {
    icon: HeartIcon,
    tag: "You get it back",
    value: "Reunite with your stuff",
    label:
      "When we find a match, you'll get notified immediately. Verify it's yours and arrange a safe pickup — that's it.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    order: "3",
    time: "Average recovery: 2 days",
  },
];

export const times = [
  {
    icon: Shield,
    value: "100%",
    label: "Seucre Verification",
  },
  {
    icon: Clock1,
    value: "48 hrs",
    label: "Average recovery time",
  },
  {
    icon: Users2,
    value: "10k+",
    label: "Items reunited",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How does Renuir actually work?",
    answer:
      "Renuir acts as a central intelligence layer between people and places. When you report a lost item, our AI analyzes the description and cross-references it with real-time inventory from thousands of partner venues (airports, hotels, transit). If there's a match, we notify you immediately.",
  },
  {
    question: "Is it really free for consumers?",
    answer:
      "Yes. Reporting a lost item and receiving match notifications is completely free. Renuir makes money by providing tools to businesses to manage lost & found efficiently.",
  },
  {
    question: "How secure is my personal data?",
    answer:
      "Your data is kept private and secure. Your contact information is never shared unless there is a confirmed match — and even then, you stay in full control.",
  },
  {
    question: "What if my item isn't found immediately?",
    answer:
      "That’s okay. Some items take time to be turned in. Your report remains active and we continuously check for matches. You’ll be notified the moment one appears.",
  },
  {
    question: "I represent a venue. How can we integrate Renuir?",
    answer:
      "Renuir is built for venues too. It replaces manual processes with a simple digital system your staff will actually use. Join the waitlist and we’ll reach out to set up a demo.",
  },
];

export const trustedByStats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Waitlist Signups",
    bg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: Zap,
    value: "< 2 min",
    label: "Average Match Time",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Secure & Private",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Beta User Rating",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Automated Logging",
    description:
      "Staff can log found items in seconds using image recognition AI, reducing manual data entry by 80%.",
  },
  {
    icon: BarChart3,
    title: "Inventory Analytics",
    description:
      "Track patterns in lost items to optimize security and operations with detailed dashboards.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Matching",
    description:
      "Our algorithm automatically cross-references reports with found inventory in real-time.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Returns",
    description:
      "Verify ownership and manage shipping or pickup logistics securely within the platform.",
  },
];
