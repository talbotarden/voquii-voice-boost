import { Hero } from "@/components/Hero";
import { WhatIsVoquii } from "@/components/WhatIsVoquii";
import { Benefits } from "@/components/Benefits";
import { UseCases } from "@/components/UseCases";
import { DemoSection } from "@/components/DemoSection";
import { Pricing } from "@/components/Pricing";
import BuiltInCRM from "@/components/BuiltInCRM";
import CRMIntegrations from "@/components/CRMIntegrations";
import { WordPressSection } from "@/components/WordPressSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTAFooter } from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsVoquii />
      <Benefits />
      <UseCases />
      <DemoSection />
      <Pricing />
      <BuiltInCRM />
      <CRMIntegrations />
      <WordPressSection />
      <Testimonials />
      <FAQ />
      <CTAFooter />
    </div>
  );
};

export default Index;
