import Header from "@/components/Header";
import Map from "@/components/Map";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trainingLocations = [
  { 
    state: "Maharashtra", 
    district: "Mumbai", 
    address: "NDMA Regional Center, Bandra Kurla Complex, Mumbai - 400051",
    trainings: 45, 
    participants: 1250,
    lastTraining: "15 Dec 2024",
    trainingTypes: ["Fire Safety", "Flood Management", "Earthquake Preparedness"],
    partnerOrg: "Maharashtra State Disaster Management Authority",
    coords: { lat: 19.0760, lng: 72.8777 }
  },
  { 
    state: "Kerala", 
    district: "Thiruvananthapuram", 
    address: "State Emergency Operations Center, Vikas Bhavan, Thiruvananthapuram - 695033",
    trainings: 38, 
    participants: 980,
    lastTraining: "22 Dec 2024",
    trainingTypes: ["Flood Response", "Landslide Management", "Cyclone Preparedness"],
    partnerOrg: "Kerala State Disaster Management Authority",
    coords: { lat: 8.5241, lng: 76.9366 }
  },
  { 
    state: "Delhi", 
    district: "New Delhi", 
    address: "NDMA Headquarters, A-1 Safdarjung Enclave, New Delhi - 110029",
    trainings: 52, 
    participants: 1450,
    lastTraining: "28 Dec 2024",
    trainingTypes: ["Urban Disaster Management", "Industrial Safety", "Emergency Response"],
    partnerOrg: "Delhi Disaster Management Authority",
    coords: { lat: 28.7041, lng: 77.1025 }
  },
  { 
    state: "Assam", 
    district: "Guwahati", 
    address: "State Disaster Management Authority Office, Khanapara, Guwahati - 781022",
    trainings: 28, 
    participants: 720,
    lastTraining: "10 Dec 2024",
    trainingTypes: ["Flood Management", "Erosion Control", "Community Awareness"],
    partnerOrg: "Assam State Disaster Management Authority",
    coords: { lat: 26.1445, lng: 91.7362 }
  },
  { 
    state: "Tamil Nadu", 
    district: "Chennai", 
    address: "Revenue Department Complex, Chepauk, Chennai - 600005",
    trainings: 41, 
    participants: 1120,
    lastTraining: "18 Dec 2024",
    trainingTypes: ["Cyclone Response", "Coastal Disaster Management", "Heat Wave Safety"],
    partnerOrg: "Tamil Nadu State Disaster Management Authority",
    coords: { lat: 13.0827, lng: 80.2707 }
  },
  { 
    state: "Uttar Pradesh", 
    district: "Lucknow", 
    address: "Relief Commissioner Office, Lucknow - 226001",
    trainings: 55, 
    participants: 1580,
    lastTraining: "25 Dec 2024",
    trainingTypes: ["Flood Control", "Fire Safety", "Medical Emergency Response"],
    partnerOrg: "UP State Disaster Management Authority",
    coords: { lat: 26.8467, lng: 80.9462 }
  },
  { 
    state: "Gujarat", 
    district: "Gandhinagar", 
    address: "State Emergency Operations Centre, Block 11, Gandhinagar - 382010",
    trainings: 33, 
    participants: 890,
    lastTraining: "12 Dec 2024",
    trainingTypes: ["Earthquake Safety", "Industrial Hazard Management", "Cyclone Preparedness"],
    partnerOrg: "Gujarat State Disaster Management Authority",
    coords: { lat: 23.2156, lng: 72.6369 }
  },
  { 
    state: "West Bengal", 
    district: "Kolkata", 
    address: "State Secretariat Complex, Nabanna, Howrah - 711102",
    trainings: 36, 
    participants: 950,
    lastTraining: "20 Dec 2024",
    trainingTypes: ["Cyclone Management", "Urban Flooding", "Community Resilience"],
    partnerOrg: "West Bengal State Disaster Management Authority",
    coords: { lat: 22.5726, lng: 88.3639 }
  },
];

const MapView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Geographic Training Coverage</h1>
          <p className="text-muted-foreground">
            Interactive visualization of training activities across India
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map Visualization */}
          <Card className="lg:col-span-2 p-6 shadow-card">
            <Map locations={trainingLocations} />
          </Card>

          {/* State Statistics */}
          <Card className="p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">State-wise Summary</h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {trainingLocations.map((location) => (
                <div 
                  key={location.state}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{location.state}</h4>
                    <Badge variant="secondary">{location.trainings}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {location.participants} participants trained
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Coverage Statistics */}
        <div className="grid gap-6 md:grid-cols-3 mt-6">
          <Card className="p-6 shadow-card">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">States Covered</h4>
            <p className="text-3xl font-bold text-foreground">28</p>
            <p className="text-sm text-success mt-1">100% coverage</p>
          </Card>
          <Card className="p-6 shadow-card">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Districts Reached</h4>
            <p className="text-3xl font-bold text-foreground">245</p>
            <p className="text-sm text-muted-foreground mt-1">Across India</p>
          </Card>
          <Card className="p-6 shadow-card">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Urban/Rural Mix</h4>
            <p className="text-3xl font-bold text-foreground">65/35</p>
            <p className="text-sm text-muted-foreground mt-1">Urban to Rural ratio</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapView;
