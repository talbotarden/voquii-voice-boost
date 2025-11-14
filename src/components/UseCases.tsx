import { Card } from "@/components/ui/card";
import { Home, Wrench, Wind, Scissors, Stethoscope, Building2, ShoppingCart, Users } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Roofers",
    description: "Pre-qualify leads, book inspections, answer pricing questions 24/7.",
  },
  {
    icon: Wrench,
    title: "Plumbers",
    description: "Handle emergency calls, schedule appointments, provide instant quotes.",
  },
  {
    icon: Wind,
    title: "HVAC Companies",
    description: "Qualify heating/cooling needs, book service calls, reduce phone volume.",
  },
  {
    icon: Scissors,
    title: "Salons & Spas",
    description: "Book appointments, answer service questions, upsell packages automatically.",
  },
  {
    icon: Stethoscope,
    title: "Dentists & Medical",
    description: "Schedule appointments, verify insurance, answer common patient questions.",
  },
  {
    icon: Building2,
    title: "Real Estate Agents",
    description: "Qualify buyers, schedule showings, provide property details instantly.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Product recommendations, sizing help, order tracking, instant support.",
  },
  {
    icon: Users,
    title: "Agencies (Resell It)",
    description: "White-label Voquii and sell to your clients as a premium add-on service.",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built For Every Business
          </h2>
          <p className="text-xl text-muted-foreground">
            From service pros to e-commerce to agencies—Voquii converts visitors across every industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all border-2 hover:border-secondary/50 text-center group"
            >
              <div className="bg-gradient-to-br from-gradient-start/10 to-gradient-end/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                <useCase.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
