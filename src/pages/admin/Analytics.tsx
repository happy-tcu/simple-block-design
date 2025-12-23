import { BrutalistBlock, BrutalistCard, BrutalistStat } from "@/components/ui/brutalist-card";
import { mockAnalytics, moduleDescriptions } from "@/data/mock-data";
import { LearningModule } from "@/types/bakame";

export default function AdminAnalytics() {
  const modules = Object.keys(mockAnalytics.module_breakdown) as LearningModule[];

  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">ANALYTICS</h1>
      </BrutalistBlock>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <BrutalistCard variant="inverted">
          <BrutalistStat value={mockAnalytics.total_sessions} label="Total Sessions" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value={mockAnalytics.unique_users} label="Unique Users" />
        </BrutalistCard>
        <BrutalistCard variant="inverted">
          <BrutalistStat value={`${mockAnalytics.average_accuracy}%`} label="Accuracy" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value={`${Math.round(mockAnalytics.average_session_duration / 60)}m`} label="Avg Duration" />
        </BrutalistCard>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">MODULE BREAKDOWN</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {modules.map((module, index) => (
            <BrutalistCard key={module} variant={index % 2 === 0 ? "default" : "inverted"} className="text-center">
              <div className="text-3xl mb-2">{moduleDescriptions[module].icon}</div>
              <div className="font-bold text-2xl">{mockAnalytics.module_breakdown[module]}</div>
              <div className="text-xs uppercase opacity-70">{module}</div>
            </BrutalistCard>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">DAILY ACTIVE USERS</h2>
        <BrutalistCard>
          <div className="flex items-end justify-between gap-2 h-48">
            {mockAnalytics.daily_active_users.map((count, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-foreground transition-all hover:bg-muted-foreground"
                  style={{ height: `${(count / Math.max(...mockAnalytics.daily_active_users)) * 150}px` }}
                />
                <span className="text-xs mt-1">{i + 1}</span>
              </div>
            ))}
          </div>
        </BrutalistCard>
      </div>
    </div>
  );
}
