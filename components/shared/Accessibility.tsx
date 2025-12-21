import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Eye, Ear, Move, Brain } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Renuir",
  description: "Renuir's commitment to digital accessibility",
};

export default function AccessibilityPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-primary-600">
        Accessibility Statement
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <Card className="mb-8">
        <CardContent className="pt-3">
          <Typography variant="smallText" className="text-center mb-4">
            Renuir is committed to ensuring digital accessibility for people
            with disabilities. We are continually improving the user experience
            for everyone and applying the relevant accessibility standards.
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[
              {
                icon: Eye,
                label: "Visual",
                desc: "Blindness, low vision, color blindness",
              },
              { icon: Ear, label: "Hearing", desc: "Hearing impairments" },
              { icon: Move, label: "Motor", desc: "Motor impairments" },
              {
                icon: Brain,
                label: "Cognitive",
                desc: "Cognitive disabilities",
              },
            ].map(({ icon: Icon, label, desc }) => (
              <Card
                key={label}
                className="border-none shadow-none bg-primary-10"
              >
                <CardContent className="pt-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary-600" />
                  <Typography variant="h4" className="text-base! mb-1">
                    {label}
                  </Typography>
                  <Typography variant="smallText" className="text-gray-600">
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <Typography variant="h3" className="mb-4 text-primary-600">
            Accessibility Features
          </Typography>
          <div className="space-y-4">
            {[
              "Sufficient color contrast ratios for text and interactive elements",
              "Text can be resized up to 200% without loss of functionality",
              "Alternative text for images and non-text content",
              "Keyboard navigation support with focus indicators",
              "Screen reader compatibility (NVDA, JAWS, VoiceOver)",
              "Clear and simple language throughout",
              "Meaningful link text and descriptive page titles",
              "Error identification and suggestions for form inputs",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <Typography variant="smallText" className="font-normal">
                  {feature}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <Typography variant="h3" className="mb-4 text-primary-600">
            Feedback & Contact
          </Typography>
          <Typography variant="smallText" className="mb-4">
            We welcome your feedback on the accessibility of Renuir. If you
            encounter accessibility barriers or have suggestions for
            improvement, please contact us:
          </Typography>

          <div className="p-4 bg-primary-10 flex flex-col rounded-lg space-y-4 mt-4">
            <Typography variant="smallText" className="font-medium">
              Email: accessibility@renuir.com
            </Typography>
            <Typography variant="smallText">
              Mail: Renuir UG (haftungsbeschränkt), Accessibility Team, Hönower
              Wiesenweg 57, 10318 Berlin, Germany
            </Typography>
            <Typography variant="smallText" className="text-gray-600">
              We aim to respond to accessibility feedback within 2 business
              days.
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
