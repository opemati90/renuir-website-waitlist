import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook, ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/renuir-white.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#020817] text-gray-400 border-t border-white/5">
      <div className="app-container py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src={Logo}
                alt="Renuir Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <p className="max-w-md text-base leading-relaxed text-dark-300">
              Renuir is an AI-powered lost & found platform currently in development. 
              We&apos;re redefining how items are matched and returned through 
              intelligent automation and secure verification.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Product</h4>
            <ul className="space-y-4">
              {[
                { name: "How It Works", href: "/#how-it-works" },
                { name: "Features", href: "/#features" },
                { name: "About Us", href: "/#about" },
                { name: "FAQ", href: "/#faq" },
                { name: "Early Access", href: "/#waitlist" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Stay Connected</h4>
            <div className="space-y-6">
              <p className="text-sm text-dark-400">
                Have questions or interested in partnering? Reach out to our team.
              </p>
              <a 
                href="mailto:contact@renuir.com"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="h-10 w-10 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-dark-500 uppercase font-bold tracking-widest">Email Us</div>
                  <div className="text-white font-bold">contact@renuir.com</div>
                </div>
              </a>
              <div className="pt-4">
                <Link 
                  href="/partner" 
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-bold"
                >
                  Explore Partnerships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-dark-500">
            <span>© 2025 Renuir. All rights reserved.</span>
            <div className="flex gap-6">
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms-conditions" },
                { name: "Cookies", href: "/cookies" },
                { name: "Safety", href: "/safety" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-green-400 tracking-widest uppercase">System Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
