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
      <ol className="flex items-center space-x-2 text-sm text-dark-600">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 rounded"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-dark-400" aria-hidden="true" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2 rounded"
              >
                <Typography variant="smallText">{item.label}</Typography>
              </Link>
            ) : (
              <Typography variant="smallText" className="text-dark-800 font-medium">
                {item.label}
              </Typography>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

