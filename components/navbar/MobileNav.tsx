/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Renuirlogo-1.svg";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { menuItems } from "../utils/data/menuItems";
import { Typography } from "@/components/ui/typography"; // ✅ ADD THIS

const MobileNav = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <section className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <button 
            aria-label="Open menu"
            aria-expanded={isSheetOpen}
            className="focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 rounded p-1"
          >
            <Menu size={28} className="text-foreground" />
          </button>
        </SheetTrigger>

        <SheetContent side="top" className="w-full rounded-xl">
          <SheetHeader className="text-left">
            <SheetTitle className="mt-8 mb-12 flex flex-wrap justify-between items-end">
              <Link href="/">
                <Image 
                  src={Logo} 
                  alt="Renuir Logo" 
                  width={120}
                  height={34}
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              <Link href="#waitlist" className="mt-4">
                <Button variant="outline">Join the Waitlist</Button>
              </Link>
            </SheetTitle>

            <div className="flex flex-col space-y-5 pb-5">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <div key={item.name}>
                    <Link 
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        isActive
                          ? "text-primary-600"
                          : "text-foreground hover:text-gray-500",
                        "font-medium focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 rounded block py-2"
                      )}
                    >
                      <Typography
                        variant="h3"
                        as="div"
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
