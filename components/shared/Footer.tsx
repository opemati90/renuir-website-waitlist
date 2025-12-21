import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/renuir-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#0b1220] to-[#060b16] text-gray-400">
      <div className="app-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white font-semibold">
              <Image
                src={Logo}
                alt="Accelerate Africa's Logo"
                width={120}
                className="w-27.5 sm:w-40"
              />
            </div>

            <p className="max-w-md text-sm leading-relaxed">
              Renuir is a trusted platform connecting finders and owners of lost
              items, making it easy to reunite people with their belongings. We
              provide a secure, efficient way for individuals to report, find,
              and return lost items, using smart matching and AI technology.
            </p>

            <div className="mt-6 text-sm space-y-1">
              <p>Renuir Inc.</p>
              <p>123 Innovation Drive, Suite 400</p>
              <p>San Francisco, CA 94105, USA</p>
              <p className="mt-3">Email: contact@renuir.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6 text-gray-300">
              <Twitter className="h-4 w-4 cursor-pointer hover:text-white" />
              <Linkedin className="h-4 w-4 cursor-pointer hover:text-white" />
              <Instagram className="h-4 w-4 cursor-pointer hover:text-white" />
              <Facebook className="h-4 w-4 cursor-pointer hover:text-white" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#features">Features</Link>
              </li>
              <li>
                <Link href="#how-it-works">How it Works</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#waitlist">Join Waitlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#faq">Help Center</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <Link href="mailto:support@renuir.com">Contact Support</Link>
              </li>
              <li>
                <Link href="/safety">Safety Tips</Link>
              </li>
              <li>
                <Link href="/partner">Partner with Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2025 Renuir Inc. All rights reserved.</span>

          <div className="flex gap-6">
            <Link href="/imprint">Imprint</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
