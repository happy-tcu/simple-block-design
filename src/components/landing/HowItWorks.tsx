import { BrutalistBlock, BrutalistCard } from "@/components/ui/brutalist-card";

const steps = [
  {
    number: "01",
    title: "CALL",
    description: "Dial our toll-free number from any phone. No smartphone or internet required.",
    icon: "📞",
  },
  {
    number: "02",
    title: "SPEAK",
    description: "Answer questions using your voice. BAKAME understands Kinyarwanda, English, and French.",
    icon: "🗣️",
  },
  {
    number: "03",
    title: "LEARN",
    description: "Receive instant feedback and adaptive lessons tailored to your level.",
    icon: "📖",
  },
  {
    number: "04",
    title: "GROW",
    description: "Earn points, unlock achievements, and track your progress over time.",
    icon: "🌱",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <BrutalistBlock className="mb-12 md:mb-16 inline-block">
          <h2 className="text-3xl md:text-5xl font-bold">HOW IT WORKS</h2>
        </BrutalistBlock>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <BrutalistCard
              key={step.number}
              variant={index % 2 === 0 ? "default" : "inverted"}
              className="border-t-0 first:border-t-2 md:border-t-2 md:border-l-0 md:first:border-l-2"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <div className="text-sm font-bold opacity-50 mb-2">{step.number}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="opacity-80">{step.description}</p>
            </BrutalistCard>
          ))}
        </div>
      </div>
    </section>
  );
}
