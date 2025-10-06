import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, Building2 } from "lucide-react";
import training1 from "@/assets/training-1.jpg";
import training2 from "@/assets/training-2.jpg";
import training3 from "@/assets/training-3.jpg";
import training4 from "@/assets/training-4.jpg";
import training5 from "@/assets/training-5.jpg";
import training6 from "@/assets/training-6.jpg";
import training7 from "@/assets/training-7.jpg";

const activities = [
  {
    id: 1,
    title: "Advanced Emergency Response Training",
    image: training1,
    date: "Oct 12, 2025",
    time: "09:00 AM - 05:00 PM",
    state: "Maharashtra",
    district: "Mumbai",
    address: "SDMA Training Center, Bandra East, Mumbai - 400051",
    participants: 45,
    maxCapacity: 50,
    partner: "Maharashtra SDMA",
    type: "Response",
    status: "Completed",
    instructor: "Dr. Rajesh Kumar",
    duration: "8 hours"
  },
  {
    id: 2,
    title: "Earthquake Preparedness and Safety Drill",
    image: training2,
    date: "Oct 15, 2025",
    time: "10:00 AM - 04:00 PM",
    state: "Delhi",
    district: "New Delhi",
    address: "NDMA Training Ground, Safdarjung, New Delhi - 110029",
    participants: 38,
    maxCapacity: 40,
    partner: "NDMA Delhi",
    type: "Preparedness",
    status: "Completed",
    instructor: "Prof. Anita Sharma",
    duration: "6 hours"
  },
  {
    id: 3,
    title: "Flood Response Management Workshop",
    image: training3,
    date: "Oct 18, 2025",
    time: "08:00 AM - 02:00 PM",
    state: "Kerala",
    district: "Kochi",
    address: "Kerala State Disaster Management Authority, Kakkanad, Kochi - 682030",
    participants: 52,
    maxCapacity: 60,
    partner: "Kerala SDMA",
    type: "Response",
    status: "Ongoing",
    instructor: "Col. Ramesh Nair (Retd.)",
    duration: "6 hours"
  },
  {
    id: 4,
    title: "Fire Safety and Rescue Operations",
    image: training4,
    date: "Oct 20, 2025",
    time: "09:30 AM - 05:30 PM",
    state: "Gujarat",
    district: "Ahmedabad",
    address: "Gujarat Fire & Emergency Services, Naranpura, Ahmedabad - 380013",
    participants: 60,
    maxCapacity: 65,
    partner: "Gujarat Fire Services",
    type: "Response",
    status: "Scheduled",
    instructor: "Chief Fire Officer Vikram Patel",
    duration: "8 hours"
  },
  {
    id: 5,
    title: "Medical Emergency Response Training",
    image: training5,
    date: "Oct 22, 2025",
    time: "10:00 AM - 06:00 PM",
    state: "Tamil Nadu",
    district: "Chennai",
    address: "Tamil Nadu Health Emergency Response Center, Anna Nagar, Chennai - 600040",
    participants: 35,
    maxCapacity: 40,
    partner: "TN Health Department",
    type: "Medical",
    status: "Scheduled",
    instructor: "Dr. Meera Krishnan",
    duration: "8 hours"
  },
  {
    id: 6,
    title: "Cyclone Preparedness Workshop",
    image: training6,
    date: "Oct 25, 2025",
    time: "09:00 AM - 03:00 PM",
    state: "Odisha",
    district: "Bhubaneswar",
    address: "Odisha State Disaster Management Authority, Nayapalli, Bhubaneswar - 751012",
    participants: 48,
    maxCapacity: 50,
    partner: "Odisha SDMA",
    type: "Preparedness",
    status: "Scheduled",
    instructor: "Dr. Suresh Mohapatra",
    duration: "6 hours"
  },
  {
    id: 7,
    title: "Landslide Risk Assessment Training",
    image: training7,
    date: "Oct 28, 2025",
    time: "08:30 AM - 04:30 PM",
    state: "Uttarakhand",
    district: "Dehradun",
    address: "Uttarakhand Disaster Mitigation Center, Rajpur Road, Dehradun - 248001",
    participants: 30,
    maxCapacity: 35,
    partner: "Uttarakhand DMC",
    type: "Assessment",
    status: "Scheduled",
    instructor: "Dr. Arvind Singh",
    duration: "8 hours"
  }
];

const TotalActivities = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success text-success-foreground";
      case "Ongoing":
        return "bg-warning text-warning-foreground";
      case "Scheduled":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Total Activities</h2>
          <p className="text-muted-foreground mt-1">Comprehensive overview of all training activities</p>
        </div>
        <Badge variant="outline" className="text-lg px-4 py-2">
          {activities.length} Activities
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <Badge className={`absolute top-3 right-3 ${getStatusColor(activity.status)}`}>
                {activity.status}
              </Badge>
            </div>
            
            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
                  {activity.title}
                </h3>
                <Badge variant="outline" className="mb-3">{activity.type}</Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{activity.date}</p>
                    <p className="text-muted-foreground">{activity.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{activity.district}, {activity.state}</p>
                    <p className="text-muted-foreground text-xs line-clamp-2">{activity.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-semibold">{activity.participants}</span>
                    <span className="text-muted-foreground">/{activity.maxCapacity} participants</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">{activity.partner}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-border space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Instructor:</span>
                  <span className="font-medium text-foreground">{activity.instructor}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium text-foreground">{activity.duration}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TotalActivities;
