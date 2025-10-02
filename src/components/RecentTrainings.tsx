import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const recentTrainings = [
  {
    id: 1,
    title: "Disaster Response Coordination",
    location: "Maharashtra",
    date: "2025-09-28",
    participants: 85,
    partner: "SDMA Maharashtra",
    status: "completed"
  },
  {
    id: 2,
    title: "Community Disaster Preparedness",
    location: "Kerala",
    date: "2025-09-25",
    participants: 120,
    partner: "ATI Kerala",
    status: "completed"
  },
  {
    id: 3,
    title: "Emergency Medical Response",
    location: "Delhi",
    date: "2025-09-30",
    participants: 65,
    partner: "LBSNAA",
    status: "ongoing"
  },
  {
    id: 4,
    title: "Flood Risk Management",
    location: "Assam",
    date: "2025-10-02",
    participants: 95,
    partner: "SDMA Assam",
    status: "ongoing"
  },
];

const RecentTrainings = () => {
  return (
    <Card className="p-6 shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Training Activities</h3>
      <div className="space-y-4">
        {recentTrainings.map((training) => (
          <div 
            key={training.id}
            className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-foreground">{training.title}</h4>
              <Badge 
                variant={training.status === "completed" ? "default" : "secondary"}
                className="capitalize"
              >
                {training.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{training.partner}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {training.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(training.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {training.participants} participants
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentTrainings;
