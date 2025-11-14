import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0.00",
    period: "per monthly",
    features: [
      "20 minutes per month",
      "Web voice widget",
      "Basic knowledge base",
      "1 domain",
      "Email support",
      "Hard limit (no overage)",
    ],
    cta: "Select Plan",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$29.00",
    period: "per monthly",
    features: [
      "100 minutes per month",
      "10 minute grace period",
      "Web voice widget",
      "Advanced knowledge base",
      "Up to 3 domains",
      "Priority email support",
      "Call analytics",
      "Custom widget styling",
    ],
    cta: "Select Plan",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79.00",
    period: "per monthly",
    features: [
      "300 minutes per month",
      "30 minute grace period",
      "Web voice widget",
      "Premium knowledge base",
      "Up to 10 domains",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "API access",
    ],
    cta: "Select Plan",
    highlighted: true,
  },
  {
    name: "Business",
    price: "$149.00",
    period: "per monthly",
    features: [
      "500 minutes per month",
      "50 minute grace period",
      "Web voice widget",
      "Premium knowledge base",
      "Unlimited domains",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
      "API access",
      "Dedicated support",
    ],
    cta: "Select Plan",
    highlighted: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free. Scale as you grow. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 relative ${
                plan.highlighted
                  ? "border-primary border-2 shadow-xl scale-105"
                  : "border-2"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.period}</p>
              </div>

              <div className="space-y-3 mb-8">
                <p className="font-semibold text-sm mb-3">Includes:</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include natural-sounding AI voice, lead capture, and real-time analytics.
          </p>
        </div>
      </div>
    </section>
  );
};
