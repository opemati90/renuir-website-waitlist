"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/images/Renuirlogo-1.svg";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { menuItems } from "../utils/data/menuItems";
import { Typography } from "@/components/ui/typography";

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
            className="focus-visible:outline-2 focus-visible:outline-[#026dc7] focus-visible:outline-offset-2 rounded-xl p-2 bg-[#141414] border border-white/10 transition-all hover:bg-[#1a1a1a]"
          >
            <Menu size={24} className="text-white" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85%] sm:w-[400px] border-l border-white/10 p-0 bg-[#0a0a0a]">
          <div className="flex flex-col h-full">
            <SheetHeader className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Image 
                    src={Logo} 
                    alt="Renuir Logo" 
                    width={120}
                    height={34}
                    className="h-8 w-auto brightness-0 invert"
                    priority
                  />
                </Link>
              </div>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto py-8 px-6">
              <div className="flex flex-col space-y-2">
                <Typography variant="smallText" className="text-[#9ca3af] font-bold uppercase tracking-widest text-[10px] mb-4">
                  Navigation
                </Typography>
                {menuItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link 
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        "flex items-center justify-between group p-4 rounded-2xl transition-all duration-200",
                        isActive
                          ? "bg-[#026dc7]/20 text-[#026dc7] font-bold border border-[#026dc7]/30"
                          : "text-[#9ca3af] hover:bg-[#141414] hover:text-white"
                      )}
                    >
                      <span className="text-lg">{item.name}</span>
                      <ArrowRight className={clsx(
                        "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1",
                        isActive ? "text-[#026dc7]" : "text-[#6b7280]"
                      )} />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-12 space-y-6">
                <Typography variant="smallText" className="text-[#9ca3af] font-bold uppercase tracking-widest text-[10px] px-4">
                  Ready to start?
                </Typography>
                <Link href="/#waitlist">
                  <Button className="w-full h-14 rounded-2xl text-lg font-bold bg-[#026dc7] hover:bg-[#0357a1] text-white">
                    Join the Waitlist
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-8 border-t border-white/10 bg-[#141414]">
              <Typography variant="smallText" className="text-[#9ca3af] block text-center">
                © 2025 Renuir. Built with AI.
              </Typography>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
