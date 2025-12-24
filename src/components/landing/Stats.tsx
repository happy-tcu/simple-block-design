const stats = [
  { value: "10K+", label: "Students Learning" },
  { value: "50K+", label: "Sessions Completed" },
  { value: "78%", label: "Average Accuracy" },
  { value: "5", label: "Learning Modules" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
