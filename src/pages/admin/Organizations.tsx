import { BrutalistBlock, BrutalistCard, BrutalistBadge, BrutalistButton } from "@/components/ui/brutalist-card";
import { mockOrganizations } from "@/data/mock-data";
import { Plus } from "lucide-react";

export default function AdminOrganizations() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BrutalistBlock className="inline-block">
          <h1 className="text-2xl md:text-3xl font-bold">ORGANIZATIONS</h1>
        </BrutalistBlock>
        <BrutalistButton><Plus className="h-5 w-5 mr-2" />Add Organization</BrutalistButton>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {mockOrganizations.map((org, index) => (
          <BrutalistCard key={org.id} variant={index % 2 === 0 ? "default" : "inverted"} hover>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{org.name}</h3>
                <BrutalistBadge variant={index % 2 === 0 ? "default" : "inverted"} className="mt-2">{org.type.toUpperCase()}</BrutalistBadge>
              </div>
              <div className="text-3xl">{org.type === "school" ? "🏫" : org.type === "ngo" ? "🤝" : "🏛️"}</div>
            </div>
            <div className="text-sm">
              <span className="opacity-70">Teachers: </span>
              <span className="font-bold">{org.teachers.length}</span>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
