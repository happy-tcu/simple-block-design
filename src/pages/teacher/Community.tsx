import { BrutalistBlock, BrutalistCard, BrutalistButton, BrutalistBadge } from "@/components/ui/brutalist-card";
import { Plus, Users } from "lucide-react";

const learningGroups = [
  { id: "1", name: "P4 Math Champions", members: 8, description: "Students excelling in mathematics" },
  { id: "2", name: "English Learners", members: 12, description: "Focused on English vocabulary" },
  { id: "3", name: "Reading Circle", members: 6, description: "Weekly reading practice group" },
];

export default function TeacherCommunity() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BrutalistBlock className="inline-block">
          <h1 className="text-2xl md:text-3xl font-bold">COMMUNITY</h1>
        </BrutalistBlock>
        <BrutalistButton>
          <Plus className="h-5 w-5 mr-2" />
          New Group
        </BrutalistButton>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">LEARNING GROUPS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningGroups.map((group, index) => (
            <BrutalistCard key={group.id} variant={index % 2 === 0 ? "default" : "inverted"} hover>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center border-2 ${index % 2 === 0 ? "border-foreground" : "border-background"}`}>
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">{group.name}</h3>
                  <BrutalistBadge variant={index % 2 === 0 ? "default" : "inverted"}>{group.members} members</BrutalistBadge>
                </div>
              </div>
              <p className="text-sm opacity-70">{group.description}</p>
            </BrutalistCard>
          ))}
        </div>
      </div>

      <BrutalistCard variant="outline">
        <h3 className="font-bold mb-2">💡 PEER LEARNING</h3>
        <p className="opacity-70">
          Learning groups allow students to connect and learn together. Create groups based on skill level, 
          interests, or learning goals to foster collaboration.
        </p>
      </BrutalistCard>
    </div>
  );
}
