import cryptIcon from "@/assets/crypt_icon.svg";
import { useStatus } from "@/context/StatusContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navKeys = ["home", "services", "about", "contact"] as const;

const SidebarNav = ({ activeSection, onNavigate }: SidebarNavProps) => {
  const { setStatusText, resetStatus } = useStatus();
  const { t } = useLanguage();

  const navItems = navKeys.map((id) => ({
    id,
    label: t.nav[id],
    statusAction: t.status.navigate[id],
  }));

  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:w-[30vw] lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:border-r lg:border-border lg:p-8 lg:pb-10">
      <div>
        <div className="mb-12 flex items-center justify-between">
          <img
            src={cryptIcon}
            alt="Crypt AB"
            className="h-10 w-auto"
            style={{
              filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
            }}
          />
          <LanguageSelector />
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              onMouseEnter={() => setStatusText(item.statusAction)}
              onMouseLeave={resetStatus}
              className={`text-left font-mono text-sm py-2 transition-colors ${
                activeSection === item.id
                  ? "text-primary crt-glow"
                  : "text-muted-foreground hover:text-foreground hover:crt-glow"
              }`}
            >
              &gt; {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="space-y-1">
        <p className="text-label">{t.sidebar.founded}</p>
        <p className="text-label">{t.sidebar.location}</p>
        <p className="text-label">{t.sidebar.lead}</p>
      </div>
    </aside>
  );
};

export default SidebarNav;
