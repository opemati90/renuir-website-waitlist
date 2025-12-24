"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Nav from "@/components/navbar/Nav";
import { Footer } from "@/components/shared/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    router.back();
  };

  // Generate breadcrumbs based on pathname
  const getBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs = [];

    if (pathSegments.length > 0) {
      const pageName = pathSegments[pathSegments.length - 1];
      const formattedName = pageName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      breadcrumbs.push({
        label: formattedName,
      });
    }

    return breadcrumbs;
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Nav />
      <div className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-24">
        <div className="app-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <Breadcrumbs items={getBreadcrumbs()} />
          </div>
          <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-[#9ca3af] prose-strong:text-white prose-a:text-[#026dc7] prose-a:no-underline hover:prose-a:underline prose-li:text-[#9ca3af]">
            {children}
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <Button
              variant="link"
              onClick={handleBack}
              className="flex items-center gap-2 text-sm sm:text-base text-[#026dc7] hover:text-[#38a9f8]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
