import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyKetoAI from "@/components/WhyKetoAI";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AIAnalysis from "@/components/AIAnalysis";
import StartWithKetoAI from "@/components/StartWithKetoAI";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyKetoAI />
      <HowItWorks />
      <Features />
      <StartWithKetoAI />
      <AIAnalysis />
      <Footer />
    </div>
  );
};

export default Index;