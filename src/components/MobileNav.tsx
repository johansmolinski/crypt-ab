import cryptIcon from "@/assets/crypt_icon.svg";

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
        <img
          src={cryptIcon}
          alt="Crypt AB"
          className="h-8 w-auto"
          style={{
            filter: "invert(75%) sepia(95%) saturate(3000%) hue-rotate(80deg) brightness(105%)",
          }}
        />
      </div>
      <nav className="flex border-t border-border">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex-1 text-center font-mono text-xs py-2 transition-colors border-r last:border-r-0 border-border ${
              activeSection === item.id
                ? "text-primary crt-glow"
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
