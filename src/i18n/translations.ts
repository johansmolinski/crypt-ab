export type Language = "en" | "sv";

type TranslationSet = {
  nav: { home: string; services: string; about: string; contact: string };
  status: {
    default: string;
    navigate: { home: string; services: string; about: string; contact: string };
    contact: { initiate: string; transmit: string; queued: string; nameInput: string; emailInput: string; messageInput: string };
    lang: { en: string; sv: string };
  };
  hero: { headline: string; description: string; cta: string };
  services: { label: string; items: { number: string; title: string; description: string }[] };
  about: { label: string; paragraphs: string[] };
  contact: { label: string; description: string; namePlaceholder: string; emailPlaceholder: string; messagePlaceholder: string; submit: string };
  sidebar: { founded: string; location: string; lead: string };
  footer: { orgNr: string; vatId: string; phone: string; address: string; addressLine: string };
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
        initiate: "ACTION: INITIATE_CONTACT",
        transmit: "ACTION: TRANSMIT_MESSAGE",
        queued: "STATUS: MESSAGE_QUEUED // STANDBY",
        nameInput: "INPUT: CONTACT_NAME",
        emailInput: "INPUT: EMAIL_ADDRESS",
        messageInput: "INPUT: SYSTEM_REQUIREMENTS",
      },
      lang: {
        en: "LOCALE: ENGLISH",
        sv: "LOCALE: SVENSKA",
      },
    },
    hero: {
      headline: "Web apps and services that simply work.",
      description: "> Crypt AB builds, hosts, and evolves web apps, APIs, and connected services with a pragmatic backend-first approach.",
      cta: "[ START A PROJECT ]",
    },
    services: {
      label: "> SERVICES_",
      items: [
        { number: "01", title: "Web Apps", description: "Fullstack web apps for customer-facing products, internal tools, and SaaS platforms." },
        { number: "02", title: "Hosted Services", description: "Deployment, hosting, monitoring, backups, and maintenance for reliable day-to-day operation." },
        { number: "03", title: "API & Integrations", description: "Secure, well-structured APIs and integrations between your systems and third-party services." },
        { number: "04", title: "Backend Systems", description: "Application backends, workers, queues, and data flows designed for stability and change." },
        { number: "05", title: "Connected Services", description: "Cloud services for devices, telemetry, remote control, and connected products." },
        { number: "06", title: "Product Delivery", description: "Pragmatic delivery from first version to production, with modern tooling where it helps." },
      ],
    },
    about: {
      label: "> ABOUT_",
      paragraphs: [
        "Crypt AB was founded in 2013 by Johan Smolinski. The focus today is simple: build, host, and evolve web apps and online services that need to work without drama.",
        "Most of the work happens close to the product itself — application backends, operational infrastructure, APIs, background jobs, and the interfaces people actually use. The goal is not more process, but dependable systems that can be shipped and run for the long term.",
        "When the project calls for it, Crypt AB takes full responsibility from first release to ongoing operations, using modern tooling and AI-assisted development where it materially improves speed or quality.",
      ],
    },
    contact: {
      label: "> CONTACT_",
      description: "Discuss a web app, hosted service, or product collaboration.",
      namePlaceholder: "CONTACT_NAME>",
      emailPlaceholder: "EMAIL_ADDRESS>",
      messagePlaceholder: "SYSTEM_REQUIREMENTS>",
      submit: "[ TRANSMIT ]",
    },
    sidebar: {
      founded: "FOUNDED: 2013",
      location: "LOCATION: SWEDEN",
      lead: "LEAD: J. SMOLINSKI",
    },
    footer: {
      orgNr: "ORG NR: 556939-5626",
      vatId: "VAT ID: SE556939562601",
      phone: "TEL: +46 705 955 621",
      address: "ADDR:",
      addressLine: "Kummelvägen 23, 152 57 Södertälje, Sweden",
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
        initiate: "ÅTGÄRD: INITIERA_KONTAKT",
        transmit: "ÅTGÄRD: SKICKA_MEDDELANDE",
        queued: "STATUS: MEDDELANDE_KÖAT // VÄNTAR",
        nameInput: "INMATNING: KONTAKTNAMN",
        emailInput: "INMATNING: EPOSTADRESS",
        messageInput: "INMATNING: SYSTEMBEHOV",
      },
      lang: {
        en: "SPRÅK: ENGLISH",
        sv: "SPRÅK: SVENSKA",
      },
    },
    hero: {
      headline: "Webbappar och tjänster som helt enkelt fungerar.",
      description: "> Crypt AB bygger, driftar och vidareutvecklar webbappar, API:er och uppkopplade tjänster med ett pragmatiskt backend-först-perspektiv.",
      cta: "[ STARTA ETT PROJEKT ]",
    },
    services: {
      label: "> TJÄNSTER_",
      items: [
        { number: "01", title: "Webbappar", description: "Fullstack-webbappar för kundnära produkter, interna verktyg och SaaS-plattformar." },
        { number: "02", title: "Drift & Hosting", description: "Driftsättning, hosting, övervakning, backuper och underhåll för stabil vardagsdrift." },
        { number: "03", title: "API:er & Integrationer", description: "Säkra, välstrukturerade API:er och integrationer mellan era system och tredjepartstjänster." },
        { number: "04", title: "Backendsystem", description: "Applikationsbackends, jobb, köer och dataflöden utformade för stabilitet och förändring." },
        { number: "05", title: "Uppkopplade tjänster", description: "Molntjänster för enheter, telemetri, fjärrstyrning och uppkopplade produkter." },
        { number: "06", title: "Produktleverans", description: "Pragmatisk leverans från första version till produktion, med moderna verktyg där de gör nytta." },
      ],
    },
    about: {
      label: "> OM OSS_",
      paragraphs: [
        "Crypt AB grundades 2013 av Johan Smolinski. Fokus idag är enkelt: att bygga, drifta och vidareutveckla webbappar och onlinetjänster som behöver fungera utan dramatik.",
        "Arbetet sker nära produkten — applikationsbackends, operativ infrastruktur, API:er, bakgrundsjobb och de gränssnitt som människor faktiskt använder. Målet är inte mer process, utan stabila system som går att leverera och driva långsiktigt.",
        "När projektet kräver det tar Crypt AB helhetsansvar från första leverans till löpande drift, med moderna verktyg och AI-assisterad utveckling där det faktiskt förbättrar hastighet eller kvalitet.",
      ],
    },
    contact: {
      label: "> KONTAKT_",
      description: "Diskutera en webbapp, en driftad tjänst eller ett produktsamarbete.",
      namePlaceholder: "KONTAKTNAMN>",
      emailPlaceholder: "EPOSTADRESS>",
      messagePlaceholder: "SYSTEMBEHOV>",
      submit: "[ SKICKA ]",
    },
    sidebar: {
      founded: "GRUNDAT: 2013",
      location: "PLATS: SVERIGE",
      lead: "ANSVARIG: J. SMOLINSKI",
    },
    footer: {
      orgNr: "ORG.NR: 556939-5626",
      vatId: "MOMS.NR: SE556939562601",
      phone: "TEL: +46 705 955 621",
      address: "ADRESS:",
      addressLine: "Kummelvägen 23, 152 57 Södertälje",
    },
  },
} as const;
