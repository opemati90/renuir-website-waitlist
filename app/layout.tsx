import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Renuir - AI-Powered Lost & Found Platform | Join the Waitlist",
    template: "%s | Renuir",
  },
  description:
    "Renuir is an AI-powered lost & found platform currently in development. Join our waitlist to be among the first to experience it when we launch. Report once, and we'll search everywhere for you in real time.",
  keywords: [
    "lost and found",
    "lost items",
    "found items",
    "AI matching",
    "item recovery",
    "waitlist",
    "Renuir",
  ],
  authors: [{ name: "Renuir" }],
  creator: "Renuir",
  publisher: "Renuir",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://renuir.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Renuir",
    title: "Renuir - AI-Powered Lost & Found Platform | Join the Waitlist",
    description:
      "Join the waitlist for Renuir, an AI-powered lost & found platform that actually works. Be among the first to experience it when we launch.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Renuir - AI-Powered Lost & Found Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renuir - AI-Powered Lost & Found Platform | Join the Waitlist",
    description:
      "Join the waitlist for Renuir, an AI-powered lost & found platform that actually works. Be among the first to experience it when we launch.",
    images: ["/images/og-image.png"],
    creator: "@renuir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Renuir",
    url: "https://renuir.com",
    logo: "https://renuir.com/images/Renuirlogo-1.svg",
    description:
      "AI-powered lost & found platform currently in development. Join our waitlist to be among the first to experience it when we launch.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "contact@renuir.com",
    },
    sameAs: [
      // Add social media links when available
      // "https://twitter.com/renuir",
      // "https://linkedin.com/company/renuir",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
