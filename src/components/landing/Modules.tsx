import { moduleDescriptions } from "@/data/mock-data";
import { BrutalistBlock, BrutalistCard } from "@/components/ui/brutalist-card";
import { LearningModule } from "@/types/bakame";

const moduleOrder: LearningModule[] = ["mathematics", "english", "reading", "debate", "general"];

export function Modules() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <BrutalistBlock className="inline-block mb-4 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold">LEARNING MODULES</h2>
          </BrutalistBlock>
          <p className="text-lg max-w-md opacity-70">
            Five subjects aligned with Rwanda's national curriculum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleOrder.map((key, index) => {
            const module = moduleDescriptions[key];
            return (
              <BrutalistCard
                key={key}
                variant={index === 0 ? "inverted" : "default"}
                hover
                className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="text-5xl mb-4">{module.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">
                  {key}
                </div>
                <h3 className="text-2xl font-bold mb-3">{module.title}</h3>
                <p className="opacity-80">{module.description}</p>
              </BrutalistCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
