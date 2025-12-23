import { BrutalistBlock, BrutalistCard, BrutalistStat, BrutalistBadge } from "@/components/ui/brutalist-card";
import { mockAnalytics, mockSessions } from "@/data/mock-data";

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">ADMIN DASHBOARD</h1>
      </BrutalistBlock>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <BrutalistCard variant="inverted">
          <BrutalistStat value={mockAnalytics.total_sessions} label="Total Sessions" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value={mockAnalytics.unique_users} label="Unique Users" />
        </BrutalistCard>
        <BrutalistCard variant="inverted">
          <BrutalistStat value={`${mockAnalytics.average_accuracy}%`} label="Avg Accuracy" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value={`${Math.round(mockAnalytics.average_session_duration / 60)}m`} label="Avg Duration" />
        </BrutalistCard>
      </div>

      {/* Recent Sessions */}
      <div>
        <h2 className="text-xl font-bold mb-4">RECENT SESSIONS</h2>
        <div className="space-y-3">
          {mockSessions.map((session) => (
            <BrutalistCard key={session.id} variant="outline" className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <BrutalistBadge>{session.module.toUpperCase()}</BrutalistBadge>
                <span>User: {session.user_id}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span>{session.correct_answers}/{session.questions_asked} correct</span>
                <span>Level {session.difficulty_level}</span>
                <span>{Math.round(session.session_duration_seconds / 60)}m</span>
              </div>
            </BrutalistCard>
          ))}
        </div>
      </div>
    </div>
  );
}
