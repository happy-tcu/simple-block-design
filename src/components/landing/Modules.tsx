import { moduleDescriptions } from "@/data/mock-data";
import { LearningModule } from "@/types/bakame";
import { Calculator, Languages, BookOpen, MessageSquare, Lightbulb } from "lucide-react";

const moduleOrder: LearningModule[] = ["mathematics", "english", "reading", "debate", "general"];

const moduleIcons: Record<LearningModule, React.ElementType> = {
  mathematics: Calculator,
  english: Languages,
  reading: BookOpen,
  debate: MessageSquare,
  general: Lightbulb,
};

export function Modules() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Learning Modules</h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Five subjects aligned with Rwanda's national curriculum
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleOrder.map((key, index) => {
            const module = moduleDescriptions[key];
            const Icon = moduleIcons[key];
            return (
              <div
                key={key}
                className={`bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1 bg-primary text-primary-foreground border-primary" : ""
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  index === 0 ? "bg-primary-foreground/20" : "bg-primary/10"
                }`}>
                  <Icon className={`h-7 w-7 ${index === 0 ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <span className={`text-xs font-medium uppercase tracking-wider ${
                  index === 0 ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  {key}
                </span>
                <h3 className={`text-xl font-semibold mt-1 mb-3 ${
                  index === 0 ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {module.title}
                </h3>
                <p className={index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {module.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
