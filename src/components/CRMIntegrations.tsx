import { CheckCircle } from "lucide-react";

const CRMIntegrations = () => {
  const integrations = [
    { name: "HubSpot", logo: "/images/crm/hubspot.png" },
    { name: "Pipedrive", logo: "/images/crm/pipedrive.png" },
    { name: "Zoho CRM", logo: "/images/crm/zoho.png" },
    { name: "Close", logo: "/images/crm/close.png" },
    { name: "Copper CRM", logo: "/images/crm/copper.png" },
    { name: "Cal.com", logo: "/images/crm/cal.svg" },
    { name: "Calendly", logo: "/images/crm/calendly.svg" },
    { name: "Less Annoying CRM", logo: "/images/crm/less-annoying.png" },
    { name: "OnePage CRM", logo: "/images/crm/onepage.png" },
    { name: "Insightly", logo: "/images/crm/insightly.png" },
    { name: "AccuLynx", logo: "/images/crm/acculynx.svg" },
    { name: "JobNimbus", logo: "/images/crm/jobnimbus.png" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-start/10 border border-gradient-mid/20 mb-6">
            <CheckCircle className="w-4 h-4 text-gradient-mid" />
            <span className="text-sm font-medium text-foreground">Seamless Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent">
            Connect With Your Favorite CRM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Voquii integrates seamlessly with leading CRM and calendar platforms. Automatically sync leads, appointments, and conversations to your existing workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center justify-items-center">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-center w-full h-24 p-6 rounded-xl bg-card border border-border hover:border-gradient-mid/30 hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            And many more integrations via Zapier, Make, and custom API connections
          </p>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrations;
