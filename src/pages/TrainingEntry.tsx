import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const TrainingEntry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Training data submitted successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Enter Training Data</h1>
            <p className="text-muted-foreground">
              Submit information about conducted or planned training activities
            </p>
          </div>

          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="trainingTitle">Training Title</Label>
                  <Input 
                    id="trainingTitle" 
                    placeholder="e.g., Disaster Response Coordination"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partner">Partner Organization</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sdma">SDMA</SelectItem>
                      <SelectItem value="ati">ATI</SelectItem>
                      <SelectItem value="ngo">NGO</SelectItem>
                      <SelectItem value="nidm">NIDM</SelectItem>
                      <SelectItem value="lbsnaa">LBSNAA</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State/UT</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mh">Maharashtra</SelectItem>
                      <SelectItem value="kl">Kerala</SelectItem>
                      <SelectItem value="dl">Delhi</SelectItem>
                      <SelectItem value="as">Assam</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                      <SelectItem value="tn">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Input 
                    id="district" 
                    placeholder="Enter district"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="theme">Training Theme</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="response">Disaster Response</SelectItem>
                      <SelectItem value="preparedness">Preparedness</SelectItem>
                      <SelectItem value="recovery">Recovery & Rehabilitation</SelectItem>
                      <SelectItem value="mitigation">Mitigation</SelectItem>
                      <SelectItem value="first-aid">First Aid & Medical</SelectItem>
                      <SelectItem value="coordination">Coordination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input 
                    id="participants" 
                    type="number"
                    placeholder="e.g., 85"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input 
                    id="startDate" 
                    type="date"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input 
                    id="endDate" 
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Training Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Provide details about the training objectives, methodology, and outcomes"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="outcomes">Key Outcomes</Label>
                <Textarea 
                  id="outcomes"
                  placeholder="List key achievements and learning outcomes from the training"
                  rows={3}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="bg-gradient-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Training Data"}
                </Button>
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrainingEntry;
