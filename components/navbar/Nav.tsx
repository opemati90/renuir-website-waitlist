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
        "fixed w-full z-[100] transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-primary-50 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="app-container flex justify-between items-center">
        <Link href="/" className="transition-transform hover:scale-95 duration-200">
          <Image
            src={Logo}
            alt="Renuir Logo"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center bg-dark-50/50 rounded-full p-1 border border-dark-100/50 mr-4">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={index}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={clsx(
                    "px-5 py-2 rounded-full text-sm font-bold transition-all duration-200",
                    isActive
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-dark-600 hover:text-dark-900 hover:bg-white/50"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Link href="/#waitlist">
            <Button size="sm" className="rounded-full px-6 font-bold h-10 shadow-lg shadow-primary-200 hover:shadow-primary-300 transition-all active:scale-95">
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
