import { Phone, MessageCircle, BookOpen, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Call",
    description: "Dial our toll-free number from any phone. No smartphone or internet required.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Speak",
    description: "Answer questions using your voice. BAKAME understands Kinyarwanda, English, and French.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Learn",
    description: "Receive instant feedback and adaptive lessons tailored to your level.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Grow",
    description: "Earn points, unlock achievements, and track your progress over time.",
    icon: TrendingUp,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learning made accessible for everyone, anywhere, with just a phone call
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
