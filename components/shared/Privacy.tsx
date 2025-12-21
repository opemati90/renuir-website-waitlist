import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Renuir",
  description: "Renuir's Privacy Policy detailing how we handle your data",
};

export default function PrivacyPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-primary-700">
        Privacy Policy
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <div className="prose prose-blue max-w-none space-y-6">
        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              1. Information We Collect
            </Typography>
            <Typography variant="smallText" className="space-y-4">
              <strong>Personal Data:</strong> We collect personally identifiable
              information, such as your name, email address, and telephone
              number, only when you voluntarily provide it to us (e.g., when
              joining the waitlist or reporting an item).
              <br />
              <br />
              <strong>Item Data:</strong> When you report a lost or found item,
              we collect descriptions, images, and location data related to that
              item to facilitate matching.
              <br />
              <br />
              <strong>Automatically Collected Data:</strong> We automatically
              collect certain information when you visit our website, including
              your IP address, browser type, operating system, referring URLs,
              and information about how you interact with our Service.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              2. How We Use Your Information
            </Typography>
            <Typography variant="smallText">
              We use the information we collect to:
            </Typography>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Facilitate the matching of lost and found items.</li>
              <li>Communicate with you regarding your reports or account.</li>
              <li>
                Improve our AI matching algorithms (using anonymized data).
              </li>
              <li>Prevent fraudulent activity.</li>
              <li>Provide customer support and respond to inquiries.</li>
              <li>Send you updates about our services (with your consent).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              3. Disclosure of Your Information
            </Typography>
            <Typography variant="smallText">
              We do not sell your personal data. We may share your information
              with verified business partners (e.g., the airport or hotel where
              you lost an item) strictly for the purpose of reuniting you with
              your property. Contact details are only shared after a confirmed
              match and your explicit consent.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              4. Data Retention
            </Typography>
            <Typography variant="smallText">
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy. Lost and
              found item reports are retained for up to 90 days after
              resolution. Account information is retained until you request
              deletion.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              5. Data Security
            </Typography>
            <Typography variant="smallText">
              We implement appropriate technical and organizational security
              measures to protect your personal data against unauthorized
              access, alteration, disclosure, or destruction. This includes
              encryption of data in transit and at rest, regular security
              assessments, and access controls.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              10. Contact Us
            </Typography>
            <Typography variant="smallText" className="space-y-2">
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact our Data Protection Officer:
              <br />
              <br />
              Email: privacy@renuir.com
              <br />
              Address: Renuir UG (haftungsbeschränkt), Hönower Wiesenweg 57,
              10318 Berlin, Germany
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
