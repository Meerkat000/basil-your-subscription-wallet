import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import DashboardPreview from "../components/DashboardPreview";
import WaitlistSection from "../components/WaitlistSection";
import FooterSection from "../components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <DashboardPreview />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
}
