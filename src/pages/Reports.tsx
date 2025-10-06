import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Calendar, Filter, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const reportTemplates = [
  {
    id: 1,
    title: "Monthly Training Summary",
    description: "Comprehensive overview of all training activities conducted in the selected month",
    category: "summary"
  },
  {
    id: 2,
    title: "State-wise Performance Report",
    description: "Detailed analysis of training coverage and impact by state",
    category: "performance"
  },
  {
    id: 3,
    title: "Partner Organization Report",
    description: "Activity summary for specific partner organizations",
    category: "partner"
  },
  {
    id: 4,
    title: "Thematic Coverage Analysis",
    description: "Analysis of training distribution across different disaster management themes",
    category: "thematic"
  },
  {
    id: 5,
    title: "Quarterly Impact Assessment",
    description: "Comprehensive impact evaluation for quarterly review",
    category: "impact"
  },
  {
    id: 6,
    title: "Geographic Gap Analysis",
    description: "Identification of areas with low training coverage",
    category: "gap"
  },
];

const Reports = () => {
  const [generatedReports, setGeneratedReports] = useState<{ [key: number]: any }>({});
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedState, setSelectedState] = useState("all");

  const handleGenerate = (reportId: number, reportTitle: string) => {
    // Simulate report generation
    const mockData = {
      1: { trainings: 52, participants: 1450, partners: 23, coverage: "87%" },
      2: { trainings: 156, participants: 4280, topState: "Maharashtra", avgScore: "8.5/10" },
      3: { activePartners: 12, trainings: 45, satisfaction: "92%" },
      4: { response: "35%", preparedness: "42%", recovery: "23%" },
      5: { impact: "High", reach: "12,500+", effectiveness: "89%" },
      6: { lowCoverage: 8, recommendations: 15, priority: "High" }
    };

    setGeneratedReports(prev => ({ ...prev, [reportId]: mockData[reportId as keyof typeof mockData] }));
    toast.success(`${reportTitle} generated successfully!`);
  };

  const handleDownload = (reportTitle: string) => {
    toast.success(`Downloading ${reportTitle}...`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Generate comprehensive reports and analyze training impact data
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Report Filters</h3>
          </div>
          
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Time Period</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">State/UT</label>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="All states" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="mh">Maharashtra</SelectItem>
                  <SelectItem value="kl">Kerala</SelectItem>
                  <SelectItem value="dl">Delhi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Partner Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All partners" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Partners</SelectItem>
                  <SelectItem value="sdma">SDMA</SelectItem>
                  <SelectItem value="ati">ATI</SelectItem>
                  <SelectItem value="ngo">NGO</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Theme</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All themes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Themes</SelectItem>
                  <SelectItem value="response">Response</SelectItem>
                  <SelectItem value="preparedness">Preparedness</SelectItem>
                  <SelectItem value="recovery">Recovery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Report Templates */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reportTemplates.map((report) => (
            <Card key={report.id} className="p-6 shadow-card hover:shadow-elegant transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                </div>
              </div>
              
              {generatedReports[report.id] && (
                <div className="mb-4 p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium text-success">Report Generated</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(generatedReports[report.id]).map(([key, value]) => (
                      <div key={key}>
                        <span className="text-muted-foreground capitalize">{key}: </span>
                        <span className="font-semibold text-foreground">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button 
                  className="flex-1 gap-2" 
                  size="sm"
                  onClick={() => handleGenerate(report.id, report.title)}
                >
                  <Calendar className="h-4 w-4" />
                  Generate
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDownload(report.title)}
                  disabled={!generatedReports[report.id]}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <Card className="p-6 mt-8 shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Report Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium text-foreground">September 2025 Monthly Report</p>
                <p className="text-sm text-muted-foreground">Generated on Oct 1, 2025</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium text-foreground">Q2 2025 Impact Assessment</p>
                <p className="text-sm text-muted-foreground">Generated on Jul 15, 2025</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium text-foreground">State-wise Performance - Maharashtra</p>
                <p className="text-sm text-muted-foreground">Generated on Sep 20, 2025</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
