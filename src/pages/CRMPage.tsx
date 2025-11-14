import { Button } from "@/components/ui/button";
import { Calendar, Users, Workflow, Clock, FileText, DollarSign, MapPin, BarChart3, Zap, CheckCircle, Star, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CRMPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Real-time bookings, buffer times, and automatic conflict prevention"
    },
    {
      icon: Users,
      title: "Client Profiles",
      description: "Complete history, notes, tags, and engagement tracking"
    },
    {
      icon: Workflow,
      title: "Automation Engine",
      description: "Trigger-based workflows, reminders, and follow-up sequences"
    },
    {
      icon: Clock,
      title: "Team Calendars",
      description: "Individual schedules, availability rules, and permissions"
    },
    {
      icon: FileText,
      title: "Smart Forms",
      description: "Custom intake forms with conditional logic and file uploads"
    },
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "Collect deposits, send invoices, and track revenue"
    }
  ];

  const bookingFeatures = [
    "Real-time online booking widget",
    "Custom business hours & availability",
    "Multiple appointment types with rules",
    "Buffer times between bookings",
    "Automatic time zone detection",
    "Two-way sync with Google & Outlook",
    "Prevent double-bookings",
    "Reschedule protection windows"
  ];

  const automationFlows = [
    { trigger: "New booking", action: "Send confirmation email + SMS" },
    { trigger: "24hrs before", action: "Send reminder notification" },
    { trigger: "After appointment", action: "Request review or feedback" },
    { trigger: "No-show detected", action: "Send follow-up sequence" },
    { trigger: "Lead captured", action: "Start nurture campaign" }
  ];

  const integrations = [
    "Google Calendar",
    "Outlook Calendar",
    "Apple Calendar",
    "Stripe Payments",
    "Zapier",
    "Make",
    "Webhooks API"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Elite Hair Salon",
      text: "The built-in CRM completely transformed how we manage appointments. We've reduced no-shows by 75% with automated reminders.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Plumbing",
      text: "I was using 3 different tools before. Now everything is in one place - bookings, client info, and automated follow-ups. It's a game-changer.",
      rating: 5
    },
    {
      name: "Emily Chen",
      business: "Wellness Spa & Massage",
      text: "The staff scheduling feature is incredible. Each therapist has their own calendar and the system handles everything automatically.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/logo.png" alt="Voquii" className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
            <Button className="bg-gradient-to-r from-gradient-start to-gradient-mid hover:shadow-glow transition-all duration-300">
              Start Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gradient-start to-gradient-mid rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-gradient-mid to-gradient-end rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-mid/10 border border-gradient-mid/20 mb-6 animate-fade-in">
              <Shield className="w-4 h-4 text-gradient-mid" />
              <span className="text-sm font-medium text-foreground">Built Into Voquii</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent animate-fade-in">
              Powerful Built-In CRM for Appointments, Clients, and Automated Workflows
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Manage bookings, track clients, automate reminders, and streamline your entire business—right inside Voquii.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button size="lg" className="bg-gradient-to-r from-gradient-start to-gradient-mid hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                Start Free <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 border border-gradient-mid/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
              <Calendar className="w-32 h-32 text-gradient-mid opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gradient-mid/30 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is Voquii CRM */}
      <section className="py-24 bg-gradient-to-b from-background to-gradient-start/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
              What Is the Voquii CRM?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A complete, built-in scheduling and customer management system designed for modern businesses. Handle bookings, manage staff, organize clients, collect forms, and automate workflows—all without any plugins or coding required. Completely integrated with Voquii Web Voice AI for seamless automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-gradient-mid mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">All-In-One Platform</h3>
              <p className="text-muted-foreground">No need for separate booking tools, CRM software, or automation platforms. Everything works together seamlessly.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-gradient-mid mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Voice AI Integration</h3>
              <p className="text-muted-foreground">The AI assistant books appointments, updates records, and manages schedules automatically through conversations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-gradient-mid mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Calendar Sync</h3>
              <p className="text-muted-foreground">Two-way synchronization with Google Calendar, Outlook, and Apple Calendar keeps everything up to date.</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <CheckCircle className="w-8 h-8 text-gradient-mid mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Zero Setup Required</h3>
              <p className="text-muted-foreground">Start using it immediately. No complex configuration, API keys, or technical knowledge needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Booking & Calendar */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
                <Calendar className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">Smart Scheduling</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Live Booking & Calendar Scheduling
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let customers book appointments 24/7 with an intelligent scheduling system that prevents conflicts, respects buffer times, and syncs across all your calendars.
              </p>
              <ul className="space-y-3">
                {bookingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-mid/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gradient-mid"></div>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 border border-gradient-mid/30 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-40 h-40 text-gradient-mid opacity-30" />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-gradient-start to-gradient-mid rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client & Lead Manager */}
      <section className="py-24 bg-gradient-to-b from-gradient-start/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gradient-mid/20 to-gradient-end/20 border border-gradient-mid/30 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-40 h-40 text-gradient-mid opacity-30" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gradient-mid to-gradient-end rounded-full blur-3xl opacity-30"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
                <Users className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">Client Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Complete Client & Lead Manager
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every interaction, note, and detail in one organized place. Track lead sources, segment customers, and never lose context on any relationship.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Full Client Profiles</h4>
                  <p className="text-sm text-muted-foreground">Contact info, custom fields, tags, and complete interaction history</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Notes & Activity Timeline</h4>
                  <p className="text-sm text-muted-foreground">Track every meeting, call, appointment, and touchpoint automatically</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Smart Segmentation</h4>
                  <p className="text-sm text-muted-foreground">Group clients by tags, behavior, source, or custom criteria</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-1">Lead Source Tracking</h4>
                  <p className="text-sm text-muted-foreground">Know exactly where every customer came from and what converted them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Automation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
              <Workflow className="w-4 h-4 text-gradient-mid" />
              <span className="text-sm font-medium text-foreground">Automation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
              Powerful Workflow Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Set up trigger-based workflows that run automatically. Send reminders, follow-ups, and nurture sequences without lifting a finger.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {automationFlows.map((flow, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gradient-mid/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="px-4 py-2 rounded-lg bg-gradient-start/10 border border-gradient-mid/20">
                    <Zap className="w-5 h-5 text-gradient-mid" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Trigger</div>
                    <div className="font-semibold text-foreground">{flow.trigger}</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">Action</div>
                  <div className="font-semibold text-foreground">{flow.action}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 border border-gradient-mid/20">
              <p className="text-lg text-foreground mb-2">
                <strong>Visual Flow Builder</strong> - Create custom workflows with drag-and-drop simplicity
              </p>
              <p className="text-muted-foreground">Conditional logic, delays, multi-step sequences, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff & Team Scheduling */}
      <section className="py-24 bg-gradient-to-b from-background to-gradient-start/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
                <Clock className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">Team Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Staff & Team Scheduling
              </h2>
              <p className="text-xl text-muted-foreground">
                Perfect for multi-person teams. Give each staff member their own calendar, availability rules, and appointment types.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Unlimited Staff Members</h3>
                <p className="text-muted-foreground">Add your entire team with individual profiles and settings</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Individual Schedules</h3>
                <p className="text-muted-foreground">Each team member sets their own availability and working hours</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Appointment Assignment</h3>
                <p className="text-muted-foreground">Control which staff can handle which appointment types</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Permissions Control</h3>
                <p className="text-muted-foreground">Set different access levels and capabilities per team member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms & Payments - Side by Side */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Forms */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
                <FileText className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">Smart Forms</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Forms & Intake Builder
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create custom forms with conditional logic, multi-step flows, and file uploads. Collect exactly the information you need before appointments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom questions with multiple field types</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Conditional logic - show/hide fields based on answers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Pre-appointment forms sent automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Multi-step forms with progress indicators</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">File upload fields for documents or images</span>
                </li>
              </ul>
            </div>

            {/* Payments */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
                <DollarSign className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">Monetization</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Payments & Invoicing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Accept payments, collect deposits, send invoices, and track revenue—all integrated seamlessly with Stripe.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Collect deposits or full payments at booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Charge for appointments automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Send and track invoices with payment status</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Integrated with Stripe for secure processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gradient-mid mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Automated payment reminders for unpaid invoices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Location */}
      <section className="py-24 bg-gradient-to-b from-gradient-start/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
              <MapPin className="w-4 h-4 text-gradient-mid" />
              <span className="text-sm font-medium text-foreground">Enterprise Ready</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
              Multi-Location Support
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Running multiple locations? Manage each one independently with separate calendars, staff, and automation rules.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border text-left">
                <MapPin className="w-8 h-8 text-gradient-mid mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Separate Calendars</h3>
                <p className="text-muted-foreground">Each location gets its own booking system and availability</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-left">
                <Users className="w-8 h-8 text-gradient-mid mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Location-Specific Staff</h3>
                <p className="text-muted-foreground">Assign team members to specific locations with independent schedules</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-left">
                <Workflow className="w-8 h-8 text-gradient-mid mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Location-Based Rules</h3>
                <p className="text-muted-foreground">Different automation workflows and settings per location</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-left">
                <BarChart3 className="w-8 h-8 text-gradient-mid mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Centralized Reporting</h3>
                <p className="text-muted-foreground">View performance across all locations from one dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
                <BarChart3 className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">Data-Driven</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Analytics & Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Make better decisions with comprehensive dashboards showing booking trends, staff performance, revenue, and customer behavior.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start/20 to-gradient-mid/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-gradient-mid">%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">No-Show Rates</h4>
                    <p className="text-sm text-muted-foreground">Track and reduce missed appointments with data</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start/20 to-gradient-mid/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-gradient-mid">$</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Revenue Tracking</h4>
                    <p className="text-sm text-muted-foreground">See exactly how much revenue each booking type generates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start/20 to-gradient-mid/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-gradient-mid">↗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Conversion Funnels</h4>
                    <p className="text-sm text-muted-foreground">From website visit to booked appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 border border-gradient-mid/30 backdrop-blur-sm flex items-center justify-center">
                <BarChart3 className="w-40 h-40 text-gradient-mid opacity-30" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-gradient-mid to-gradient-end rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-gradient-to-b from-gradient-start/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
              Works With Your Favorite Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly connects with the tools you already use
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="px-8 py-4 rounded-xl bg-card border border-border hover:border-gradient-mid/30 transition-all duration-300"
              >
                <span className="text-lg font-medium text-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect Pairing with Voice AI */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 rounded-3xl border border-gradient-mid/20 p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-mid/10 border border-gradient-mid/20 mb-6">
                <Zap className="w-4 h-4 text-gradient-mid" />
                <span className="text-sm font-medium text-foreground">The Ultimate Combination</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
                Perfect Pairing With Voquii Web Voice AI
              </h2>
              <p className="text-xl text-muted-foreground">
                When you combine the built-in CRM with Voquii's Voice AI, something magical happens
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AI Books Appointments</h3>
                    <p className="text-sm text-muted-foreground">Voice AI talks to customers and books directly into your calendar—no forms needed</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Auto-Capture Leads</h3>
                    <p className="text-sm text-muted-foreground">Every conversation creates a CRM record with full context and conversation history</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Update Records Live</h3>
                    <p className="text-sm text-muted-foreground">AI can modify customer information and notes during conversations in real-time</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-background/50 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Trigger Workflows</h3>
                    <p className="text-sm text-muted-foreground">Voice conversations become triggers for automated follow-up sequences</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gradient-start/20 to-gradient-mid/20 border border-gradient-mid/30">
              <p className="text-center text-lg text-foreground">
                <strong>Result:</strong> Fully automated lead capture, appointment booking, and customer management—all through natural voice conversations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gradient-start/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
              Loved By Businesses Everywhere
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gradient-mid/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gradient-mid text-gradient-mid" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 rounded-3xl border border-gradient-mid/20 p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
              Start Managing Your Clients, Bookings, and Workflows Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to run your business is built right into Voquii. No extra tools required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-gradient-start to-gradient-mid hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                Start Free <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMPage;
