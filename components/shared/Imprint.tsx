import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { Building2, Mail, FileText, Receipt, User, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Imprint | Renuir",
  description: "Legal imprint information for Renuir UG",
};

const imprintSections = [
  {
    id: "information",
    icon: Building2,
    title: "Information according to § 5 TMG",
    content: (
      <>
        <strong>Renuir UG (haftungsbeschränkt)</strong>
        <br />
        Hönower Wiesenweg 57
        <br />
        10318 Berlin
        <br />
        Germany
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact",
    content: (
      <>
        Email:{" "}
        <a 
          href="mailto:info@renuir.com" 
          className="text-primary-600 hover:text-primary-700 underline font-semibold"
        >
          info@renuir.com
        </a>
      </>
    ),
  },
  {
    id: "register",
    icon: FileText,
    title: "Register Entry",
    content: (
      <>
        Registered in the Commercial Register (Handelsregister)
        <br />
        Register Court: Amtsgericht Berlin-Charlottenburg
        <br />
        Registration Number: HRB [pending]
      </>
    ),
  },
  {
    id: "vat",
    icon: Receipt,
    title: "VAT ID",
    content: (
      <>
        VAT identification number according to § 27a Umsatzsteuergesetz:
        <br />
        [pending registration]
      </>
    ),
  },
  {
    id: "content",
    icon: User,
    title: "Responsible for Content (§ 55 Abs. 2 RStV)",
    content: (
      <>
        Renuir UG (haftungsbeschränkt)
        <br />
        Hönower Wiesenweg 57
        <br />
        10318 Berlin, Germany
      </>
    ),
  },
  {
    id: "dispute",
    icon: Scale,
    title: "EU Dispute Resolution",
    content: (
      <>
        The European Commission provides a platform for online dispute resolution (OS):{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 underline font-semibold break-all"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        <br />
        <br />
        We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
      </>
    ),
  },
];

export default function ImprintPage() {
  return (
    <div className="w-full">
      <div className="mb-6 sm:mb-8">
        <Typography variant="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-3 sm:mb-4">
          Imprint
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {imprintSections.map(({ id, icon: Icon, title, content }) => (
          <Card 
            key={id}
            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <Typography variant="h3" className="text-lg sm:text-xl md:text-2xl font-bold text-primary-600 mb-4">
                    {title}
                  </Typography>
                </div>
              </div>
              <Typography variant="smallText" className="text-sm sm:text-base text-dark-700 leading-relaxed">
                {content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
