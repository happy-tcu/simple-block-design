import { achievements } from "@/data/mock-data";
import { TrendingUp, Star, Flame, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Gamification() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gamification</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay motivated with rewards, levels, and achievements
            </p>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Levels</h3>
                    <p className="text-sm text-muted-foreground">
                      Progress through 10 levels as you master new skills. Each level unlocks harder challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Points</h3>
                    <p className="text-sm text-muted-foreground">
                      Earn points for correct answers, streaks, and completing sessions. Compete on leaderboards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Streaks</h3>
                    <p className="text-sm text-muted-foreground">
                      Build daily learning streaks for bonus points. The longer your streak, the bigger the rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
              <span className="text-muted-foreground">/ Ibihembo</span>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`rounded-xl p-4 shadow-sm transition-all hover:shadow-md ${
                    index % 2 === 0 
                      ? "bg-card border border-border" 
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold">{achievement.name_kinyarwanda}</span>
                        <span className={`text-sm ${index % 2 === 0 ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                          / {achievement.name_english}
                        </span>
                      </div>
                      <p className={`text-sm ${index % 2 === 0 ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                        {achievement.description}
                      </p>
                      <div className="flex gap-3 mt-2">
                        <Badge variant={index % 2 === 0 ? "secondary" : "outline"} className={index % 2 !== 0 ? "border-primary-foreground/30 text-primary-foreground" : ""}>
                          Level {achievement.level_required}+
                        </Badge>
                        <Badge variant={index % 2 === 0 ? "secondary" : "outline"} className={index % 2 !== 0 ? "border-primary-foreground/30 text-primary-foreground" : ""}>
                          {achievement.points_required} pts
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
