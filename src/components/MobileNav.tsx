import { useStatus } from "@/context/StatusContext";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-heading text-base font-800 tracking-tight text-foreground">
          CRYPT AB
        </span>
      </div>
      <nav className="flex border-t border-border">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex-1 text-center font-mono text-xs py-2 transition-colors border-r last:border-r-0 border-border ${
              activeSection === item.id
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default MobileNav;
