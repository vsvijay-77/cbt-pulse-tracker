import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Target, Users, MapPin, Calendar, Lightbulb } from "lucide-react";

const Impacts = () => {
  const overallImpact = {
    totalTrainings: 156,
    totalParticipants: 4280,
    averageRating: 8.5,
    completionRate: 87,
    knowledgeGain: 65,
    skillImprovement: 72
  };

  const trainingImpacts = [
    {
      title: "Flood Preparedness Training",
      location: "Kerala",
      participants: 245,
      rating: 9.2,
      knowledgeGain: 78,
      skillImprovement: 82,
      trend: "up",
      impact: "High",
      feedback: "Excellent hands-on exercises and real-world scenarios"
    },
    {
      title: "Earthquake Response Workshop",
      location: "Uttarakhand",
      participants: 180,
      rating: 8.8,
      knowledgeGain: 75,
      skillImprovement: 79,
      trend: "up",
      impact: "High",
      feedback: "Great practical demonstrations and emergency drills"
    },
    {
      title: "Fire Safety Training",
      location: "Maharashtra",
      participants: 320,
      rating: 7.5,
      knowledgeGain: 58,
      skillImprovement: 62,
      trend: "down",
      impact: "Medium",
      feedback: "More practical equipment handling sessions needed"
    },
    {
      title: "Cyclone Preparedness",
      location: "Odisha",
      participants: 210,
      rating: 9.0,
      knowledgeGain: 80,
      skillImprovement: 85,
      trend: "up",
      impact: "High",
      feedback: "Excellent community engagement and simulation exercises"
    },
    {
      title: "Medical Emergency Response",
      location: "Tamil Nadu",
      participants: 195,
      rating: 8.3,
      knowledgeGain: 70,
      skillImprovement: 75,
      trend: "up",
      impact: "High",
      feedback: "More advanced trauma care modules would be beneficial"
    },
    {
      title: "Drought Management",
      location: "Rajasthan",
      participants: 150,
      rating: 7.2,
      knowledgeGain: 55,
      skillImprovement: 58,
      trend: "down",
      impact: "Medium",
      feedback: "Needs more focus on water conservation techniques"
    }
  ];

  const trainingGaps = [
    {
      category: "Geographic Coverage",
      gap: "Limited training in North-Eastern states",
      severity: "High",
      affectedStates: ["Manipur", "Mizoram", "Nagaland", "Tripura"],
      coverage: 23
    },
    {
      category: "Specialized Skills",
      gap: "Insufficient advanced search & rescue training",
      severity: "High",
      affectedAreas: ["Urban disaster response", "Mountain rescue"],
      coverage: 35
    },
    {
      category: "Technology Training",
      gap: "Low adoption of drone & AI-based disaster tools",
      severity: "Medium",
      affectedAreas: ["Aerial surveillance", "Predictive analytics"],
      coverage: 28
    },
    {
      category: "Community Engagement",
      gap: "Low participation from vulnerable communities",
      severity: "High",
      affectedGroups: ["Rural populations", "Elderly", "Disabled"],
      coverage: 42
    },
    {
      category: "Follow-up Training",
      gap: "Lack of refresher courses and skill retention",
      severity: "Medium",
      affectedAreas: ["All disaster types"],
      coverage: 31
    }
  ];

  const recommendations = [
    {
      priority: "Critical",
      title: "Expand North-East Coverage",
      description: "Conduct 15+ training programs in underserved North-Eastern states",
      timeline: "Next 3 months",
      expectedParticipants: 500,
      estimatedImpact: "High",
      resources: ["Regional trainers", "Local language materials", "Mobile training units"]
    },
    {
      priority: "Critical",
      title: "Advanced Search & Rescue Program",
      description: "Develop specialized modules for urban and mountain rescue operations",
      timeline: "Next 6 months",
      expectedParticipants: 300,
      estimatedImpact: "High",
      resources: ["Expert trainers", "Equipment", "Simulation facilities"]
    },
    {
      priority: "High",
      title: "Technology Integration Training",
      description: "Launch programs on drone operations and AI-based disaster prediction",
      timeline: "Next 4 months",
      expectedParticipants: 400,
      estimatedImpact: "High",
      resources: ["Drone equipment", "Software licenses", "Tech specialists"]
    },
    {
      priority: "High",
      title: "Community Outreach Initiative",
      description: "Design accessible programs for vulnerable groups with local partnerships",
      timeline: "Next 3 months",
      expectedParticipants: 800,
      estimatedImpact: "Very High",
      resources: ["Community coordinators", "Translation services", "Accessible venues"]
    },
    {
      priority: "Medium",
      title: "Refresher Course Framework",
      description: "Implement quarterly refresher programs for all training categories",
      timeline: "Ongoing (Start in 2 months)",
      expectedParticipants: 1000,
      estimatedImpact: "Medium",
      resources: ["Online platform", "Regional facilitators", "Assessment tools"]
    },
    {
      priority: "Medium",
      title: "Fire Safety Enhancement",
      description: "Upgrade fire safety training with more equipment handling sessions",
      timeline: "Next 5 months",
      expectedParticipants: 450,
      estimatedImpact: "Medium",
      resources: ["Fire safety equipment", "Practice facilities", "Certified trainers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Training Impact Analysis</h1>
          <p className="text-muted-foreground">Comprehensive overview of training effectiveness, gaps, and strategic recommendations</p>
        </div>

        {/* Overall Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Overall Effectiveness</h3>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{overallImpact.averageRating}/10</div>
            <p className="text-xs text-muted-foreground">Average training rating</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Knowledge Gain</h3>
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{overallImpact.knowledgeGain}%</div>
            <Progress value={overallImpact.knowledgeGain} className="h-2" />
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">Skill Improvement</h3>
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{overallImpact.skillImprovement}%</div>
            <Progress value={overallImpact.skillImprovement} className="h-2" />
          </Card>
        </div>

        {/* Training Impact Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Training Program Impact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainingImpacts.map((training, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{training.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {training.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {training.participants}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {training.trend === "up" ? (
                      <TrendingUp className="h-5 w-5 text-success" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-destructive" />
                    )}
                    <Badge variant={training.impact === "High" ? "default" : "secondary"}>
                      {training.impact}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="font-semibold text-foreground">{training.rating}/10</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Knowledge Gain</span>
                      <span className="font-semibold text-foreground">{training.knowledgeGain}%</span>
                    </div>
                    <Progress value={training.knowledgeGain} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Skill Improvement</span>
                      <span className="font-semibold text-foreground">{training.skillImprovement}%</span>
                    </div>
                    <Progress value={training.skillImprovement} className="h-2" />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-xs text-muted-foreground italic">"{training.feedback}"</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Gaps */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Identified Training Gaps</h2>
          </div>
          <div className="space-y-4">
            {trainingGaps.map((gap, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{gap.category}</h3>
                      <Badge variant={gap.severity === "High" ? "destructive" : "secondary"}>
                        {gap.severity} Priority
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{gap.gap}</p>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Affected: </span>
                      {gap.affectedStates?.join(", ") || gap.affectedAreas?.join(", ") || gap.affectedGroups?.join(", ")}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-destructive mb-1">{gap.coverage}%</div>
                    <div className="text-xs text-muted-foreground">Coverage</div>
                  </div>
                </div>
                <Progress value={gap.coverage} className="h-2" />
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Strategic Recommendations</h2>
          </div>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{rec.title}</h3>
                      <Badge 
                        variant={rec.priority === "Critical" ? "destructive" : rec.priority === "High" ? "default" : "secondary"}
                      >
                        {rec.priority}
                      </Badge>
                      <Badge variant="outline">{rec.estimatedImpact} Impact</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{rec.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium text-foreground">{rec.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Expected:</span>
                        <span className="font-medium text-foreground">{rec.expectedParticipants} participants</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="font-medium text-foreground">{rec.estimatedImpact}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-muted/50">
                      <div className="text-sm font-medium text-foreground mb-2">Required Resources:</div>
                      <div className="flex flex-wrap gap-2">
                        {rec.resources.map((resource, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impacts;