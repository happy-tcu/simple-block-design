import { BrutalistBlock, BrutalistCard, BrutalistButton } from "@/components/ui/brutalist-card";
import { Download, FileSpreadsheet, FileText, Database } from "lucide-react";

const exportOptions = [
  { id: "users", title: "Users", description: "Export all user data", icon: FileSpreadsheet },
  { id: "sessions", title: "Sessions", description: "Export learning session logs", icon: Database },
  { id: "analytics", title: "Analytics Report", description: "Export analytics summary", icon: FileText },
  { id: "full", title: "Full Export", description: "Export all platform data", icon: Download },
];

export default function AdminExport() {
  const handleExport = (type: string) => {
    console.log("Exporting:", type);
    // Would trigger CSV download
  };

  return (
    <div className="space-y-8">
      <BrutalistBlock className="inline-block">
        <h1 className="text-2xl md:text-3xl font-bold">EXPORT</h1>
      </BrutalistBlock>

      <p className="opacity-70">Export platform data as CSV files for external analysis.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {exportOptions.map((option, index) => (
          <BrutalistCard key={option.id} variant={index % 2 === 0 ? "default" : "inverted"} hover>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 flex items-center justify-center border-2 ${index % 2 === 0 ? "border-foreground" : "border-background"}`}>
                <option.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{option.title}</h3>
                <p className="text-sm opacity-70 mb-4">{option.description}</p>
                <BrutalistButton 
                  variant={index % 2 === 0 ? "primary" : "secondary"} 
                  size="sm"
                  onClick={() => handleExport(option.id)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </BrutalistButton>
              </div>
            </div>
          </BrutalistCard>
        ))}
      </div>
    </div>
  );
}
