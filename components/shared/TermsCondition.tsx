import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, FileText, UserCheck, UserPlus, Shield, Ban, Mail } from "lucide-react";
import { Metadata } from "next";
import { TableOfContents } from "./TableOfContents";

export const metadata: Metadata = {
  title: "Terms & Conditions | Renuir",
  description: "Terms and Conditions for using Renuir's services",
};

const tocItems = [
  { id: "introduction", title: "Introduction", level: 1 },
  { id: "eligibility", title: "Eligibility", level: 1 },
  { id: "account-registration", title: "Account Registration", level: 1 },
  { id: "use-of-service", title: "Use of Service", level: 1 },
  { id: "contact", title: "Contact Us", level: 1 },
];

export default function TermsPage() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-3 sm:mb-4">
          Terms & Conditions
        </Typography>
        <Typography variant="lead" className="text-sm sm:text-base text-dark-600 italic">
          Last updated: January 2025
        </Typography>
      </div>

      <Alert className="mb-6 sm:mb-8 bg-amber-50 border-amber-200">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
        <AlertDescription className="text-amber-800 text-sm sm:text-base">
          Please read these terms carefully before using our Service.
        </AlertDescription>
      </Alert>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
        {/* Table of Contents - Desktop */}
        <div className="hidden lg:block">
          <TableOfContents items={tocItems} />
        </div>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Table of Contents - Mobile */}
          <div className="lg:hidden">
            <TableOfContents items={tocItems} />
          </div>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="introduction"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    1. Introduction
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                Welcome to Renuir. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="eligibility"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    2. Eligibility
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                You must be at least 16 years of age to use the Service. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <UserPlus className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="account-registration"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    3. Account Registration
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                Some features of the Service may require you to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="use-of-service"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    4. Use of Service
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 leading-relaxed">
                Renuir provides a platform for reporting and matching lost and found items. You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:
              </Typography>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-dark-700">
                <li>Submit false reports or claim items that do not belong to you</li>
                <li>Use the Service to facilitate illegal activities</li>
                <li>Impersonate any person or entity</li>
                <li>Upload malicious software or content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-primary-50/50">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="contact"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    5. Contact Us
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </Typography>
              <div className="mt-4 p-4 sm:p-6 bg-white rounded-lg border border-primary-200 space-y-2">
                <Typography variant="smallText" className="text-sm sm:text-base">
                  <strong>Email:</strong>{" "}
                  <a 
                    href="mailto:legal@renuir.com" 
                    className="text-primary-600 hover:text-primary-700 underline font-semibold"
                  >
                    legal@renuir.com
                  </a>
                </Typography>
                <Typography variant="smallText" className="text-sm sm:text-base text-dark-600">
                  <strong>Address:</strong> Renuir UG (haftungsbeschränkt), Hönower Wiesenweg 57, 10318 Berlin, Germany
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
