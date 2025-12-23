import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BrutalistButton, BrutalistBlock } from "@/components/ui/brutalist-card";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b-2 border-foreground p-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">BAKAME</div>
        <nav className="flex gap-4">
          <Link to="/login">
            <BrutalistButton variant="outline" size="sm">Login</BrutalistButton>
          </Link>
          <Link to="/register">
            <BrutalistButton size="sm">Register</BrutalistButton>
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left Block - Black */}
        <BrutalistBlock className="flex flex-col justify-center p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            LEARN BY<br />VOICE.<br />GROW BY<br />DOING.
          </h1>
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-md">
            Voice-based educational platform designed for Rwandan students. 
            No smartphone needed. Just call and learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+250123456789" className="inline-block">
              <BrutalistButton variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call to Learn
              </BrutalistButton>
            </a>
            <Link to="/register">
              <BrutalistButton variant="outline" size="lg" className="w-full sm:w-auto border-background text-background hover:bg-background hover:text-foreground">
                Get Started
              </BrutalistButton>
            </Link>
          </div>
        </BrutalistBlock>

        {/* Right Block - White with grid */}
        <div className="bg-background border-l-2 border-foreground p-8 md:p-16 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-foreground p-6 aspect-square flex flex-col justify-end">
              <span className="text-5xl mb-2">📚</span>
              <span className="font-bold">5 MODULES</span>
            </div>
            <div className="bg-foreground text-background p-6 aspect-square flex flex-col justify-end">
              <span className="text-5xl mb-2">🎯</span>
              <span className="font-bold">ADAPTIVE</span>
            </div>
            <div className="bg-foreground text-background p-6 aspect-square flex flex-col justify-end">
              <span className="text-5xl mb-2">📞</span>
              <span className="font-bold">VOICE-FIRST</span>
            </div>
            <div className="border-2 border-foreground p-6 aspect-square flex flex-col justify-end">
              <span className="text-5xl mb-2">🏆</span>
              <span className="font-bold">GAMIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
