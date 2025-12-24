"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Renuirlogo-1.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { menuItems } from "../utils/data/menuItems";
import MobileNav from "./MobileNav";

const Nav = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={clsx(
        "fixed w-full z-[100] transition-all duration-300 border-b border-white/10",
        isScrolled 
          ? "bg-[#0a0a0a]/95 backdrop-blur-lg py-3" 
          : "bg-[#0a0a0a] py-4"
      )}
    >
      <div className="app-container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src={Logo}
            alt="Renuir Logo"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-9 brightness-0 invert"
            priority
          />
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={index}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-white"
                    : "text-[#9ca3af] hover:text-white"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/partner">
            <Button variant="outline" size="sm" className="text-sm font-medium">
              Partner with Us
            </Button>
          </Link>
          <Link href="/#waitlist">
            <Button size="sm" className="text-sm font-bold">
              Join the Waitlist
            </Button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
