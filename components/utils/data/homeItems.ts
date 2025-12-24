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
    tag: "You'll snap a photo",
    value: "Tell us what you lost",
    label:
      "Lost your keys at the coffee shop? Left your bag on the train? You'll be able to take a photo or describe it — we'll handle the rest.",
    bg: "bg-primary-50",
    iconColor: "text-primary-600",
    order: "1",
    time: "Will take 60 seconds",
  },
  {
    icon: Sparkle,
    tag: "We'll search for you",
    value: "Sit back while we match",
    label:
      "Our AI will instantly scan thousands of found items across your area. No more scrolling through endless posts or calling lost & found offices.",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
    order: "2",
    time: "Results in real-time",
  },
  {
    icon: HeartIcon,
    tag: "You'll get it back",
    value: "Reunite with your stuff",
    label:
      "When we find a match, you'll get notified immediately. Verify it's yours and arrange a safe pickup — that's it.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    order: "3",
    time: "Expected recovery: 2 days",
  },
];

export const times = [
  {
    icon: Shield,
    value: "100%",
    label: "Secure Verification",
  },
  {
    icon: Clock1,
    value: "< 48 hrs",
    label: "Expected recovery time",
  },
  {
    icon: Users2,
    value: "24/7",
    label: "AI-powered matching",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How will Renuir work?",
    answer:
      "Renuir will act as a central intelligence layer between people and places. When you report a lost item, our AI will analyze the description and cross-reference it with real-time inventory from partner venues (airports, hotels, transit). If there's a match, you'll be notified immediately. We're currently building this platform and will launch soon.",
  },
  {
    question: "Will it be free for consumers?",
    answer:
      "Yes. Reporting a lost item and receiving match notifications will be completely free for consumers. Renuir will make money by providing tools to businesses to manage lost & found efficiently.",
  },
  {
    question: "How secure will my personal data be?",
    answer:
      "Your data will be kept private and secure. Your contact information will never be shared unless there is a confirmed match — and even then, you'll stay in full control. We're building security and privacy into the foundation of our platform.",
  },
  {
    question: "What if my item isn't found immediately?",
    answer:
      "That's okay. Some items take time to be turned in. Your report will remain active and we'll continuously check for matches. You'll be notified the moment one appears. We're designing the system to keep searching until your item is found or you close the report.",
  },
  {
    question: "I represent a venue. How can we partner with Renuir?",
    answer:
      "Renuir is being built for venues too. It will replace manual processes with a simple digital system your staff will actually use. Join the waitlist and we'll reach out when we're ready to onboard partners.",
  },
  {
    question: "When will Renuir launch?",
    answer:
      "We're currently in active development and building the platform. Join our waitlist to be among the first to know when we launch and get early access. We'll keep you updated on our progress.",
  },
];

export const trustedByStats = [
  {
    icon: Users,
    value: "Join Now",
    label: "Be First to Access",
    bg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: Zap,
    value: "< 2 min",
    label: "Expected Match Time",
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
    value: "Coming",
    label: "Soon",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Automated Logging",
    description:
      "Staff will be able to log found items in seconds using image recognition AI, reducing manual data entry by up to 80%.",
  },
  {
    icon: BarChart3,
    title: "Inventory Analytics",
    description:
      "Track patterns in lost items to optimize security and operations with detailed dashboards and insights.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Matching",
    description:
      "Our algorithm will automatically cross-reference reports with found inventory in real-time for instant matches.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Returns",
    description:
      "Verify ownership and manage shipping or pickup logistics securely within the platform with built-in safety features.",
  },
];
