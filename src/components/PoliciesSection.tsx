import { useLanguage } from "@/context/LanguageContext";

const PoliciesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="policies" className="border-b border-border">
      <div className="px-6 lg:px-12 py-12">
        <p className="text-label mb-6">{t.policies.label}</p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[68ch]">
          {t.policies.intro}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {t.policies.items.map((item) => (
          <div
            key={item.number}
            className="border-t border-border md:odd:border-r px-6 lg:px-12 py-8"
          >
            <span className="text-label block mb-3">[{item.number}]</span>
            <h3 className="font-heading text-xl text-foreground mb-4 crt-glow">
              {item.title}
            </h3>
            <div className="space-y-4 max-w-[58ch]">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 lg:px-12 py-8 border-t border-border">
        <p className="text-foreground text-sm leading-relaxed max-w-[68ch] crt-glow">
          {t.policies.note}
        </p>
      </div>
    </section>
  );
};

export default PoliciesSection;