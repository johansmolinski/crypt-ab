import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-border px-6 lg:px-12 py-16">
      <p className="text-label mb-8">{t.about.label}</p>
      <div className="max-w-[58ch]">
        <p className="text-foreground text-sm leading-[1.85] mb-6 crt-glow">
          {t.about.paragraphs[0]}
        </p>
        <p className="text-foreground text-sm leading-[1.85] mb-6 crt-glow">
          {t.about.paragraphs[1]}
        </p>
        <p className="text-muted-foreground text-sm leading-[1.85]">
          {t.about.paragraphs[2]}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
