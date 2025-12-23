import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Modules } from "@/components/landing/Modules";
import { Gamification } from "@/components/landing/Gamification";
import { Stats } from "@/components/landing/Stats";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Modules />
      <Gamification />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
