import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import TrainingChart from "@/components/TrainingChart";
import RecentTrainings from "@/components/RecentTrainings";
import UpcomingEvents from "@/components/UpcomingEvents";
import { Users, GraduationCap, Building2, MapPin, TrendingUp, Award, Target, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-disaster.jpg";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        </div>
        
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
              <Award className="h-4 w-4 text-white" />
              <span className="text-sm text-white font-medium">National Disaster Management Authority</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real-Time Training Monitoring Dashboard
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Comprehensive insights into disaster management capacity building initiatives across India
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="px-8 py-6 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-elegant">
                <Building2 className="h-8 w-8 text-white mb-3 mx-auto" />
                <p className="text-sm text-white/80 mb-2">Active Partners</p>
                <p className="text-4xl font-bold text-white">156</p>
              </div>
              <div className="px-8 py-6 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-elegant">
                <MapPin className="h-8 w-8 text-white mb-3 mx-auto" />
                <p className="text-sm text-white/80 mb-2">States Covered</p>
                <p className="text-4xl font-bold text-white">28</p>
              </div>
              <div className="px-8 py-6 rounded-xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-elegant">
                <TrendingUp className="h-8 w-8 text-white mb-3 mx-auto" />
                <p className="text-sm text-white/80 mb-2">YTD Trainings</p>
                <p className="text-4xl font-bold text-white">334</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Trainings"
            value="334"
            change="+12% from last month"
            icon={GraduationCap}
            trend="up"
          />
          <StatsCard
            title="Total Participants"
            value="9,285"
            change="+8% from last month"
            icon={Users}
            trend="up"
          />
          <StatsCard
            title="Partner Organizations"
            value="156"
            change="+5 new partners"
            icon={Building2}
            trend="up"
          />
          <StatsCard
            title="Geographic Coverage"
            value="28"
            change="States & UTs"
            icon={MapPin}
            trend="neutral"
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="container pb-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 shadow-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Target</p>
                <p className="text-2xl font-bold text-foreground">60 Trainings</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold text-foreground">87%</span>
              </div>
              <Progress value={87} className="h-2" />
              <p className="text-xs text-muted-foreground">52 trainings completed this month</p>
            </div>
          </Card>
          
          <Card className="p-6 shadow-card bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Participants</p>
                <p className="text-2xl font-bold text-foreground">28 / Training</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Capacity</span>
                <span className="font-semibold text-foreground">93%</span>
              </div>
              <Progress value={93} className="h-2" />
              <p className="text-xs text-muted-foreground">Above average attendance rate</p>
            </div>
          </Card>
          
          <Card className="p-6 shadow-card bg-gradient-to-br from-success/5 to-success/10 border-success/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-success/10">
                <Calendar className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                <p className="text-2xl font-bold text-foreground">18 Scheduled</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Next 30 Days</span>
                <span className="font-semibold text-foreground">+45%</span>
              </div>
              <Progress value={72} className="h-2" />
              <p className="text-xs text-muted-foreground">Higher activity expected</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Charts and Recent Activities */}
      <section className="container pb-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TrainingChart />
          </div>
          <div className="lg:col-span-1">
            <RecentTrainings />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container pb-12">
        <UpcomingEvents />
      </section>
    </div>
  );
};

export default Dashboard;
