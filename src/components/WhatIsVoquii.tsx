import { Card } from "@/components/ui/card";
import { MessageCircle, Zap, Globe, TrendingUp } from "lucide-react";

export const WhatIsVoquii = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Is Voquii Web Voice AI?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your website is losing customers every day because it's static. Visitors have questions, 
            but there's no one to answer them instantly. They leave. They bounce. They never come back.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="p-8 border-2 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">The Problem</h3>
                <p className="text-lg text-muted-foreground">
                  Customers leave because websites are static. Forms are ignored. Live chat is slow. 
                  Phone calls go unanswered. You're losing money while you sleep.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-secondary/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="bg-secondary/10 p-4 rounded-lg">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">The Solution</h3>
                <p className="text-lg text-muted-foreground">
                  Voquii adds a natural-sounding AI voice widget to your website. Visitors can ask questions 
                  and get instant answers—through voice or text. No waiting. No forms. No friction.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-accent/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="bg-accent/10 p-4 rounded-lg">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Works Anywhere</h3>
                <p className="text-lg text-muted-foreground">
                  Install on any website with a simple JavaScript snippet. WordPress? There's a dedicated plugin. 
                  Shopify, ClickFunnels, Webflow, custom sites—it works everywhere.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-primary/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">What It Does</h3>
                <ul className="text-lg text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Answers frequently asked questions instantly</li>
                  <li>Captures and qualifies leads automatically</li>
                  <li>Books appointments without human intervention</li>
                  <li>Provides product recommendations based on needs</li>
                  <li>Reduces bounce rate dramatically</li>
                  <li>Works 24/7—even when you're sleeping</li>
                  <li>Real-time analytics and lead capture dashboard</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
