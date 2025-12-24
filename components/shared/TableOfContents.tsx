"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="mb-8 sm:mb-12">
      {/* Mobile: Collapsible */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4"
          aria-expanded={isOpen}
        >
          <Typography variant="h4" className="font-semibold">
            Table of Contents
          </Typography>
          {isOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </Button>
        {isOpen && (
          <nav
            className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
            aria-label="Table of contents"
          >
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                      activeId === item.id
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-dark-700 hover:bg-gray-100"
                    }`}
                    style={{ paddingLeft: `${(item.level - 1) * 1 + 0.75}rem` }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop: Sticky */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <Typography variant="h4" className="font-semibold mb-4 text-dark-800">
            Table of Contents
          </Typography>
          <nav
            className="p-4 bg-gray-50 rounded-lg border border-gray-200 max-h-[calc(100vh-200px)] overflow-y-auto"
            aria-label="Table of contents"
          >
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                      activeId === item.id
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : "text-dark-700 hover:bg-gray-100"
                    }`}
                    style={{ paddingLeft: `${(item.level - 1) * 1 + 0.75}rem` }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

