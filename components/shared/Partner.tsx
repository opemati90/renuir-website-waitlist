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
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Us | Renuir",
  description:
    "Become a Renuir partner and streamline your lost-and-found operations",
};

export default function PartnerPage() {
  return (
    <>
      <Typography variant="h1" className="mb-4 text-center text-primary-600">
        Partner with Us
      </Typography>

      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-4">
          Partnership Program - Coming Soon
        </Badge>
        <Typography variant="lead" className="mb-6">
          We&apos;re building Renuir to help businesses and organizations streamline their lost-and-found operations. Join our waitlist to be among the first partners when we launch.
        </Typography>
      </div>

      <div className="mb-8">
        <div className="pt-6">
          <Typography variant="h3" className="mb-6 ">
            Partnership Programs
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Building,
                label: "Hospitality",
                desc: "Hotels, resorts, vacation rentals",
                color: "bg-blue-50 text-blue-700",
              },
              {
                icon: Train,
                label: "Transportation",
                desc: "Airlines, rail, transit",
                color: "bg-green-50 text-green-700",
              },
              {
                icon: Users,
                label: "Venues & Events",
                desc: "Stadiums, concert halls",
                color: "bg-purple-50 text-purple-700",
              },
              {
                icon: ShoppingBag,
                label: "Retail",
                desc: "Stores, shopping centers",
                color: "bg-orange-50 text-orange-700",
              },
              {
                icon: GraduationCap,
                label: "Education",
                desc: "Universities, schools",
                color: "bg-indigo-50 text-indigo-700",
              },
            ].map(({ icon: Icon, label, desc, color }) => (
              <Card key={label}>
                <CardContent className="pt-6 text-center">
                  <div
                    className={`${color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <Typography variant="h4" className="text-base! mb-2">
                    {label}
                  </Typography>
                  <Typography variant="smallText" className="text-gray-600">
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="pt-8">
          <Typography variant="h3" className="mb-6">
            Partnership Benefits
          </Typography>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Badge variant="outline" className="mb-4">
                  Basic Plan
                </Badge>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-gray-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      Access to Renuir platform
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-gray-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      Standard support
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-gray-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      Monthly reporting
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary-300 border-2">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-primary-600">Enterprise Plan</Badge>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      Custom branded portal
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      API access & integrations
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      Dedicated account manager
                    </Typography>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary-600" />
                    </div>
                    <Typography variant="smallText" className="text-sm!">
                      Priority support
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="#waitlist">
          <Button size="lg" className="mb-4 mt-8">
            Join the Waitlist
          </Button>
        </a>
        <Typography variant="lead">Email: partnerships@renuir.com</Typography>
        <Typography variant="smallText" className="mt-2 text-dark-600">
          We&apos;ll reach out when we&apos;re ready to onboard partners
        </Typography>
      </div>
    </>
  );
}
