import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BrutalistButton, BrutalistBlock, BrutalistCard } from "@/components/ui/brutalist-card";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Call CTA */}
          <BrutalistBlock className="p-8 md:p-12 lg:p-16">
            <div className="text-6xl mb-6">📞</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">START LEARNING NOW</h2>
            <p className="opacity-80 mb-8 max-w-md">
              Call our toll-free number from any phone. Available in Kinyarwanda, English, and French.
            </p>
            <a href="tel:+250123456789">
              <BrutalistButton variant="secondary" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                +250 123 456 789
              </BrutalistButton>
            </a>
          </BrutalistBlock>

          {/* Register CTA */}
          <BrutalistCard variant="outline" className="p-8 md:p-12 lg:p-16 border-l-0 md:border-l-2">
            <div className="text-6xl mb-6">🎓</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ARE YOU A TEACHER?</h2>
            <p className="opacity-80 mb-8 max-w-md">
              Register to create classrooms, track student progress, and access detailed learning analytics.
            </p>
            <Link to="/register">
              <BrutalistButton size="lg">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </BrutalistButton>
            </Link>
          </BrutalistCard>
        </div>
      </div>
    </section>
  );
}
