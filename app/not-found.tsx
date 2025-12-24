"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Home, Search, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Nav from "@/components/navbar/Nav";
import { Footer } from "@/components/shared/Footer";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 flex items-center justify-center pt-48 pb-24">
        <div className="app-container text-center max-w-2xl px-4">
          <div className="mb-8">
            <Typography variant="h1" className="text-8xl md:text-9xl font-bold text-primary-600 mb-4">
              404
            </Typography>
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-black mb-4">
              Page Not Found
            </Typography>
            <Typography variant="h4" className="text-dark-700 mb-8 max-w-lg mx-auto">
              Oops! The page you&apos;re looking for seems to have gotten lost. 
              Don&apos;t worry, we&apos;ll help you find your way back.
            </Typography>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
            <Link href="/#waitlist">
              <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <Search className="h-5 w-5" />
                Join the Waitlist
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto flex items-center gap-2"
              onClick={() => router.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Typography variant="smallText" className="text-dark-600">
              If you believe this is an error, please{" "}
              <a 
                href="mailto:contact@renuir.com" 
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                contact us
              </a>
              .
            </Typography>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

