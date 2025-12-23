import { BrutalistBlock, BrutalistCard, BrutalistStat } from "@/components/ui/brutalist-card";
import { mockAnalytics, moduleDescriptions } from "@/data/mock-data";
import { LearningModule } from "@/types/bakame";

export default function TeacherPerformance() {
  const modules = Object.keys(mockAnalytics.module_breakdown) as LearningModule[];

  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">PERFORMANCE</h1>
      </BrutalistBlock>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <BrutalistCard variant="inverted">
          <BrutalistStat value={`${mockAnalytics.average_accuracy}%`} label="Avg Accuracy" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value={mockAnalytics.total_sessions} label="Total Sessions" />
        </BrutalistCard>
        <BrutalistCard variant="inverted">
          <BrutalistStat value={`${Math.round(mockAnalytics.average_session_duration / 60)}m`} label="Avg Duration" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value={mockAnalytics.unique_users} label="Active Students" />
        </BrutalistCard>
      </div>

      {/* Module Breakdown */}
      <div>
        <h2 className="text-xl font-bold mb-4">MODULE ENGAGEMENT</h2>
        <div className="space-y-4">
          {modules.map((module, index) => {
            const count = mockAnalytics.module_breakdown[module];
            const maxCount = Math.max(...Object.values(mockAnalytics.module_breakdown));
            const percentage = (count / maxCount) * 100;
            
            return (
              <BrutalistCard key={module} variant="outline">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl">{moduleDescriptions[module].icon}</span>
                  <span className="font-bold uppercase flex-1">{module}</span>
                  <span className="font-bold">{count} sessions</span>
                </div>
                <div className="h-4 border-2 border-foreground">
                  <div className="h-full bg-foreground transition-all" style={{ width: `${percentage}%` }} />
                </div>
              </BrutalistCard>
            );
          })}
        </div>
      </div>

      {/* Daily Activity Chart (simplified) */}
      <div>
        <h2 className="text-xl font-bold mb-4">DAILY ACTIVE USERS (LAST 14 DAYS)</h2>
        <BrutalistCard>
          <div className="flex items-end justify-between gap-2 h-40">
            {mockAnalytics.daily_active_users.map((count, i) => (
              <div
                key={i}
                className="flex-1 bg-foreground transition-all hover:bg-muted-foreground"
                style={{ height: `${(count / Math.max(...mockAnalytics.daily_active_users)) * 100}%` }}
                title={`Day ${i + 1}: ${count} users`}
              />
            ))}
          </div>
        </BrutalistCard>
      </div>
    </div>
  );
}
