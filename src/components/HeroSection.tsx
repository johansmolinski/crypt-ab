import { Button } from "@/components/ui/button";
import cryptLogo from "@/assets/crypt.svg";
import { useStatus } from "@/context/StatusContext";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const { setStatusText, resetStatus } = useStatus();

  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center border-b border-border px-6 lg:px-12 py-20">
      <div className="mb-8">
        <img
          src={cryptLogo}
          alt="Crypt AB"
          className="h-16 md:h-20 w-auto"
          style={{
            filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
          }}
        />
      </div>
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground max-w-3xl leading-[1.05] mb-6 crt-glow-lg cursor-blink">
        Reliable architecture for complex systems.
      </h1>
      <p className="text-muted-foreground max-w-xl mb-10 text-sm leading-relaxed crt-glow">
        &gt; Crypt AB is a Swedish software consultancy focused on backend development, cloud architecture, APIs, and connected services.
      </p>
      <div>
        <Button
          variant="brass"
          size="lg"
          onClick={onContactClick}
          onMouseEnter={() => setStatusText("ACTION: INITIATE_CONTACT // MAILTO: JOHAN@CRYPT.SE")}
          onMouseLeave={resetStatus}
        >
          [ INITIATE CONTACT ]
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
