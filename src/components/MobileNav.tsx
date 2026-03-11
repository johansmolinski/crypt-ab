import cryptIcon from "@/assets/crypt_icon.svg";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navKeys = ["home", "services", "about", "contact"] as const;

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const { t } = useLanguage();

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <img
          src={cryptIcon}
          alt="Crypt AB"
          className="h-8 w-auto cursor-pointer"
          onClick={() => onNavigate("logo")}
          style={{
            filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
          }}
        />
        <LanguageSelector />
      </div>
      <nav className="flex border-t border-border">
        {navKeys.map((id) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex-1 text-center font-mono text-xs py-2 transition-colors border-r last:border-r-0 border-border ${
              activeSection === id
                ? "text-primary crt-glow"
                : "text-muted-foreground"
            }`}
          >
            {t.nav[id]}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default MobileNav;
