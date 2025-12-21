import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Renuir",
  description: "Cookie Policy for Renuir's website and services",
};

export default function CookiesPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-primary-600">
        Cookie Policy
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <div className="prose prose-blue max-w-none space-y-6">
        <Card>
          <CardContent className="pt-6">
            <Typography variant="smallText">
              Renuir uses cookies and similar tracking technologies to track the
              activity on our Service and hold certain information. This Cookie
              Policy explains what cookies are, how we use them, and your
              choices regarding cookies.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              What are Cookies?
            </Typography>
            <Typography variant="smallText">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit a website. They are
              widely used to make websites work efficiently, provide information
              to website owners, and enhance user experience.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              Types of Cookies We Use
            </Typography>
            <Typography variant="smallText" className="mb-4">
              We use the following categories of cookies:
            </Typography>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">Essential</Badge>
                  <Typography
                    variant="h4"
                    className="text-lg! text-primary-600"
                  >
                    Essential Cookies
                  </Typography>
                </div>
                <Typography variant="smallText">
                  These cookies are strictly necessary for the website to
                  function properly. They enable core functionality such as
                  security, network management, and accessibility. You cannot
                  opt out of these cookies as the website cannot function
                  properly without them.
                </Typography>
                <ul className="list-disc pl-5 space-y-1 mt-2 font-semibold">
                  <li>Session management</li>
                  <li>Security tokens</li>
                  <li>User authentication</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default">Analytics</Badge>
                  <Typography
                    variant="h4"
                    className="text-lg! text-primary-600"
                  >
                    Analytics Cookies
                  </Typography>
                </div>
                <Typography variant="smallText">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously. This helps us improve our website and services.
                </Typography>
                <ul className="list-disc pl-5 space-y-1 mt-2 font-semibold">
                  <li>Page view statistics</li>
                  <li>Traffic sources</li>
                  <li>User journey analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              Managing Your Cookie Preferences
            </Typography>
            <Typography variant="smallText">
              You can manage cookies through several methods:
            </Typography>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Browser Settings:</strong> Most browsers allow you to
                refuse or delete cookies through settings. Note that blocking
                all cookies may impact website functionality.
              </li>
              <li>
                <strong>Our Cookie Settings:</strong> You can update your cookie
                preferences at any time using our cookie consent tool.
              </li>
              <li>
                <strong>Opt-Out Links:</strong> For analytics cookies, you can
                use opt-out tools provided by analytics providers.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
