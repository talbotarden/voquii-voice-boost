import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

export const CTAFooter = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/20 via-gradient-mid/20 to-gradient-end/20" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>Start Free Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Stop Losing Customers.
            <span className="block bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Start Converting Automatically.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses using AI voice to boost conversions, reduce support costs, 
            and work smarter—not harder.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              Start Free Plan—No Credit Card
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
              Book a Demo Call
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-xl text-primary">✓</span>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-primary">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-primary">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl text-primary">✓</span>
              <span>14-day money back</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-24 pt-12 border-t relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Voquii" className="h-8" />
            <p className="text-sm text-muted-foreground">
              © 2024 Voquii. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </section>
  );
};
