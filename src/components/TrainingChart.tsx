import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "Jan", trainings: 45, participants: 1250 },
  { month: "Feb", trainings: 52, participants: 1450 },
  { month: "Mar", trainings: 61, participants: 1680 },
  { month: "Apr", trainings: 48, participants: 1320 },
  { month: "May", trainings: 70, participants: 1950 },
  { month: "Jun", trainings: 58, participants: 1580 },
];

const TrainingChart = () => {
  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Training Activity Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
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
          <Bar 
            dataKey="trainings" 
            fill="hsl(var(--primary))" 
            radius={[8, 8, 0, 0]}
            name="Trainings Conducted"
          />
          <Bar 
            dataKey="participants" 
            fill="hsl(var(--secondary))" 
            radius={[8, 8, 0, 0]}
            name="Total Participants"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TrainingChart;
