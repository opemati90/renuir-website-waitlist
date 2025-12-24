import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Users, UserCheck, AlertTriangle, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips | Renuir",
  description: "Safety guidelines for using Renuir's lost and found platform",
};

export default function SafetyPage() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-3 sm:mb-4">
          Safety Tips
        </Typography>
        <Typography variant="lead" className="text-sm sm:text-base text-dark-600 italic">
          Last updated: January 2025
        </Typography>
      </div>

      <Alert className="mb-6 sm:mb-8 bg-primary-50 border-primary-200">
        <Shield className="h-5 w-5 text-primary-600" />
        <AlertDescription className="text-primary-700 text-sm sm:text-base">
          At Renuir, your safety will be our top priority. These guidelines outline how we plan to ensure a secure experience when we launch.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-primary-600" />
              </div>
              <Typography variant="h2" className="text-xl sm:text-2xl font-bold text-primary-600">
                For Item Owners
              </Typography>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Meet in public, well-lit locations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Bring someone with you</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Inform someone about your meeting</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Meet during daylight hours when possible</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <UserCheck className="h-6 w-6 sm:h-7 sm:w-7 text-primary-600" />
              </div>
              <Typography variant="h2" className="text-xl sm:text-2xl font-bold text-primary-600">
                For Finders
              </Typography>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Take clear photos of items</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Keep items in safe places</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Verify claimant identity carefully</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span className="text-sm sm:text-base text-dark-700 leading-relaxed">Ask specific questions about the item</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-6 sm:mb-8">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 text-red-600" />
            </div>
            <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">
              Recognizing Scams
            </Typography>
          </div>
          <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 sm:mb-6 leading-relaxed">
            Be aware of these common warning signs:
          </Typography>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-dark-700">
            <li>Requests for upfront payment or &quot;shipping fees&quot; before return</li>
            <li>Pressure to act quickly or urgently</li>
            <li>Unwillingness to meet in safe, public locations</li>
            <li>Vague descriptions of the item that don&apos;t match your lost property</li>
            <li>Requests to communicate outside of the Renuir platform</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-primary-50/50">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </div>
            <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">
              Reporting Concerns
            </Typography>
          </div>
          <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 sm:mb-6 leading-relaxed">
            When Renuir launches, if you encounter suspicious activity or feel unsafe at any point, you will be able to:
          </Typography>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-dark-700 mb-4">
            <li>Report the user or listing through Renuir&apos;s reporting feature</li>
            <li>Contact our Trust & Safety team at safety@renuir.com</li>
            <li>If you feel in immediate danger, contact local law enforcement</li>
          </ul>
          <div className="mt-6 p-4 sm:p-6 bg-white rounded-lg border border-primary-200">
            <Typography variant="smallText" className="text-sm sm:text-base">
              <strong>Contact Safety Team:</strong>{" "}
              <a 
                href="mailto:safety@renuir.com" 
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                safety@renuir.com
              </a>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
