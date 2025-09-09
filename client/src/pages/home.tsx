import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { HowItWorks } from "@/components/how-it-works";
import { AgentLocator } from "@/components/agent-locator";
import { MobileAppSection } from "@/components/mobile-app-section";
import { TrustSecurity } from "@/components/trust-security";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <HowItWorks />
        <AgentLocator />
        <MobileAppSection />
        <TrustSecurity />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
