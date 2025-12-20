import Nav from "@/components/navbar/Nav";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="">
        <Nav />

        <main>{children}</main>
      </div>

      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </main>
  );
}
