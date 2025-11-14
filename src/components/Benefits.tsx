import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Zap, Clock, Brain, Globe2, PhoneOff, BarChart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost Conversions",
    description: "Visitors talk instead of bounce. Voice engagement converts 3-5x better than static forms.",
  },
  {
    icon: DollarSign,
    title: "Reduce Support Costs",
    description: "AI handles common questions automatically. Cut support tickets by 60-80%.",
  },
  {
    icon: Zap,
    title: "Instant Installation",
    description: "Copy/paste script or use WordPress plugin. Live in under 60 seconds.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a lead again. Your AI assistant works while you sleep.",
  },
  {
    icon: Brain,
    title: "Fully Trainable",
    description: "Add your FAQs, services, pricing, policies. The AI learns your business.",
  },
  {
    icon: Globe2,
    title: "Multi-Language Support",
    description: "Serve global customers in their native language. Automatic translation included.",
  },
  {
    icon: PhoneOff,
    title: "No Phone Needed",
    description: "Works entirely online. No IVR, no phone system, no complexity.",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description: "Track conversations, leads, and conversions. Know what's working instantly.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Businesses Choose Voquii
          </h2>
          <p className="text-xl text-muted-foreground">
            More than just a chatbot. This is revenue-generating AI that pays for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/50 group"
            >
              <div className="bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
