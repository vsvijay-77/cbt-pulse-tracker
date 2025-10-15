import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { activities } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log(`Analyzing ${activities.length} activities for summary generation`);

    // Prepare activities data for analysis
    const activitiesData = activities.map((a: any) => ({
      title: a.title,
      type: a.type,
      status: a.status,
      state: a.state,
      district: a.district,
      participants: a.participants,
      maxCapacity: a.maxCapacity,
      date: a.date,
      duration: a.duration,
      partner: a.partner
    }));

    const prompt = `Analyze the following ${activities.length} NDMA training activities and provide:

1. A comprehensive summary of all activities (2-3 paragraphs)
2. A readiness score (0-100) based on:
   - Training completion rate
   - Geographic coverage
   - Capacity utilization
   - Diversity of training types
3. Impact assessment covering:
   - Overall reach and effectiveness
   - Geographic distribution analysis
   - Training type diversity impact
   - Resource utilization efficiency
   - Key strengths and areas for improvement

Activities data:
${JSON.stringify(activitiesData, null, 2)}

Provide the response in the following JSON format:
{
  "summary": "detailed summary text",
  "readinessScore": number (0-100),
  "readinessAnalysis": "explanation of the readiness score",
  "impactAssessment": {
    "overallReach": "analysis text",
    "geographicCoverage": "analysis text",
    "trainingDiversity": "analysis text",
    "resourceUtilization": "analysis text",
    "strengths": ["strength 1", "strength 2", ...],
    "improvements": ["improvement 1", "improvement 2", ...]
  }
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are an expert disaster management analyst specializing in training program evaluation. Provide detailed, data-driven insights."
          },
          {
            role: "user",
            content: prompt
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from AI");
    }

    // Parse the JSON response from the AI
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not extract JSON from AI response");
    }

    const analysisResult = JSON.parse(jsonMatch[0]);
    console.log("Successfully generated activities summary");

    return new Response(
      JSON.stringify(analysisResult),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in generate-activities-summary:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
