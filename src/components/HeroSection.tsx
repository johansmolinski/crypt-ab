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
    <section id="home" className="min-h-[80vh] flex flex-col justify-center border-b border-border px-6 lg:px-12 py-20">
      <div className="mb-8 flex justify-center">
        <img
          src={cryptLogo}
          alt="Crypt AB"
          className="h-20 md:h-28 w-auto"
          style={{
            filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
          }}
        />
      </div>
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
    </section>
  );
};

export default HeroSection;
