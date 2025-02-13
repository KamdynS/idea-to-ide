
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#123524]/5 to-gray-50">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
};

export default Index;
