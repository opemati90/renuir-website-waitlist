import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Renuir",
  description: "Legal imprint information for Renuir UG",
};

export default function ImprintPage() {
  return (
    <>
      <Typography variant="h2" className="mb-8 text-primary-700">
        Imprint
      </Typography>

      <div className="prose prose-blue max-w-none space-y-6">
        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-3 text-primary-600">
              Information according to § 5 TMG
            </Typography>
            <Typography variant="smallText" className="space-y-2">
              <strong>Renuir UG (haftungsbeschränkt)</strong>
              <br />
              Hönower Wiesenweg 57
              <br />
              10318 Berlin
              <br />
              Germany
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-3 text-primary-600">
              Contact
            </Typography>
            <Typography variant="smallText">Email: info@renuir.com</Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-3 text-primary-600">
              Register Entry
            </Typography>
            <Typography variant="smallText">
              Registered in the Commercial Register (Handelsregister)
              <br />
              Register Court: Amtsgericht Berlin-Charlottenburg
              <br />
              Registration Number: HRB [pending]
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-3 text-primary-600">
              VAT ID
            </Typography>
            <Typography variant="smallText">
              VAT identification number according to § 27a Umsatzsteuergesetz:
              <br />
              [pending registration]
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-3 text-primary-600">
              Responsible for Content (§ 55 Abs. 2 RStV)
            </Typography>
            <Typography variant="smallText">
              Renuir UG (haftungsbeschränkt)
              <br />
              Hönower Wiesenweg 57
              <br />
              10318 Berlin, Germany
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-3 text-primary-600">
              EU Dispute Resolution
            </Typography>
            <Typography variant="smallText" className="space-y-2">
              The European Commission provides a platform for online dispute
              resolution (OS):
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 ml-1"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              <br />
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
