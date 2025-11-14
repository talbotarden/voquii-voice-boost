import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How many minutes come in each plan?",
    answer: "Free plan includes 20 minutes/month. Starter has 100 minutes, Growth has 300 minutes, and Business has 500 minutes per month. Each plan also includes a grace period for overages.",
  },
  {
    question: "Can I install this on any website?",
    answer: "Yes! Voquii works on any website platform. Use our WordPress plugin for easy installation, or add a simple JavaScript snippet to any site—Shopify, ClickFunnels, Webflow, Wix, Squarespace, custom sites, etc.",
  },
  {
    question: "Can the AI book appointments?",
    answer: "Absolutely. The AI can check availability, schedule appointments, and even send calendar invites. It integrates with popular scheduling tools and calendars.",
  },
  {
    question: "Can it speak multiple languages?",
    answer: "Yes. Voquii supports automatic translation and can converse in dozens of languages. Perfect for serving global customers.",
  },
  {
    question: "Does it work with my CRM?",
    answer: "Voquii integrates with popular CRMs and marketing tools via API. Lead data flows automatically into your existing systems.",
  },
  {
    question: "Is there really a free plan?",
    answer: "Yes! The free plan includes 20 minutes per month—perfect for testing Voquii on your site. No credit card required. Upgrade anytime as your needs grow.",
  },
  {
    question: "How do I train the AI on my business?",
    answer: "Simply add your FAQs, services, pricing, and policies through the dashboard. The AI learns your business in minutes. You can update the knowledge base anytime.",
  },
  {
    question: "What happens if I go over my minutes?",
    answer: "Each plan includes a grace period. After that, conversations pause until your next billing cycle or you can upgrade your plan instantly.",
  },
  {
    question: "Can I customize how it looks?",
    answer: "Yes. Customize colors, position, widget style, and branding to match your website perfectly. White-label options available on higher plans.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund you—no questions asked.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Voquii Web Voice AI.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
