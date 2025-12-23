import { BrutalistBlock, BrutalistCard, BrutalistStat, BrutalistBadge } from "@/components/ui/brutalist-card";
import { mockClassrooms, mockStudents, mockSessions } from "@/data/mock-data";

export default function TeacherOverview() {
  const recentSessions = mockSessions.slice(0, 3);

  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">TEACHER DASHBOARD</h1>
      </BrutalistBlock>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <BrutalistCard>
          <BrutalistStat value={mockClassrooms.length} label="Classrooms" />
        </BrutalistCard>
        <BrutalistCard variant="inverted">
          <BrutalistStat value={mockStudents.length} label="Students" />
        </BrutalistCard>
        <BrutalistCard>
          <BrutalistStat value="78%" label="Avg Accuracy" />
        </BrutalistCard>
        <BrutalistCard variant="inverted">
          <BrutalistStat value={recentSessions.length} label="Recent Sessions" />
        </BrutalistCard>
      </div>

      {/* Classrooms */}
      <div>
        <h2 className="text-xl font-bold mb-4">MY CLASSROOMS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockClassrooms.map((classroom) => (
            <BrutalistCard key={classroom.id} hover>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold">{classroom.name}</h3>
                <BrutalistBadge>{classroom.grade_level}</BrutalistBadge>
              </div>
              <p className="text-sm opacity-70 mb-4">{classroom.subject.toUpperCase()}</p>
              <div className="flex justify-between text-sm">
                <span>{classroom.students.length} students</span>
                <span>Max: {classroom.max_students}</span>
              </div>
            </BrutalistCard>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold mb-4">RECENT STUDENT ACTIVITY</h2>
        <div className="space-y-3">
          {recentSessions.map((session) => (
            <BrutalistCard key={session.id} variant="outline" className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-bold">Student {session.user_id}</span>
                <span className="text-sm opacity-70 ml-4">{session.module.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-4">
                <span>{Math.round((session.correct_answers / session.questions_asked) * 100)}% accuracy</span>
                <BrutalistBadge variant="inverted">Level {session.difficulty_level}</BrutalistBadge>
              </div>
            </BrutalistCard>
          ))}
        </div>
      </div>
    </div>
  );
}
