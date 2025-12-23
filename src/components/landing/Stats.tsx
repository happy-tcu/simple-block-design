import { BrutalistBlock, BrutalistStat } from "@/components/ui/brutalist-card";

const stats = [
  { value: "10K+", label: "Students Learning" },
  { value: "50K+", label: "Sessions Completed" },
  { value: "78%", label: "Average Accuracy" },
  { value: "5", label: "Learning Modules" },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <BrutalistBlock className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <BrutalistStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </BrutalistBlock>
      </div>
    </section>
  );
}
