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

  return (
    <section id="home" className="flex flex-col border-b border-border px-6 lg:px-12">
      {/* Full-viewport logo splash */}
      <div className="flex items-center justify-center shrink-0 h-[calc(100vh-88px)] lg:h-screen">
        <img
          src={cryptLogo}
          alt="Crypt AB"
          className="w-auto max-w-[80%] h-[40%]"
          style={{
            filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
          }}
        />
      </div>

      {/* Content below the logo */}
      <div className="py-12">
        <h1 id="hero-headline" className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground max-w-3xl leading-[1.05] mb-6 crt-glow-lg cursor-blink">
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
