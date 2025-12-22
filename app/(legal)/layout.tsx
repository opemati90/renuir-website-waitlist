"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Nav from "@/components/navbar/Nav";
import { Footer } from "@/components/shared/Footer";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className=" bg-white min-h-screen">
      <Nav />
      <div className="pt-48 pb-24 app-container mx-auto px-4 sm:px-6 lg:px-8">
        {children}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Button
            variant="link"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
