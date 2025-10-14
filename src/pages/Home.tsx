import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Target, Users, TrendingUp, MapPin, FileText, Database, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-disaster.jpg";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        <div className="relative z-10 container text-center text-white space-y-6 px-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            NDMA Training Monitor
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Real-Time Monitoring System for Disaster Management Trainings
          </p>
          <p className="text-lg max-w-2xl mx-auto text-white/90">
            Empowering India's disaster preparedness through comprehensive capacity building and training coordination
          </p>
          <div className="flex gap-4 justify-center flex-wrap pt-4">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="gap-2">
                <BarChart3 className="h-5 w-5" />
                View Dashboard
              </Button>
            </Link>
            <Link to="/training-entry">
              <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Database className="h-5 w-5" />
                Submit Training Data
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Platform Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why This Platform?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Capacity Building and Training (CBT) Division of NDMA coordinates training initiatives 
              across India for government officers, disaster responders, community volunteers, and institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                The Challenge
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• No centralized platform to track training activities in real time</li>
                <li>• Fragmented data across multiple partners and states</li>
                <li>• Inconsistent reporting mechanisms</li>
                <li>• Delays in impact assessment and gap identification</li>
                <li>• Limited visibility into geographic and thematic coverage</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-card">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                The Solution
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Real-time data capture from diverse training partners</li>
                <li>• Comprehensive monitoring across geography and themes</li>
                <li>• Interactive GIS mapping for visual analysis</li>
                <li>• Automated analytics and impact tracking</li>
                <li>• Standardized reporting and data insights</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools for monitoring, analyzing, and reporting disaster management training initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Real-Time Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Live analytics and insights on training activities across India
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Entry Portal</h3>
              <p className="text-sm text-muted-foreground">
                Easy submission of training data by SDMAs, ATIs, and partner NGOs
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">GIS Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Interactive maps showing geographic distribution of trainings
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Report Generation</h3>
              <p className="text-sm text-muted-foreground">
                Automated reports for impact tracking and performance analysis
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strengthening disaster resilience through coordinated capacity building
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-muted-foreground">Personnel Trained</p>
            </div>

            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">28+</h3>
              <p className="text-muted-foreground">States Covered</p>
            </div>

            <div className="text-center">
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">350+</h3>
              <p className="text-muted-foreground">Training Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Quick Links</h2>
            <p className="text-lg text-white/90">
              Access key features and resources
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/dashboard">
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <BarChart3 className="h-10 w-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Dashboard</h3>
                <p className="text-sm text-white/80">View analytics and insights</p>
              </Card>
            </Link>

            <Link to="/training-entry">
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <Database className="h-10 w-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Enter Training</h3>
                <p className="text-sm text-white/80">Submit training data</p>
              </Card>
            </Link>

            <Link to="/map">
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <MapPin className="h-10 w-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Map View</h3>
                <p className="text-sm text-white/80">Geographic visualization</p>
              </Card>
            </Link>

            <Link to="/reports">
              <Card className="p-6 bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <FileText className="h-10 w-10 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Reports</h3>
                <p className="text-sm text-white/80">Generate and download reports</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-6 text-center text-muted-foreground">
          <p className="mb-2">© 2025 National Disaster Management Authority (NDMA)</p>
          <p className="text-sm">Capacity Building & Training Division</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
