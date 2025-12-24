import { Phone, ArrowRight, BookOpen, Target, PhoneCall, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">BAKAME</div>
          <nav className="flex gap-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Phone className="h-4 w-4" />
                Voice-First Learning Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Learn by Voice.
                <span className="text-primary"> Grow by Doing.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Voice-based educational platform designed for Rwandan students. 
                No smartphone needed. Just call and learn.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+250123456789">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Phone className="h-5 w-5" />
                    Call to Learn
                  </Button>
                </a>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">5 Modules</h3>
                <p className="text-sm text-muted-foreground">Comprehensive curriculum</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Adaptive</h3>
                <p className="text-sm text-muted-foreground">Personalized learning</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Voice-First</h3>
                <p className="text-sm text-muted-foreground">No smartphone needed</p>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Gamified</h3>
                <p className="text-sm text-muted-foreground">Earn rewards & badges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
