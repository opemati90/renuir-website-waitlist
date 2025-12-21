import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Users, UserCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips | Renuir",
  description: "Safety guidelines for using Renuir's lost and found platform",
};

export default function SafetyPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-primary-600">
        Safety Tips
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <Alert className="mb-6 bg-primary-50 border-primary-200">
        <Shield className="h-4 w-4 text-primary-600" />
        <AlertDescription className="text-primary-700">
          At Renuir, your safety is our top priority. Follow these guidelines
          for a secure experience.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-primary-600" />
              <Typography variant="h3" className="text-lg!">
                For Item Owners
              </Typography>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Meet in public, well-lit locations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Bring someone with you</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Inform someone about your meeting</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Meet during daylight hours when possible</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <UserCheck className="h-5 w-5 text-primary-600" />
              <Typography variant="h3" className="text-lg!">
                For Finders
              </Typography>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Take clear photos of items</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Keep items in safe places</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Verify claimant identity carefully</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-600 mt-1.5" />
                <span>Ask specific questions about the item</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Typography variant="h3" className="mb-4 text-primary-600">
            Recognizing Scams
          </Typography>
          <Typography variant="smallText" className="mb-4">
            Be aware of these common warning signs:
          </Typography>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Requests for upfront payment or &quot;shipping fees&quot; before
              return
            </li>
            <li>Pressure to act quickly or urgently</li>
            <li>Unwillingness to meet in safe, public locations</li>
            <li>
              Vague descriptions of the item that don&apos;t match your lost
              property
            </li>
            <li>Requests to communicate outside of the Renuir platform</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <Typography variant="h3" className="mb-4 text-primary-600">
            Reporting Concerns
          </Typography>
          <Typography variant="smallText">
            If you encounter suspicious activity or feel unsafe at any point,
            please:
          </Typography>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Report the user or listing through Renuir&apos;s reporting feature
            </li>
            <li>Contact our Trust & Safety team at safety@renuir.com</li>
            <li>
              If you feel in immediate danger, contact local law enforcement
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
