import { BrutalistBlock, BrutalistCard, BrutalistBadge } from "@/components/ui/brutalist-card";
import { mockStudents } from "@/data/mock-data";

export default function TeacherStudents() {
  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">STUDENTS</h1>
      </BrutalistBlock>

      <div className="space-y-4">
        {mockStudents.map((student, index) => (
          <BrutalistCard key={student.id} variant={index % 2 === 0 ? "outline" : "default"} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center font-bold text-xl">
                {student.phone_number.slice(-2)}
              </div>
              <div>
                <div className="font-bold">{student.phone_number}</div>
                <div className="text-sm opacity-70">Grade {student.grade_level}</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-center">
                <div className="font-bold text-xl">{student.current_level}</div>
                <div className="text-xs opacity-70">Level</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">{student.total_points}</div>
                <div className="text-xs opacity-70">Points</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">{student.streak_days}🔥</div>
                <div className="text-xs opacity-70">Streak</div>
              </div>
              <BrutalistBadge>{student.preferred_language}</BrutalistBadge>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
