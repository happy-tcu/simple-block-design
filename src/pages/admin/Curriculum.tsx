import { BrutalistBlock, BrutalistCard, BrutalistBadge } from "@/components/ui/brutalist-card";
import { moduleDescriptions } from "@/data/mock-data";
import { GradeLevel, LearningModule } from "@/types/bakame";

const grades: GradeLevel[] = ["P1", "P2", "P3", "P4", "P5", "P6", "S1", "S2", "S3"];
const modules: LearningModule[] = ["mathematics", "english", "reading", "debate", "general"];

export default function AdminCurriculum() {
  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">CURRICULUM</h1>
      </BrutalistBlock>

      <p className="opacity-70">Curriculum standards aligned with Rwanda's national education framework.</p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-2 border-foreground p-4 text-left font-bold">GRADE</th>
              {modules.map(m => (
                <th key={m} className="border-2 border-foreground p-4 text-center">
                  <span className="text-2xl">{moduleDescriptions[m].icon}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grades.map((grade, i) => (
              <tr key={grade} className={i % 2 === 0 ? "bg-secondary" : ""}>
                <td className="border-2 border-foreground p-4 font-bold">{grade}</td>
                {modules.map(m => (
                  <td key={m} className="border-2 border-foreground p-4 text-center">
                    <BrutalistBadge>✓</BrutalistBadge>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
