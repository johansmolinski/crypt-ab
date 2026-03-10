import cryptIcon from "@/assets/crypt_icon.svg";
import { useStatus } from "@/context/StatusContext";

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", statusAction: "NAVIGATE: HOME" },
  { id: "services", label: "Services", statusAction: "NAVIGATE: SERVICES" },
  { id: "about", label: "About", statusAction: "NAVIGATE: ABOUT" },
  { id: "contact", label: "Contact", statusAction: "ACTION: INITIATE_CONTACT" },
];

const SidebarNav = ({ activeSection, onNavigate }: SidebarNavProps) => {
  const { setStatusText, resetStatus } = useStatus();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:w-[30vw] lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:border-r lg:border-border lg:p-8 lg:pb-10">
      <div>
        <div className="mb-12">
          <img
            src={cryptIcon}
            alt="Crypt AB"
            className="h-10 w-auto"
            style={{
              filter: "invert(55%) sepia(95%) saturate(5000%) hue-rotate(100deg) brightness(110%)",
            }}
          />
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
        <p className="text-label">FOUNDED: 2013</p>
        <p className="text-label">LOCATION: SWEDEN</p>
        <p className="text-label">LEAD: J. SMOLINSKI</p>
      </div>
    </aside>
  );
};

export default SidebarNav;
