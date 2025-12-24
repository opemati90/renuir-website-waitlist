import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Eye, Ear, Move, Brain, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Renuir",
  description: "Renuir's commitment to digital accessibility",
};

const accessibilityTypes = [
  {
    icon: Eye,
    label: "Visual",
    desc: "Blindness, low vision, color blindness",
  },
  { 
    icon: Ear, 
    label: "Hearing", 
    desc: "Hearing impairments" 
  },
  { 
    icon: Move, 
    label: "Motor", 
    desc: "Motor impairments" 
  },
  {
    icon: Brain,
    label: "Cognitive",
    desc: "Cognitive disabilities",
  },
];

const accessibilityFeatures = [
  "Sufficient color contrast ratios for text and interactive elements",
  "Text can be resized up to 200% without loss of functionality",
  "Alternative text for images and non-text content",
  "Keyboard navigation support with focus indicators",
  "Screen reader compatibility (NVDA, JAWS, VoiceOver)",
  "Clear and simple language throughout",
  "Meaningful link text and descriptive page titles",
  "Error identification and suggestions for form inputs",
];

export default function AccessibilityPage() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-3 sm:mb-4">
          Accessibility Statement
        </Typography>
        <Typography variant="lead" className="text-sm sm:text-base text-dark-600 italic">
          Last updated: January 2025
        </Typography>
      </div>

      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-6 sm:mb-8">
        <CardContent className="p-6 sm:p-8">
          <Typography variant="smallText" className="text-center text-sm sm:text-base text-dark-700 mb-6 sm:mb-8 leading-relaxed">
            Renuir is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {accessibilityTypes.map(({ icon: Icon, label, desc }) => (
              <Card
                key={label}
                className="border-none shadow-none bg-primary-10 hover:bg-primary-50 transition-colors"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-primary-600" />
                  <Typography variant="h4" className="text-base sm:text-lg font-bold mb-2 text-dark-900">
                    {label}
                  </Typography>
                  <Typography variant="smallText" className="text-xs sm:text-sm text-dark-600">
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-6 sm:mb-8">
        <CardContent className="p-6 sm:p-8">
          <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4 sm:mb-6">
            Accessibility Features
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {accessibilityFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5 shrink-0" />
                <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                  {feature}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-primary-50/50">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-600 flex items-center justify-center">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="flex-1">
              <Typography variant="h2" className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-4">
                Feedback & Contact
              </Typography>
            </div>
          </div>
          <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 mb-4 sm:mb-6 leading-relaxed">
            We welcome your feedback on the accessibility of Renuir. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
          </Typography>

          <div className="p-4 sm:p-6 bg-white rounded-lg border border-primary-200 space-y-3 sm:space-y-4">
            <Typography variant="smallText" className="text-sm sm:text-base">
              <strong>Email:</strong>{" "}
              <a 
                href="mailto:accessibility@renuir.com" 
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                accessibility@renuir.com
              </a>
            </Typography>
            <Typography variant="smallText" className="text-sm sm:text-base text-dark-600">
              <strong>Mail:</strong> Renuir UG (haftungsbeschränkt), Accessibility Team, Hönower Wiesenweg 57, 10318 Berlin, Germany
            </Typography>
            <Typography variant="smallText" className="text-sm sm:text-base text-dark-600">
              We aim to respond to accessibility feedback within 2 business days.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
