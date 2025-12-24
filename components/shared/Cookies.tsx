import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie, Settings, Shield, BarChart3 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Renuir",
  description: "Cookie Policy for Renuir's website and services",
};

export default function CookiesPage() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-3 sm:mb-4">
          Cookie Policy
        </Typography>
        <Typography variant="lead" className="text-sm sm:text-base text-dark-600 italic">
          Last updated: January 2025
        </Typography>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <Cookie className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4">
                  About Cookies
                </Typography>
              </div>
            </div>
            <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
              Renuir uses cookies and similar tracking technologies to track the activity on our Service and hold certain information. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
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
                <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4">
                  What are Cookies?
                </Typography>
              </div>
            </div>
            <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work efficiently, provide information to website owners, and enhance user experience.
            </Typography>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4">
                  Types of Cookies We Use
                </Typography>
              </div>
            </div>
            <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-6 leading-relaxed">
              We use the following categories of cookies:
            </Typography>

            <div className="space-y-6 sm:space-y-8">
              <div className="p-4 sm:p-6 bg-primary-50 rounded-xl border border-primary-100">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Badge variant="default" className="w-fit">Essential</Badge>
                  <Typography variant="h3" className="text-lg sm:text-xl font-bold text-primary-600">
                    Essential Cookies
                  </Typography>
                </div>
                <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 leading-relaxed">
                  These cookies are strictly necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies as the website cannot function properly without them.
                </Typography>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-dark-700 font-semibold">
                  <li>Session management</li>
                  <li>Security tokens</li>
                  <li>User authentication</li>
                </ul>
              </div>

              <div className="p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Badge variant="default" className="w-fit bg-blue-600">Analytics</Badge>
                  <Typography variant="h3" className="text-lg sm:text-xl font-bold text-primary-600">
                    Analytics Cookies
                  </Typography>
                </div>
                <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                </Typography>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base text-dark-700 font-semibold">
                  <li>Page view statistics</li>
                  <li>Traffic sources</li>
                  <li>User journey analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4">
                  Managing Your Cookie Preferences
                </Typography>
              </div>
            </div>
            <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 leading-relaxed">
              You can manage cookies through several methods:
            </Typography>
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-dark-700">
              <li>
                <strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through settings. Note that blocking all cookies may impact website functionality.
              </li>
              <li>
                <strong>Our Cookie Settings:</strong> You can update your cookie preferences at any time using our cookie consent tool.
              </li>
              <li>
                <strong>Opt-Out Links:</strong> For analytics cookies, you can use opt-out tools provided by analytics providers.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
