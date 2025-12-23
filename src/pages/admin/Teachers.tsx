import { BrutalistBlock, BrutalistCard, BrutalistBadge, BrutalistButton } from "@/components/ui/brutalist-card";
import { mockTeachers, mockClassrooms } from "@/data/mock-data";

export default function AdminTeachers() {
  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">TEACHERS</h1>
      </BrutalistBlock>

      <div className="space-y-4">
        {mockTeachers.map((teacher, index) => (
          <BrutalistCard key={teacher.id} variant={index % 2 === 0 ? "default" : "inverted"}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center font-bold text-xl ${index % 2 === 0 ? "bg-foreground text-background" : "bg-background text-foreground"}`}>
                  👩‍🏫
                </div>
                <div>
                  <div className="font-bold">{teacher.phone_number}</div>
                  <BrutalistBadge variant={index % 2 === 0 ? "default" : "inverted"}>{teacher.preferred_language}</BrutalistBadge>
                </div>
              </div>
              <BrutalistButton variant={index % 2 === 0 ? "primary" : "secondary"} size="sm">View</BrutalistButton>
            </div>
            <div className="text-sm">
              <span className="opacity-70">Classrooms: </span>
              <span className="font-bold">{mockClassrooms.filter(c => c.teacher_id === teacher.id).length}</span>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
