import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import TargetAudience from "@/components/TargetAudience";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import TechSpecs from "@/components/TechSpecs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Demo />
      <Problem />
      <Benefits />
      <Features />
      <UseCases />
      <TargetAudience />
      <HowItWorks />
      <Comparison />
      <TechSpecs />
      <Testimonials />
      <FAQ />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
