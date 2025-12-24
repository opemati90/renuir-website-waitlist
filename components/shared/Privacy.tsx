import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { TableOfContents } from "./TableOfContents";
import { Shield, Database, Lock, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Renuir",
  description: "Renuir's Privacy Policy detailing how we handle your data",
};

const tocItems = [
  { id: "information-collect", title: "Information We Collect", level: 1 },
  { id: "how-we-use", title: "How We Use Your Information", level: 1 },
  { id: "disclosure", title: "Disclosure of Your Information", level: 1 },
  { id: "data-retention", title: "Data Retention", level: 1 },
  { id: "data-security", title: "Data Security", level: 1 },
  { id: "contact", title: "Contact Us", level: 1 },
];

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-3 sm:mb-4">
          Privacy Policy
        </Typography>
        <Typography variant="lead" className="text-sm sm:text-base text-dark-600 italic">
          Last updated: January 2025
        </Typography>
      </div>

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
                  <Database className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="information-collect"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    1. Information We Collect
                  </Typography>
                </div>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-dark-700 leading-relaxed">
                <div>
                  <Typography variant="smallText" className="font-semibold text-dark-900 mb-2">
                    Personal Data:
                  </Typography>
                  <Typography variant="smallText" className="text-dark-700">
                    We collect personally identifiable information, such as your name, email address, and telephone
                    number, only when you voluntarily provide it to us (e.g., when joining the waitlist). When Renuir launches, we will also collect this information when you report an item.
                  </Typography>
                </div>
                <div>
                  <Typography variant="smallText" className="font-semibold text-dark-900 mb-2">
                    Item Data:
                  </Typography>
                  <Typography variant="smallText" className="text-dark-700">
                    When Renuir launches, when you report a lost or found item, we will collect descriptions, images, and location data related to that item to facilitate matching.
                  </Typography>
                </div>
                <div>
                  <Typography variant="smallText" className="font-semibold text-dark-900 mb-2">
                    Automatically Collected Data:
                  </Typography>
                  <Typography variant="smallText" className="text-dark-700">
                    We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
                  </Typography>
                </div>
              </div>
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
                    id="how-we-use"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    2. How We Use Your Information
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4">
                We use the information we collect to:
              </Typography>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-dark-700">
                <li>Keep you informed about Renuir&apos;s development and launch (for waitlist members).</li>
                <li>When we launch, facilitate the matching of lost and found items.</li>
                <li>When we launch, communicate with you regarding your reports or account.</li>
                <li>Improve our AI matching algorithms (using anonymized data).</li>
                <li>Prevent fraudulent activity.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Send you updates about our services (with your consent).</li>
              </ul>
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
                    id="disclosure"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    3. Disclosure of Your Information
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                We do not sell your personal data. When Renuir launches, we may share your information
                with verified business partners (e.g., the airport or hotel where you lost an item) strictly for the purpose of reuniting you with your property. Contact details will only be shared after a confirmed match and your explicit consent.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="data-retention"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    4. Data Retention
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When Renuir launches, lost and found item reports will be retained for up to 90 days after resolution. Account information is retained until you request deletion.
              </Typography>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography 
                    variant="h2" 
                    id="data-security"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 scroll-mt-24"
                  >
                    5. Data Security
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security assessments, and access controls.
              </Typography>
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
                    6. Contact Us
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </Typography>
              <div className="mt-4 p-4 bg-white rounded-lg border border-primary-200">
                <Typography variant="smallText" className="text-sm sm:text-base">
                  <strong>Email:</strong>{" "}
                  <a 
                    href="mailto:privacy@renuir.com" 
                    className="text-primary-600 hover:text-primary-700 underline font-semibold"
                  >
                    privacy@renuir.com
                  </a>
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
