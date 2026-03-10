import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useStatus } from "@/context/StatusContext";

const ContactSection = () => {
  const { setStatusText, resetStatus } = useStatus();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatusText("STATUS: MESSAGE_QUEUED // STANDBY");
    setTimeout(resetStatus, 3000);
  };

  return (
    <section id="contact" className="px-6 lg:px-12 py-16">
      <p className="text-label mb-8">&gt; CONTACT_</p>
      <p className="text-muted-foreground text-sm mb-10 max-w-[58ch]">
        Discuss consulting opportunities, software projects, or collaborations.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-8">
        <div>
          <input
            type="email"
            placeholder="EMAIL_ADDRESS>"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border-b border-border pb-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors crt-glow"
            onFocus={() => setStatusText("INPUT: EMAIL_ADDRESS")}
            onBlur={resetStatus}
          />
        </div>
        <div>
          <textarea
            placeholder="SYSTEM_REQUIREMENTS>"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full bg-transparent border-b border-border pb-3 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none crt-glow"
            onFocus={() => setStatusText("INPUT: SYSTEM_REQUIREMENTS")}
            onBlur={resetStatus}
          />
        </div>
        <Button
          type="submit"
          variant="brass"
          size="lg"
          onMouseEnter={() => setStatusText("ACTION: TRANSMIT_MESSAGE")}
          onMouseLeave={resetStatus}
        >
          [ TRANSMIT ]
        </Button>
      </form>

      <div className="mt-16 space-y-1">
        <p className="text-label">CRYPT AB</p>
        <p className="text-label">JOHAN SMOLINSKI</p>
        <p
          className="text-label cursor-pointer hover:text-primary transition-colors"
          onMouseEnter={() => setStatusText("ACTION: MAILTO // JOHAN@CRYPT.SE")}
          onMouseLeave={resetStatus}
        >
          JOHAN@CRYPT.SE
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
