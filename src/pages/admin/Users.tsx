import { BrutalistBlock, BrutalistCard, BrutalistBadge, BrutalistButton } from "@/components/ui/brutalist-card";
import { mockStudents, mockTeachers } from "@/data/mock-data";

const allUsers = [
  ...mockStudents.map(s => ({ ...s, type: "student" as const })),
  ...mockTeachers.map(t => ({ ...t, type: "teacher" as const })),
  { id: "a1", phone_number: "+250788999001", role: "admin" as const, type: "admin" as const, preferred_language: "english" as const, created_at: "2024-01-01", updated_at: "2024-01-20" },
];

export default function AdminUsers() {
  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">USERS</h1>
      </BrutalistBlock>

      <div className="space-y-3">
        {allUsers.map((user, index) => (
          <BrutalistCard key={user.id} variant={index % 2 === 0 ? "outline" : "default"} className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 flex items-center justify-center font-bold ${index % 2 === 0 ? "bg-foreground text-background" : "bg-background text-foreground border-2 border-foreground"}`}>
                {user.role[0].toUpperCase()}
              </div>
              <div>
                <div className="font-bold">{user.phone_number}</div>
                <div className="text-xs opacity-70">{user.preferred_language}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BrutalistBadge variant={index % 2 === 0 ? "default" : "inverted"}>{user.role.toUpperCase()}</BrutalistBadge>
              <BrutalistButton variant="outline" size="sm">Edit</BrutalistButton>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
