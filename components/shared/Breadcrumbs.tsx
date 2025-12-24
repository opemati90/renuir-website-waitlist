"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Typography } from "@/components/ui/typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-[#9ca3af]">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-[#026dc7] focus-visible:outline-2 focus-visible:outline-[#026dc7] focus-visible:outline-offset-2 rounded transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4 text-white" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-[#6b7280]" aria-hidden="true" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-[#026dc7] focus-visible:outline-2 focus-visible:outline-[#026dc7] focus-visible:outline-offset-2 rounded transition-colors"
              >
                <Typography variant="smallText" className="text-[#9ca3af]">{item.label}</Typography>
              </Link>
            ) : (
              <Typography variant="smallText" className="text-white font-medium">
                {item.label}
              </Typography>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

