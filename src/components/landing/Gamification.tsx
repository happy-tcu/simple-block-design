import { achievements } from "@/data/mock-data";
import { BrutalistBlock, BrutalistCard, BrutalistBadge } from "@/components/ui/brutalist-card";

export function Gamification() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div>
            <BrutalistBlock className="inline-block mb-8">
              <h2 className="text-3xl md:text-5xl font-bold">GAMIFICATION</h2>
            </BrutalistBlock>

            <div className="space-y-6">
              <BrutalistCard variant="outline">
                <h3 className="text-xl font-bold mb-2">📊 LEVELS</h3>
                <p className="opacity-80">
                  Progress through 10 levels as you master new skills. Each level unlocks harder challenges 
                  and new content.
                </p>
              </BrutalistCard>

              <BrutalistCard variant="outline">
                <h3 className="text-xl font-bold mb-2">⭐ POINTS</h3>
                <p className="opacity-80">
                  Earn points for correct answers, streaks, and completing sessions. Compete on leaderboards 
                  with classmates.
                </p>
              </BrutalistCard>

              <BrutalistCard variant="outline">
                <h3 className="text-xl font-bold mb-2">🔥 STREAKS</h3>
                <p className="opacity-80">
                  Build daily learning streaks for bonus points. The longer your streak, the bigger the rewards.
                </p>
              </BrutalistCard>
            </div>
          </div>

          {/* Right - Achievements */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BrutalistBadge>ACHIEVEMENTS</BrutalistBadge>
              <span className="opacity-50">/ Ibihembo</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <BrutalistCard
                  key={achievement.id}
                  variant={index % 2 === 0 ? "default" : "inverted"}
                  className="flex items-start gap-4"
                >
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold">{achievement.name_kinyarwanda}</span>
                      <span className="text-sm opacity-50">/ {achievement.name_english}</span>
                    </div>
                    <p className="text-sm opacity-80">{achievement.description}</p>
                    <div className="flex gap-4 mt-2 text-xs">
                      <span>Level {achievement.level_required}+</span>
                      <span>{achievement.points_required} pts</span>
                    </div>
                  </div>
                </BrutalistCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
