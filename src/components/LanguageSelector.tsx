import { useLanguage } from "@/context/LanguageContext";
import { useStatus } from "@/context/StatusContext";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const { setStatusText, resetStatus } = useStatus();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        onMouseEnter={() => setStatusText(t.status.lang.en)}
        onMouseLeave={resetStatus}
        className={`group relative w-7 h-5 border border-border rounded-sm overflow-hidden transition-all ${
          language === "en" ? "ring-1 ring-primary shadow-[0_0_6px_hsl(120_100%_50%/0.4)]" : "opacity-60 hover:opacity-100"
        }`}
        aria-label="English"
      >
        {/* UK flag - green monochrome, real colors on hover */}
        <svg viewBox="0 0 60 30" className="w-full h-full">
          {/* Background */}
          <rect width="60" height="30" className="fill-primary/30 group-hover:fill-[#012169] transition-colors duration-300" />
          {/* Diagonal whites */}
          <path d="M0,0 L60,30 M60,0 L0,30" strokeWidth="6" className="stroke-primary/50 group-hover:stroke-white transition-colors duration-300" />
          {/* Cross whites */}
          <path d="M30,0 V30 M0,15 H60" strokeWidth="10" className="stroke-primary/50 group-hover:stroke-white transition-colors duration-300" />
          {/* Diagonal reds */}
          <path d="M0,0 L60,30 M60,0 L0,30" strokeWidth="2" className="stroke-primary/70 group-hover:stroke-[#C8102E] transition-colors duration-300" />
          {/* Cross reds */}
          <path d="M30,0 V30 M0,15 H60" strokeWidth="6" className="stroke-primary/70 group-hover:stroke-[#C8102E] transition-colors duration-300" />
        </svg>
      </button>
      <button
        onClick={() => setLanguage("sv")}
        onMouseEnter={() => setStatusText(t.status.lang.sv)}
        onMouseLeave={resetStatus}
        className={`group relative w-7 h-5 border border-border rounded-sm overflow-hidden transition-all ${
          language === "sv" ? "ring-1 ring-primary shadow-[0_0_6px_hsl(120_100%_50%/0.4)]" : "opacity-60 hover:opacity-100"
        }`}
        aria-label="Svenska"
      >
        {/* Swedish flag - green monochrome, real colors on hover */}
        <svg viewBox="0 0 16 10" className="w-full h-full">
          <rect width="16" height="10" className="fill-primary/30 group-hover:fill-[#006AA7] transition-colors duration-300" />
          <rect x="5" width="2" height="10" className="fill-primary/70 group-hover:fill-[#FECC00] transition-colors duration-300" />
          <rect y="4" width="16" height="2" className="fill-primary/70 group-hover:fill-[#FECC00] transition-colors duration-300" />
        </svg>
      </button>
    </div>
  );
};

export default LanguageSelector;
