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
import training8 from "@/assets/training-8.jpg";
import training9 from "@/assets/training-9.jpg";
import training10 from "@/assets/training-10.jpg";
import training11 from "@/assets/training-11.jpg";
import training12 from "@/assets/training-12.jpg";
import training13 from "@/assets/training-13.jpg";
import training14 from "@/assets/training-14.jpg";
import training15 from "@/assets/training-15.jpg";
import training16 from "@/assets/training-16.jpg";
import training17 from "@/assets/training-17.jpg";
import training18 from "@/assets/training-18.jpg";
import training19 from "@/assets/training-19.jpg";
import training20 from "@/assets/training-20.jpg";

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
  },
  {
    id: 8,
    title: "Search and Rescue Operations",
    image: training8,
    date: "Oct 30, 2025",
    time: "07:00 AM - 05:00 PM",
    state: "Himachal Pradesh",
    district: "Shimla",
    address: "HP Disaster Management Center, Chhota Shimla, Shimla - 171002",
    participants: 42,
    maxCapacity: 45,
    partner: "HP Disaster Management",
    type: "Response",
    status: "Scheduled",
    instructor: "Maj. Arun Thakur (Retd.)",
    duration: "10 hours"
  },
  {
    id: 9,
    title: "Chemical Hazard Response Training",
    image: training9,
    date: "Nov 2, 2025",
    time: "09:00 AM - 04:00 PM",
    state: "West Bengal",
    district: "Kolkata",
    address: "WB Industrial Safety Training Center, Salt Lake, Kolkata - 700091",
    participants: 28,
    maxCapacity: 30,
    partner: "WB Industrial Safety",
    type: "Hazmat",
    status: "Scheduled",
    instructor: "Dr. Sourav Banerjee",
    duration: "7 hours"
  },
  {
    id: 10,
    title: "Community Disaster Awareness Program",
    image: training10,
    date: "Nov 5, 2025",
    time: "10:00 AM - 02:00 PM",
    state: "Rajasthan",
    district: "Jaipur",
    address: "Rajasthan SDMA Community Center, Vaishali Nagar, Jaipur - 302021",
    participants: 80,
    maxCapacity: 100,
    partner: "Rajasthan SDMA",
    type: "Awareness",
    status: "Scheduled",
    instructor: "Smt. Kavita Rathore",
    duration: "4 hours"
  },
  {
    id: 11,
    title: "Urban Search and Rescue Training",
    image: training11,
    date: "Nov 8, 2025",
    time: "08:00 AM - 06:00 PM",
    state: "Karnataka",
    district: "Bangalore",
    address: "Karnataka Fire & Emergency Services, Jayanagar, Bangalore - 560041",
    participants: 55,
    maxCapacity: 60,
    partner: "Karnataka Fire Services",
    type: "Response",
    status: "Scheduled",
    instructor: "Chief Officer Prakash Rao",
    duration: "10 hours"
  },
  {
    id: 12,
    title: "Tsunami Preparedness Drill",
    image: training12,
    date: "Nov 10, 2025",
    time: "06:00 AM - 12:00 PM",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    address: "AP Coastal Security Training Center, Beach Road, Visakhapatnam - 530002",
    participants: 65,
    maxCapacity: 70,
    partner: "AP Coastal Security",
    type: "Preparedness",
    status: "Scheduled",
    instructor: "Cdr. Vijay Kumar (Retd.)",
    duration: "6 hours"
  },
  {
    id: 13,
    title: "Industrial Safety and Hazard Management",
    image: training13,
    date: "Nov 12, 2025",
    time: "09:00 AM - 05:00 PM",
    state: "Haryana",
    district: "Gurugram",
    address: "Haryana Industrial Training Institute, Sector 37, Gurugram - 122001",
    participants: 40,
    maxCapacity: 45,
    partner: "Haryana ITI",
    type: "Industrial",
    status: "Scheduled",
    instructor: "Er. Sandeep Malik",
    duration: "8 hours"
  },
  {
    id: 14,
    title: "Drought Management and Water Conservation",
    image: training14,
    date: "Nov 15, 2025",
    time: "10:00 AM - 04:00 PM",
    state: "Maharashtra",
    district: "Nagpur",
    address: "Maharashtra Agricultural Training Center, Wardha Road, Nagpur - 440015",
    participants: 50,
    maxCapacity: 55,
    partner: "Maharashtra Agriculture",
    type: "Environmental",
    status: "Scheduled",
    instructor: "Dr. Ramesh Deshmukh",
    duration: "6 hours"
  },
  {
    id: 15,
    title: "Aviation Emergency Response",
    image: training15,
    date: "Nov 18, 2025",
    time: "08:00 AM - 02:00 PM",
    state: "Delhi",
    district: "New Delhi",
    address: "Indira Gandhi International Airport, Emergency Response Unit, Delhi - 110037",
    participants: 32,
    maxCapacity: 35,
    partner: "AAI Delhi",
    type: "Aviation",
    status: "Scheduled",
    instructor: "Wing Cdr. Ashok Verma (Retd.)",
    duration: "6 hours"
  },
  {
    id: 16,
    title: "Nuclear Emergency Preparedness",
    image: training16,
    date: "Nov 20, 2025",
    time: "09:00 AM - 05:00 PM",
    state: "Tamil Nadu",
    district: "Kalpakkam",
    address: "Nuclear Power Corporation Training Facility, Kalpakkam - 603102",
    participants: 25,
    maxCapacity: 30,
    partner: "NPCIL Tamil Nadu",
    type: "Nuclear",
    status: "Scheduled",
    instructor: "Dr. Krishnamurthy Iyer",
    duration: "8 hours"
  },
  {
    id: 17,
    title: "School Safety and Emergency Drill",
    image: training17,
    date: "Nov 22, 2025",
    time: "09:00 AM - 01:00 PM",
    state: "Uttar Pradesh",
    district: "Lucknow",
    address: "UP Education Directorate, Hazratganj, Lucknow - 226001",
    participants: 120,
    maxCapacity: 150,
    partner: "UP Education Department",
    type: "Education",
    status: "Scheduled",
    instructor: "Prof. Neeta Gupta",
    duration: "4 hours"
  },
  {
    id: 18,
    title: "Dam Safety and Inspection Training",
    image: training18,
    date: "Nov 25, 2025",
    time: "08:00 AM - 04:00 PM",
    state: "Madhya Pradesh",
    district: "Indore",
    address: "MP Water Resources Department, Bhawarkua, Indore - 452001",
    participants: 35,
    maxCapacity: 40,
    partner: "MP Water Resources",
    type: "Infrastructure",
    status: "Scheduled",
    instructor: "Er. Manoj Tiwari",
    duration: "8 hours"
  },
  {
    id: 19,
    title: "Wildlife Emergency Response",
    image: training19,
    date: "Nov 28, 2025",
    time: "07:00 AM - 01:00 PM",
    state: "Assam",
    district: "Kaziranga",
    address: "Assam Forest Department, Kaziranga National Park - 785609",
    participants: 45,
    maxCapacity: 50,
    partner: "Assam Forest Department",
    type: "Wildlife",
    status: "Scheduled",
    instructor: "Dr. Bhaskar Gogoi",
    duration: "6 hours"
  },
  {
    id: 20,
    title: "Crisis Communication and Media Management",
    image: training20,
    date: "Nov 30, 2025",
    time: "10:00 AM - 04:00 PM",
    state: "Punjab",
    district: "Chandigarh",
    address: "Punjab SDMA Media Center, Sector 17, Chandigarh - 160017",
    participants: 40,
    maxCapacity: 45,
    partner: "Punjab SDMA",
    type: "Communication",
    status: "Scheduled",
    instructor: "Shri Gurpreet Singh",
    duration: "6 hours"
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
