import { Database, Users, Calendar, BarChart3, MessageSquare, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const BuiltInCRM = () => {
  const features = [
    {
      icon: Users,
      title: "Contact Management",
      description: "Automatically capture and organize every lead from voice conversations into a searchable database"
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Book appointments in real-time during conversations. Full calendar integration with reminders"
    },
    {
      icon: MessageSquare,
      title: "Conversation History",
      description: "Every voice interaction is logged, transcribed, and searchable for complete customer context"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Track lead quality, conversion rates, busiest hours, and ROI with detailed dashboards"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get instant alerts for high-value leads, appointment bookings, and urgent inquiries"
    },
    {
      icon: Database,
      title: "Data Export",
      description: "Export all your leads and data anytime. CSV, Excel, or direct API access available"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-gradient-start/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-mid/10 border border-gradient-mid/20 mb-6">
            <Database className="w-4 h-4 text-gradient-mid" />
            <span className="text-sm font-medium text-foreground">No External CRM Needed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
            Full-Featured CRM Built Right In
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why pay for another CRM? Voquii includes a complete customer relationship management system designed specifically for voice-first lead generation. Capture, organize, and convert—all in one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-gradient-mid/30 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 rounded-3xl border border-gradient-mid/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Everything You Need, Nothing You Don't
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-mid/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-mid"></div>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">No monthly CRM fees</strong> - Save $50-200/month per user
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-mid/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-mid"></div>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Automatic data entry</strong> - Voice AI captures everything
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-mid/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-mid"></div>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Mobile app included</strong> - Manage leads on the go
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-mid/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-mid"></div>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Or sync with your existing CRM</strong> - Best of both worlds
                  </span>
                </li>
              </ul>
              <Link to="/crm">
                <Button size="lg" className="bg-gradient-to-r from-gradient-start to-gradient-mid hover:shadow-glow transition-all duration-300">
                  Explore CRM Features
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 border border-gradient-mid/30 flex items-center justify-center backdrop-blur-sm">
                <Database className="w-24 h-24 text-gradient-mid opacity-50" />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-gradient-start to-gradient-mid rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gradient-mid to-gradient-end rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltInCRM;
