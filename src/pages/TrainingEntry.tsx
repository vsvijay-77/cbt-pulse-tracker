import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const trainingSchema = z.object({
  trainingTitle: z.string().min(1, "Training title is required").max(200),
  partner: z.string().min(1, "Partner organization is required"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required").max(100),
  theme: z.string().min(1, "Training theme is required"),
  participants: z.coerce.number().min(1, "At least 1 participant is required").max(10000),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().min(10, "Description must be at least 10 characters").max(2000),
  outcomes: z.string().max(2000).optional().or(z.literal("")),
});

type TrainingFormData = z.infer<typeof trainingSchema>;

const TrainingEntry = () => {
  const navigate = useNavigate();
  const form = useForm<TrainingFormData>({
    resolver: zodResolver(trainingSchema),
    defaultValues: {
      trainingTitle: "",
      partner: "",
      state: "",
      district: "",
      theme: "",
      participants: 0,
      startDate: "",
      endDate: "",
      description: "",
      outcomes: "",
    },
  });

  const onSubmit = async (data: TrainingFormData) => {
    try {
      const existingTrainings = JSON.parse(localStorage.getItem("trainings") || "[]");
      
      const newTraining = {
        id: Date.now().toString(),
        ...data,
        submittedAt: new Date().toISOString(),
        status: "Completed",
      };
      
      existingTrainings.push(newTraining);
      localStorage.setItem("trainings", JSON.stringify(existingTrainings));
      
      toast.success("Training data submitted successfully!");
      form.reset();
      
      setTimeout(() => {
        navigate("/activities");
      }, 1500);
    } catch (error) {
      toast.error("Failed to submit training data. Please try again.");
    }
  };

  const handleSaveDraft = () => {
    toast.info("Draft saved locally");
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="trainingTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Training Title</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Disaster Response Coordination" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="partner"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Partner Organization</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select partner" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="SDMA">SDMA</SelectItem>
                            <SelectItem value="ATI">ATI</SelectItem>
                            <SelectItem value="NGO">NGO</SelectItem>
                            <SelectItem value="NIDM">NIDM</SelectItem>
                            <SelectItem value="LBSNAA">LBSNAA</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State/UT</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                            <SelectItem value="Kerala">Kerala</SelectItem>
                            <SelectItem value="Delhi">Delhi</SelectItem>
                            <SelectItem value="Assam">Assam</SelectItem>
                            <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                            <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter district" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="theme"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Training Theme</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select theme" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Disaster Response">Disaster Response</SelectItem>
                            <SelectItem value="Preparedness">Preparedness</SelectItem>
                            <SelectItem value="Recovery & Rehabilitation">Recovery & Rehabilitation</SelectItem>
                            <SelectItem value="Mitigation">Mitigation</SelectItem>
                            <SelectItem value="First Aid & Medical">First Aid & Medical</SelectItem>
                            <SelectItem value="Coordination">Coordination</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="participants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Participants</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 85" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Training Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Provide details about the training objectives, methodology, and outcomes"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="outcomes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Outcomes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List key achievements and learning outcomes from the training"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="submit" 
                    className="bg-gradient-primary"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Training Data"}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleSaveDraft}>
                    Save as Draft
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrainingEntry;
