import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Train,
  Users,
  ShoppingBag,
  GraduationCap,
  Check,
  ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Us | Renuir",
  description:
    "Become a Renuir partner and streamline your lost-and-found operations",
};

const partnershipTypes = [
  {
    icon: Building,
    label: "Hospitality",
    desc: "Hotels, resorts, vacation rentals",
    color: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: Train,
    label: "Transportation",
    desc: "Airlines, rail, transit",
    color: "bg-green-50 text-green-700",
    iconBg: "bg-green-100",
  },
  {
    icon: Users,
    label: "Venues & Events",
    desc: "Stadiums, concert halls",
    color: "bg-purple-50 text-purple-700",
    iconBg: "bg-purple-100",
  },
  {
    icon: ShoppingBag,
    label: "Retail",
    desc: "Stores, shopping centers",
    color: "bg-orange-50 text-orange-700",
    iconBg: "bg-orange-100",
  },
  {
    icon: GraduationCap,
    label: "Education",
    desc: "Universities, schools",
    color: "bg-indigo-50 text-indigo-700",
    iconBg: "bg-indigo-100",
  },
];

export default function PartnerPage() {
  return (
    <div className="w-full">
      <div className="text-center mb-8 sm:mb-12">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-4 sm:mb-6">
          Partner with Us
        </Typography>
        <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
          Partnership Program - Coming Soon
        </Badge>
        <Typography variant="lead" className="text-sm sm:text-base md:text-lg text-dark-700 max-w-3xl mx-auto px-4">
          We&apos;re building Renuir to help businesses and organizations streamline their lost-and-found operations. Join our waitlist to be among the first partners when we launch.
        </Typography>
      </div>

      <div className="mb-8 sm:mb-12">
        <Typography variant="h2" className="text-2xl sm:text-3xl font-bold text-dark-900 mb-6 sm:mb-8 text-center sm:text-left">
          Partnership Programs
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {partnershipTypes.map(({ icon: Icon, label, desc, color, iconBg }) => (
            <Card 
              key={label} 
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className={`${iconBg} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <Typography variant="h3" className="text-lg sm:text-xl font-bold mb-2 text-dark-900">
                  {label}
                </Typography>
                <Typography variant="smallText" className="text-sm sm:text-base text-dark-600">
                  {desc}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8 sm:mb-12">
        <Typography variant="h2" className="text-2xl sm:text-3xl font-bold text-dark-900 mb-6 sm:mb-8 text-center sm:text-left">
          Partnership Benefits
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 sm:p-8">
              <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm">
                Basic Plan
              </Badge>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-gray-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    Access to Renuir platform
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-gray-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    Standard support
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-gray-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    Monthly reporting
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary-300 shadow-md hover:shadow-lg transition-shadow bg-primary-50/30">
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-4 sm:mb-6 bg-primary-600 text-xs sm:text-sm">Enterprise Plan</Badge>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    Custom branded portal
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    API access & integrations
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    Dedicated account manager
                  </Typography>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-600" />
                  </div>
                  <Typography variant="smallText" className="text-sm sm:text-base text-dark-700">
                    Priority support
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-12">
        <a href="#waitlist">
          <Button 
            size="lg" 
            className="mb-4 sm:mb-6 w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg flex items-center gap-2 mx-auto"
          >
            Join the Waitlist
            <ArrowRight className="h-5 w-5" />
          </Button>
        </a>
        <div className="space-y-2">
          <Typography variant="lead" className="text-sm sm:text-base md:text-lg">
            Email:{" "}
            <a 
              href="mailto:partnerships@renuir.com" 
              className="text-primary-600 hover:text-primary-700 underline font-semibold"
            >
              partnerships@renuir.com
            </a>
          </Typography>
          <Typography variant="smallText" className="text-sm sm:text-base text-dark-600">
            We&apos;ll reach out when we&apos;re ready to onboard partners
          </Typography>
        </div>
      </div>
    </div>
  );
}
