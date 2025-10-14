import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, BarChart3, MapPin, FileText, CalendarDays, Target } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">NDMA Training Monitor</h1>
            <p className="text-xs text-muted-foreground">Capacity Building & Training Division</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-2">
          <Link to="/">
            <Button 
              variant={isActive("/") ? "default" : "ghost"} 
              size="sm"
              className="gap-2"
            >
              <Shield className="h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link to="/activities">
            <Button 
              variant={isActive("/activities") ? "default" : "ghost"} 
              size="sm"
              className="gap-2"
            >
              <CalendarDays className="h-4 w-4" />
              Activities
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button 
              variant={isActive("/dashboard") ? "default" : "ghost"} 
              size="sm"
              className="gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/impacts">
            <Button 
              variant={isActive("/impacts") ? "default" : "ghost"} 
              size="sm"
              className="gap-2"
            >
              <Target className="h-4 w-4" />
              Impacts
            </Button>
          </Link>
          <Link to="/map">
            <Button 
              variant={isActive("/map") ? "default" : "ghost"} 
              size="sm"
              className="gap-2"
            >
              <MapPin className="h-4 w-4" />
              Map View
            </Button>
          </Link>
          <Link to="/reports">
            <Button 
              variant={isActive("/reports") ? "default" : "ghost"} 
              size="sm"
              className="gap-2"
            >
              <FileText className="h-4 w-4" />
              Reports
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
