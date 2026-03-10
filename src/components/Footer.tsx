import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="lg:ml-[30vw] px-6 lg:px-12 py-12 border-t border-border mt-12">
      <div className="space-y-2 text-label">
        <p>CRYPT AB</p>
        <p>{t.footer.orgNr}</p>
        <p>{t.footer.vatId}</p>
        <p>{t.footer.phone}</p>
        <p>{t.footer.address} {t.footer.addressLine}</p>
      </div>
    </footer>
  );
};

export default Footer;
