import Header from "@/components/Header";
import TotalActivities from "@/components/TotalActivities";

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <TotalActivities />
      </div>
    </div>
  );
};

export default Activities;
