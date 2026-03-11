import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useStatus } from "@/context/StatusContext";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { setStatusText, resetStatus } = useStatus();
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatusText(t.status.contact.queued);
    setTimeout(resetStatus, 3000);
  };

  return (
    <section id="contact" className="px-6 lg:px-12 py-16">
      <p className="text-label mb-8">{t.contact.label}</p>
      <p className="text-muted-foreground text-sm mb-10 max-w-[58ch]">
        {t.contact.description}
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
        <div>
          <input
            type="text"
            placeholder={t.contact.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            className="w-full bg-transparent border-b border-border pb-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors crt-glow"
            onFocus={() => setStatusText(t.status.contact.nameInput)}
            onBlur={resetStatus}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border-b border-border pb-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors crt-glow"
            onFocus={() => setStatusText(t.status.contact.emailInput)}
            onBlur={resetStatus}
          />
        </div>
        <div>
          <textarea
            placeholder={t.contact.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full bg-transparent border-b border-border pb-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none crt-glow"
            onFocus={() => setStatusText(t.status.contact.messageInput)}
            onBlur={resetStatus}
          />
        </div>
        <Button
          type="submit"
          variant="brass"
          size="lg"
          onMouseEnter={() => setStatusText(t.status.contact.transmit)}
          onMouseLeave={resetStatus}
        >
          {t.contact.submit}
        </Button>
      </form>

      <div className="mt-16 space-y-1">
        <p className="text-label">CRYPT AB</p>
        <p className="text-label">JOHAN SMOLINSKI</p>
      </div>
    </section>
  );
};

export default ContactSection;
