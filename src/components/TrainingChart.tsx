import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", trainings: 45, participants: 1250 },
  { month: "Feb", trainings: 52, participants: 1450 },
  { month: "Mar", trainings: 61, participants: 1680 },
  { month: "Apr", trainings: 48, participants: 1320 },
  { month: "May", trainings: 70, participants: 1950 },
  { month: "Jun", trainings: 58, participants: 1580 },
];

const TrainingChart = () => {
  const [viewType, setViewType] = useState<"trainings" | "participants" | "both">("both");

  return (
    <Card className="p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">Training Activity Trends</h3>
          <p className="text-sm text-muted-foreground mt-1">Monthly trainings and participants overview</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={viewType === "trainings" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewType("trainings")}
          >
            Trainings
          </Button>
          <Button 
            variant={viewType === "participants" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewType("participants")}
          >
            Participants
          </Button>
          <Button 
            variant={viewType === "both" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewType("both")}
          >
            Both
          </Button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend />
          {(viewType === "trainings" || viewType === "both") && (
            <Bar 
              dataKey="trainings" 
              fill="hsl(var(--primary))" 
              radius={[8, 8, 0, 0]}
              name="Trainings Conducted"
            />
          )}
          {(viewType === "participants" || viewType === "both") && (
            <Bar 
              dataKey="participants" 
              fill="hsl(var(--secondary))" 
              radius={[8, 8, 0, 0]}
              name="Total Participants"
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TrainingChart;
