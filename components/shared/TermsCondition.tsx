import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Renuir",
  description: "Terms and Conditions for using Renuir's services",
};

export default function TermsPage() {
  return (
    <>
      <Typography variant="h2" className="mb-4 text-primary-600">
        Terms & Conditions
      </Typography>

      <Typography variant="lead" className="mb-8 italic">
        Last updated: December 10, 2025
      </Typography>

      <Alert className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Please read these terms carefully before using our Service.
        </AlertDescription>
      </Alert>

      <div className="prose prose-blue max-w-none space-y-6">
        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              1. Introduction
            </Typography>
            <Typography variant="smallText">
              Welcome to Renuir. These Terms and Conditions (&quot;Terms&quot;)
              govern your use of our website and services (collectively, the
              &quot;Service&quot;). By accessing or using the Service, you agree
              to be bound by these Terms. If you do not agree to these Terms,
              please do not use our Service.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              2. Eligibility
            </Typography>
            <Typography variant="smallText">
              You must be at least 16 years of age to use the Service. By using
              the Service, you represent and warrant that you meet this age
              requirement and have the legal capacity to enter into these Terms.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              3. Account Registration
            </Typography>
            <Typography variant="smallText">
              Some features of the Service may require you to create an account.
              You agree to provide accurate, current, and complete information
              during registration and to update such information as necessary.
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              4. Use of Service
            </Typography>
            <Typography variant="smallText">
              Renuir provides a platform for reporting and matching lost and
              found items. You agree to use the Service only for lawful purposes
              and in accordance with these Terms. You must not:
            </Typography>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Submit false reports or claim items that do not belong to you
              </li>
              <li>Use the Service to facilitate illegal activities</li>
              <li>Impersonate any person or entity</li>
              <li>Upload malicious software or content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service or servers</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Typography variant="h3" className="mb-4 text-primary-600">
              5. Contact Us
            </Typography>
            <Typography variant="smallText" className="space-y-2">
              If you have any questions about these Terms, please contact us at:
              <br />
              <br />
              <Typography className="italics text-primary-800">
                Email: legal@renuir.com
              </Typography>
              Address: Renuir UG (haftungsbeschränkt), Hönower Wiesenweg 57,
              10318 Berlin, Germany
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
