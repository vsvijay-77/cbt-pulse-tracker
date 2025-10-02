import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import TrainingChart from "@/components/TrainingChart";
import RecentTrainings from "@/components/RecentTrainings";
import { Users, GraduationCap, Building2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-disaster.jpg";

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
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-Time Training Monitoring System
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Comprehensive platform for tracking disaster management capacity building initiatives across India
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <p className="text-sm text-white/80">Active Partners</p>
                <p className="text-2xl font-bold text-white">156</p>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <p className="text-sm text-white/80">States Covered</p>
                <p className="text-2xl font-bold text-white">28</p>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20">
                <p className="text-sm text-white/80">YTD Trainings</p>
                <p className="text-2xl font-bold text-white">334</p>
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

      {/* Charts and Recent Activities */}
      <section className="container pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <TrainingChart />
          <RecentTrainings />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
