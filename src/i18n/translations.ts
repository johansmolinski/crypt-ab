export type Language = "en" | "sv";

type TranslationSet = {
  nav: { home: string; services: string; about: string; contact: string };
  status: {
    default: string;
    navigate: { home: string; services: string; about: string; contact: string };
    contact: { initiate: string; transmit: string; queued: string; emailInput: string; messageInput: string; mailto: string };
    lang: { en: string; sv: string };
  };
  hero: { headline: string; description: string; cta: string };
  services: { label: string; items: { number: string; title: string; description: string }[] };
  about: { label: string; paragraphs: string[] };
  contact: { label: string; description: string; emailPlaceholder: string; messagePlaceholder: string; submit: string };
  sidebar: { founded: string; location: string; lead: string };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    status: {
      default: "STATUS: OPERATIONAL // CRYPT AB // EST. 2013 // JOHAN SMOLINSKI",
      navigate: {
        home: "NAVIGATE: HOME",
        services: "NAVIGATE: SERVICES",
        about: "NAVIGATE: ABOUT",
        contact: "ACTION: INITIATE_CONTACT",
      },
      contact: {
        initiate: "ACTION: INITIATE_CONTACT // MAILTO: JOHAN@CRYPT.SE",
        transmit: "ACTION: TRANSMIT_MESSAGE",
        queued: "STATUS: MESSAGE_QUEUED // STANDBY",
        emailInput: "INPUT: EMAIL_ADDRESS",
        messageInput: "INPUT: SYSTEM_REQUIREMENTS",
        mailto: "ACTION: MAILTO // JOHAN@CRYPT.SE",
      },
      lang: {
        en: "LOCALE: ENGLISH",
        sv: "LOCALE: SVENSKA",
      },
    },
    hero: {
      headline: "Reliable architecture for complex systems.",
      description: "> Crypt AB is a Swedish software consultancy focused on backend development, cloud architecture, APIs, and connected services.",
      cta: "[ INITIATE CONTACT ]",
    },
    services: {
      label: "> SERVICES_",
      items: [
        { number: "01", title: "Backend Development", description: "Scalable, high-performance core systems built for longevity and maintainability." },
        { number: "02", title: "Cloud Architecture", description: "Resilient infrastructure design, deployment, and operational strategy." },
        { number: "03", title: "API & Integrations", description: "Secure, seamless data flow between platforms, services, and third-party systems." },
        { number: "04", title: "IoT / Connected Services", description: "Cloud-side platform engineering for physical devices and sensor networks." },
        { number: "05", title: "Technical Leadership", description: "Solution design, architectural guidance, and pragmatic decision-making." },
        { number: "06", title: "Pragmatic Fullstack", description: "End-to-end delivery utilizing modern AI-assisted tooling when the project requires it." },
      ],
    },
    about: {
      label: "> ABOUT_",
      paragraphs: [
        "Crypt AB was founded in 2013 by Johan Smolinski. We do not pretend to be a large agency. We are an independent consultancy providing senior expertise in backend development, cloud architecture, and platform-side IoT solutions.",
        "The approach is grounded in pragmatic problem-solving, long-term thinking, and a commitment to building software that simply works. Every engagement benefits from over two decades of hands-on experience with complex systems, distributed architectures, and real-world constraints.",
        "When the project calls for it, Crypt AB delivers pragmatic fullstack solutions — leveraging modern tooling and AI-assisted development to ship complete, working products without unnecessary overhead.",
      ],
    },
    contact: {
      label: "> CONTACT_",
      description: "Discuss consulting opportunities, software projects, or collaborations.",
      emailPlaceholder: "EMAIL_ADDRESS>",
      messagePlaceholder: "SYSTEM_REQUIREMENTS>",
      submit: "[ TRANSMIT ]",
    },
    sidebar: {
      founded: "FOUNDED: 2013",
      location: "LOCATION: SWEDEN",
      lead: "LEAD: J. SMOLINSKI",
    },
  },
  sv: {
    nav: {
      home: "Hem",
      services: "Tjänster",
      about: "Om oss",
      contact: "Kontakt",
    },
    status: {
      default: "STATUS: OPERATIV // CRYPT AB // GRUNDAT 2013 // JOHAN SMOLINSKI",
      navigate: {
        home: "NAVIGERA: HEM",
        services: "NAVIGERA: TJÄNSTER",
        about: "NAVIGERA: OM OSS",
        contact: "ÅTGÄRD: INITIERA_KONTAKT",
      },
      contact: {
        initiate: "ÅTGÄRD: INITIERA_KONTAKT // EPOST: JOHAN@CRYPT.SE",
        transmit: "ÅTGÄRD: SKICKA_MEDDELANDE",
        queued: "STATUS: MEDDELANDE_KÖAT // VÄNTAR",
        emailInput: "INMATNING: EPOSTADRESS",
        messageInput: "INMATNING: SYSTEMBEHOV",
        mailto: "ÅTGÄRD: EPOST // JOHAN@CRYPT.SE",
      },
      lang: {
        en: "SPRÅK: ENGLISH",
        sv: "SPRÅK: SVENSKA",
      },
    },
    hero: {
      headline: "Pålitlig arkitektur för komplexa system.",
      description: "> Crypt AB är ett svenskt mjukvarukonsultbolag med fokus på backendutveckling, molnarkitektur, API:er och uppkopplade tjänster.",
      cta: "[ INITIERA KONTAKT ]",
    },
    services: {
      label: "> TJÄNSTER_",
      items: [
        { number: "01", title: "Backendutveckling", description: "Skalbara, högpresterande kärnsystem byggda för långsiktighet och underhållbarhet." },
        { number: "02", title: "Molnarkitektur", description: "Motståndskraftig infrastrukturdesign, driftsättning och operativ strategi." },
        { number: "03", title: "API & Integrationer", description: "Säkert, sömlöst dataflöde mellan plattformar, tjänster och tredjepartssystem." },
        { number: "04", title: "IoT / Uppkopplade tjänster", description: "Molnbaserad plattformsutveckling för fysiska enheter och sensornätverk." },
        { number: "05", title: "Tekniskt ledarskap", description: "Lösningsdesign, arkitekturvägledning och pragmatiskt beslutsfattande." },
        { number: "06", title: "Pragmatisk fullstack", description: "Helhetsleverans med moderna AI-assisterade verktyg när projektet kräver det." },
      ],
    },
    about: {
      label: "> OM OSS_",
      paragraphs: [
        "Crypt AB grundades 2013 av Johan Smolinski. Vi utger oss inte för att vara en stor byrå. Vi är en oberoende konsultverksamhet som erbjuder senior expertis inom backendutveckling, molnarkitektur och plattformslösningar för IoT.",
        "Tillvägagångssättet grundar sig i pragmatisk problemlösning, långsiktigt tänkande och ett engagemang för att bygga mjukvara som helt enkelt fungerar. Varje uppdrag drar nytta av över två decenniers praktisk erfarenhet av komplexa system, distribuerade arkitekturer och verkliga begränsningar.",
        "När projektet kräver det levererar Crypt AB pragmatiska fullstacklösningar — med moderna verktyg och AI-assisterad utveckling för att leverera kompletta, fungerande produkter utan onödig overhead.",
      ],
    },
    contact: {
      label: "> KONTAKT_",
      description: "Diskutera konsultmöjligheter, mjukvaruprojekt eller samarbeten.",
      emailPlaceholder: "EPOSTADRESS>",
      messagePlaceholder: "SYSTEMBEHOV>",
      submit: "[ SKICKA ]",
    },
    sidebar: {
      founded: "GRUNDAT: 2013",
      location: "PLATS: SVERIGE",
      lead: "ANSVARIG: J. SMOLINSKI",
    },
  },
} as const;
