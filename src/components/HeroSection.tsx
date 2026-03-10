import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import cryptLogo from "@/assets/crypt.svg";
import { useStatus } from "@/context/StatusContext";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { setStatusText, resetStatus } = useStatus();
  const { t } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const onScroll = () => {
      const progress = Math.min(main.scrollTop / 300, 1);
      setScrollProgress(progress);
    };
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  const logoHeight = `clamp(5rem, ${100 - scrollProgress * 70}vh, 100vh)`;
  const contentOpacity = scrollProgress > 0.3 ? (scrollProgress - 0.3) / 0.7 : 0;

  return (
    <section id="home" className="flex flex-col border-b border-border px-6 lg:px-12">
      {/* Logo splash area */}
      <div
        className="flex items-center justify-center transition-none shrink-0"
        style={{
          height: logoHeight,
          minHeight: "5rem",
        }}
      >
        <img
          src={cryptLogo}
          alt="Crypt AB"
          className="w-auto max-w-[80%]"
          style={{
            height: `${Math.max(20, 60 - scrollProgress * 50)}%`,
            filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
            transition: "none",
          }}
        />
      </div>

      {/* Content revealed on scroll */}
      <div
        className="py-12"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${(1 - contentOpacity) * 20}px)`,
          transition: "none",
        }}
      >
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground max-w-3xl leading-[1.05] mb-6 crt-glow-lg cursor-blink">
          {t.hero.headline}
        </h1>
        <p className="text-muted-foreground max-w-xl mb-10 text-sm leading-relaxed crt-glow">
          {t.hero.description}
        </p>
        <div>
          <Button
            variant="brass"
            size="lg"
            onClick={onContactClick}
            onMouseEnter={() => setStatusText(t.status.contact.initiate)}
            onMouseLeave={resetStatus}
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
