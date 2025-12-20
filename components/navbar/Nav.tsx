"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Renuirlogo-1.svg";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { clsx } from "clsx";

import { menuItems } from "../utils/data/menuItems";
import MobileNav from "./MobileNav";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white fixed w-full z-99">
      <div className="app-container flex justify-between items-center py-5">
        <Link href="/">
          <Image
            src={Logo}
            alt="Accelerate Africa's Logo"
            width={120}
            className="w-27.5 sm:w-60"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className={clsx(
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-foreground hover:text-primary-700",
                  "px-4 font-semibold"
                )}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <Link href="/login" className="hidden lg:block">
            <Button variant="default">Join waitlist</Button>
          </Link>
        </div>

        {/* Button */}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
