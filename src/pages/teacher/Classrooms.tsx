import { BrutalistBlock, BrutalistCard, BrutalistButton, BrutalistBadge, BrutalistInput } from "@/components/ui/brutalist-card";
import { mockClassrooms } from "@/data/mock-data";
import { Plus } from "lucide-react";

export default function TeacherClassrooms() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BrutalistBlock className="inline-block">
          <h1 className="text-2xl md:text-3xl font-bold">CLASSROOMS</h1>
        </BrutalistBlock>
        <BrutalistButton>
          <Plus className="h-5 w-5 mr-2" />
          New Classroom
        </BrutalistButton>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClassrooms.map((classroom, index) => (
          <BrutalistCard key={classroom.id} variant={index % 2 === 0 ? "default" : "inverted"} hover>
            <div className="flex justify-between items-start mb-4">
              <BrutalistBadge variant={index % 2 === 0 ? "default" : "inverted"}>{classroom.grade_level}</BrutalistBadge>
              <span className="text-sm opacity-70">{classroom.subject.toUpperCase()}</span>
            </div>
            <h3 className="text-xl font-bold mb-4">{classroom.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Students</span>
                <span className="font-bold">{classroom.students.length} / {classroom.max_students}</span>
              </div>
              <div className="h-2 border-2 border-current">
                <div 
                  className={index % 2 === 0 ? "h-full bg-foreground" : "h-full bg-background"}
                  style={{ width: `${(classroom.students.length / classroom.max_students) * 100}%` }}
                />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t-2 border-current">
              <BrutalistButton variant={index % 2 === 0 ? "primary" : "secondary"} size="sm" className="w-full">
                View Details
              </BrutalistButton>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
