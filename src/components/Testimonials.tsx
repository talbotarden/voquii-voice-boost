import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Rodriguez",
    role: "Owner, Rodriguez Roofing",
    content: "Voquii increased our lead conversions by 47% in the first month. It answers questions at 2am when we're asleep. Best ROI we've ever had.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Elite HVAC",
    content: "We were drowning in phone calls. Now the AI handles 80% of common questions automatically. Our team focuses on closing deals, not answering the same questions all day.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Owner, Thompson Dental",
    content: "Patients love it. They can book appointments at midnight. No more phone tag. Our schedule stays full and our staff is happier.",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    role: "Founder, Bella Salon & Spa",
    content: "Installation took literally 2 minutes. The AI knows our services, pricing, and availability. It's like having a receptionist that never sleeps.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Agency Owner, Park Digital",
    content: "We resell Voquii to all our clients now. Easy white-label setup, great margins, and our clients see results immediately. Win-win-win.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "E-commerce Manager, StyleHub",
    content: "Our bounce rate dropped 35% after adding Voquii. Customers get instant answers about sizing, shipping, returns. Sales are up significantly.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Customers Are Saying
          </h2>
          <p className="text-xl text-muted-foreground">
            Real businesses. Real results. Real ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-2 hover:border-primary/50 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
