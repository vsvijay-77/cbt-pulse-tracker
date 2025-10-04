import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Building2, Clock, Navigation } from "lucide-react";

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  state: string;
  district: string;
  address: string;
  participants: number;
  maxCapacity: number;
  partner: string;
  trainingType: string;
  status: "confirmed" | "pending" | "registration-open";
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: "1",
    title: "Flood Response & Rescue Operations",
    date: "2025-10-08",
    time: "09:00 AM",
    state: "Kerala",
    district: "Ernakulam",
    address: "State Emergency Operations Centre, Kochi",
    participants: 45,
    maxCapacity: 60,
    partner: "Kerala State Disaster Management Authority",
    trainingType: "Flood Management",
    status: "confirmed"
  },
  {
    id: "2",
    title: "Earthquake Preparedness Workshop",
    date: "2025-10-12",
    time: "10:30 AM",
    state: "Uttarakhand",
    district: "Dehradun",
    address: "Disaster Management Training Center, Dehradun",
    participants: 38,
    maxCapacity: 50,
    partner: "Uttarakhand Disaster Management Authority",
    trainingType: "Earthquake Preparedness",
    status: "registration-open"
  },
  {
    id: "3",
    title: "Cyclone Warning System Training",
    date: "2025-10-15",
    time: "11:00 AM",
    state: "Odisha",
    district: "Bhubaneswar",
    address: "Odisha State Disaster Management Authority HQ",
    participants: 52,
    maxCapacity: 55,
    partner: "Odisha State Disaster Management Authority",
    trainingType: "Cyclone Management",
    status: "confirmed"
  },
  {
    id: "4",
    title: "Forest Fire Prevention & Control",
    date: "2025-10-18",
    time: "09:30 AM",
    state: "Himachal Pradesh",
    district: "Shimla",
    address: "HP Forest Department Training Centre",
    participants: 30,
    maxCapacity: 40,
    partner: "HP Forest Department",
    trainingType: "Fire Management",
    status: "pending"
  },
  {
    id: "5",
    title: "Urban Disaster Risk Reduction",
    date: "2025-10-22",
    time: "10:00 AM",
    state: "Maharashtra",
    district: "Mumbai",
    address: "BMC Disaster Management Cell, Dadar",
    participants: 65,
    maxCapacity: 70,
    partner: "Brihanmumbai Municipal Corporation",
    trainingType: "Urban Disaster Management",
    status: "registration-open"
  },
  {
    id: "6",
    title: "Landslide Risk Assessment Training",
    date: "2025-10-25",
    time: "09:00 AM",
    state: "Sikkim",
    district: "Gangtok",
    address: "Sikkim State Disaster Management Authority",
    participants: 28,
    maxCapacity: 35,
    partner: "Sikkim SDMA",
    trainingType: "Landslide Management",
    status: "confirmed"
  }
];

const UpcomingEvents = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-success/10 text-success border-success/20";
      case "registration-open":
        return "bg-primary/10 text-primary border-primary/20";
      case "pending":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "registration-open":
        return "Registration Open";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Upcoming Training Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{event.title}</h3>
                  <Badge className={getStatusColor(event.status)}>
                    {getStatusText(event.status)}
                  </Badge>
                </div>
                <Badge variant="outline" className="text-xs self-start">
                  {event.trainingType}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</p>
                    <p className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{event.state}, {event.district}</p>
                    <p className="text-muted-foreground text-xs">{event.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-foreground">
                      <span className="font-semibold">{event.participants}</span>
                      <span className="text-muted-foreground"> / {event.maxCapacity} participants</span>
                    </p>
                    <div className="w-full bg-secondary rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all" 
                        style={{ width: `${(event.participants / event.maxCapacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium text-xs">Partner Organization</p>
                    <p className="text-muted-foreground text-xs">{event.partner}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
