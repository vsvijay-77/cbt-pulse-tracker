import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const trainingLocations = [
  { state: "Maharashtra", trainings: 45, participants: 1250, coords: { x: 35, y: 45 } },
  { state: "Kerala", trainings: 38, participants: 980, coords: { x: 30, y: 70 } },
  { state: "Delhi", trainings: 52, participants: 1450, coords: { x: 45, y: 25 } },
  { state: "Assam", trainings: 28, participants: 720, coords: { x: 75, y: 20 } },
  { state: "Tamil Nadu", trainings: 41, participants: 1120, coords: { x: 38, y: 68 } },
  { state: "Uttar Pradesh", trainings: 55, participants: 1580, coords: { x: 50, y: 30 } },
  { state: "Gujarat", trainings: 33, participants: 890, coords: { x: 28, y: 38 } },
  { state: "West Bengal", trainings: 36, participants: 950, coords: { x: 65, y: 35 } },
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
          <Card className="lg:col-span-2 p-8 shadow-card">
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-2 border-border overflow-hidden">
              {/* Simplified India Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <p className="text-muted-foreground">Interactive GIS map visualization</p>
                  <p className="text-sm text-muted-foreground">
                    Integration with mapping services (Mapbox/Google Maps) for detailed geographic data
                  </p>
                </div>
              </div>
              
              {/* Location Markers */}
              {trainingLocations.map((location) => (
                <div
                  key={location.state}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${location.coords.x}%`,
                    top: `${location.coords.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-primary animate-pulse flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg whitespace-nowrap">
                        <p className="font-semibold text-sm">{location.state}</p>
                        <p className="text-xs text-muted-foreground">{location.trainings} trainings</p>
                        <p className="text-xs text-muted-foreground">{location.participants} participants</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
