import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Key, CheckCircle, ExternalLink } from "lucide-react";

export const WordPressSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WordPress? We've Got You Covered
            </h2>
            <p className="text-xl text-muted-foreground">
              Install Voquii on your WordPress site in 3 simple steps—no coding required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-2">
              <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                <Code className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Install Plugin</h3>
              <p className="text-muted-foreground">
                Download the Voquii WordPress plugin from the official repository
              </p>
            </Card>

            <Card className="p-6 text-center border-2">
              <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                <Key className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Add API Key</h3>
              <p className="text-muted-foreground">
                Copy your API key from your Voquii dashboard and paste it in the plugin settings
              </p>
            </Card>

            <Card className="p-6 text-center border-2">
              <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. You're Live!</h3>
              <p className="text-muted-foreground">
                Your AI voice assistant is now active on your site—start converting visitors
              </p>
            </Card>
          </div>

          <Card className="p-8 border-2 bg-gradient-to-br from-gradient-start/5 via-gradient-mid/5 to-gradient-end/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Get the WordPress Plugin</h3>
                <p className="text-muted-foreground mb-4">
                  Available free in the official WordPress plugin directory. 
                  Works with any WordPress theme or page builder.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Compatible with all themes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Works with Elementor, Divi, WPBakery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Regular updates and support</span>
                  </li>
                </ul>
              </div>
              <div>
                <Button size="lg" className="shadow-lg">
                  View WordPress Plugin
                  <ExternalLink className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Not using WordPress? Install via simple JavaScript snippet on any website platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
