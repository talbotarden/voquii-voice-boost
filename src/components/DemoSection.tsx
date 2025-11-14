import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, Mic } from "lucide-react";

export const DemoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Voquii In Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Try it yourself. Ask any question using voice or text and see how fast the AI responds.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-12 border-2">
          <div className="aspect-video bg-gradient-to-br from-gradient-start/20 via-gradient-mid/20 to-gradient-end/20 rounded-lg flex items-center justify-center mb-8 relative overflow-hidden">
            {/* Simulated demo UI */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="bg-background/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-md">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/20 p-4 rounded-full animate-pulse">
                      <Mic className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Ready to Talk?</h3>
                  <p className="text-muted-foreground mb-6">
                    Click the button below to start a conversation with our AI voice assistant
                  </p>
                  <Button size="lg" className="w-full">
                    <Play className="mr-2" />
                    Start Demo Conversation
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-secondary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                <Mic className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Voice or Text</h4>
              <p className="text-sm text-muted-foreground">
                Ask questions naturally using your voice or by typing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 p-3 rounded-lg w-fit mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Instant Responses</h4>
              <p className="text-sm text-muted-foreground">
                Get answers in under 2 seconds—no waiting
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mx-auto mb-3">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Natural Conversations</h4>
              <p className="text-sm text-muted-foreground">
                AI understands context and speaks like a real person
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
