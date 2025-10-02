import Header from "@/components/Header";
import Map from "@/components/Map";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trainingLocations = [
  { state: "Maharashtra", trainings: 45, participants: 1250, coords: { lat: 19.7515, lng: 75.7139 } },
  { state: "Kerala", trainings: 38, participants: 980, coords: { lat: 10.8505, lng: 76.2711 } },
  { state: "Delhi", trainings: 52, participants: 1450, coords: { lat: 28.7041, lng: 77.1025 } },
  { state: "Assam", trainings: 28, participants: 720, coords: { lat: 26.2006, lng: 92.9376 } },
  { state: "Tamil Nadu", trainings: 41, participants: 1120, coords: { lat: 11.1271, lng: 78.6569 } },
  { state: "Uttar Pradesh", trainings: 55, participants: 1580, coords: { lat: 26.8467, lng: 80.9462 } },
  { state: "Gujarat", trainings: 33, participants: 890, coords: { lat: 22.2587, lng: 71.1924 } },
  { state: "West Bengal", trainings: 36, participants: 950, coords: { lat: 22.9868, lng: 87.8550 } },
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
