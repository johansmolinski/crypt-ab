import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="border-b border-border">
      <div className="px-6 lg:px-12 py-12">
        <p className="text-label mb-8">{t.services.label}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {t.services.items.map((service) => (
          <div
            key={service.number}
            className="border-t border-border md:odd:border-r px-6 lg:px-12 py-8 hover:bg-secondary/30 transition-colors"
          >
            <span className="text-label block mb-3">[{service.number}]</span>
            <h3 className="font-heading text-xl text-foreground mb-2 crt-glow">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
