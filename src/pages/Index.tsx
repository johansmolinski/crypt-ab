import { useState, useCallback } from "react";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import StatusBar from "@/components/StatusBar";
import { StatusProvider } from "@/context/StatusContext";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <StatusProvider>
      <div className="min-h-screen pb-6">
        <SidebarNav activeSection={activeSection} onNavigate={handleNavigate} />
        <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />

        <main className="lg:ml-[30vw] pt-[88px] lg:pt-0">
          <HeroSection onContactClick={() => handleNavigate("contact")} />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </main>

        <StatusBar />
      </div>
    </StatusProvider>
  );
};

export default Index;
