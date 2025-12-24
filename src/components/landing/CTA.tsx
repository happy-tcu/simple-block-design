import { Phone, ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Call CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 lg:p-12 text-primary-foreground">
            <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6">
              <Phone className="h-7 w-7" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Learning Now</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md">
              Call our toll-free number from any phone. Available in Kinyarwanda, English, and French.
            </p>
            <a href="tel:+250123456789">
              <Button variant="secondary" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                +250 123 456 789
              </Button>
            </a>
          </div>

          {/* Register CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 lg:p-12">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Are You a Teacher?</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Register to create classrooms, track student progress, and access detailed learning analytics.
            </p>
            <Link to="/register">
              <Button size="lg" className="gap-2">
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
