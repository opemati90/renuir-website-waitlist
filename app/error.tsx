"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Nav from "@/components/navbar/Nav";
import { Footer } from "@/components/shared/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Nav />
      <main className="flex-1 flex items-center justify-center pt-48 pb-24">
        <div className="app-container text-center max-w-2xl px-4">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-red-400" />
              </div>
            </div>
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Something went wrong
            </Typography>
            <Typography variant="h4" className="text-[#9ca3af] mb-8 max-w-lg mx-auto">
              We encountered an unexpected error. Our team has been notified and is working to fix this issue.
            </Typography>
            {error.digest && (
              <Typography variant="smallText" className="text-[#6b7280] mb-4">
                Error ID: {error.digest}
              </Typography>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto flex items-center gap-2"
              onClick={reset}
            >
              <RefreshCw className="h-5 w-5" />
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Typography variant="smallText" className="text-[#9ca3af]">
              If this problem persists, please{" "}
              <a 
                href="mailto:contact@renuir.com" 
                className="text-[#026dc7] hover:text-[#38a9f8] underline font-semibold transition-colors"
              >
                contact our support team
              </a>
              {" "}and include the error ID above.
            </Typography>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

