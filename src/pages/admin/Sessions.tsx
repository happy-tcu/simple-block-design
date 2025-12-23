import { BrutalistBlock, BrutalistCard, BrutalistBadge } from "@/components/ui/brutalist-card";
import { mockSessions } from "@/data/mock-data";

export default function AdminSessions() {
  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">SESSIONS</h1>
      </BrutalistBlock>

      <div className="space-y-4">
        {mockSessions.map((session, index) => (
          <BrutalistCard key={session.id} variant={index % 2 === 0 ? "default" : "inverted"}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold">Session {session.id}</span>
                  <BrutalistBadge variant={index % 2 === 0 ? "default" : "inverted"}>{session.module.toUpperCase()}</BrutalistBadge>
                </div>
                <div className="text-sm opacity-70">User: {session.user_id}</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{Math.round((session.correct_answers / session.questions_asked) * 100)}%</div>
                <div className="text-xs opacity-70">Accuracy</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center text-sm">
              <div>
                <div className="font-bold">{session.questions_asked}</div>
                <div className="text-xs opacity-70">Questions</div>
              </div>
              <div>
                <div className="font-bold">{session.correct_answers}</div>
                <div className="text-xs opacity-70">Correct</div>
              </div>
              <div>
                <div className="font-bold">{session.difficulty_level}</div>
                <div className="text-xs opacity-70">Level</div>
              </div>
              <div>
                <div className="font-bold">{Math.round(session.session_duration_seconds / 60)}m</div>
                <div className="text-xs opacity-70">Duration</div>
              </div>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
