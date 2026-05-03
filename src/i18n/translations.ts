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
  policies: {
    label: string;
    intro: string;
    items: { number: string; title: string; paragraphs: string[] }[];
    note: string;
  };
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
      headline: "Hosted services, built in-house.",
      description: "> Crypt AB develops and runs its own portfolio of web services, apps, APIs, and connected systems. We also take on selected customer builds when there is a strong fit.",
      cta: "[ TALK TO US ]",
    },
    services: {
      label: "> SERVICES_",
      items: [
        { number: "01", title: "In-House Services", description: "A growing portfolio of web services and apps designed, owned, and operated by Crypt AB." },
        { number: "02", title: "Hosting & Operations", description: "Reliable hosting, monitoring, backups, and maintenance for the services we run ourselves and selected customer systems." },
        { number: "03", title: "Customer-Specific Builds", description: "New services, integrations, and internal tools for customers when the project matches our platform and product direction." },
        { number: "04", title: "APIs & Backends", description: "Application backends, workers, queues, and APIs that support both our own products and customer work." },
        { number: "05", title: "Connected Platforms", description: "Cloud services for devices, telemetry, remote control, and other connected products." },
        { number: "06", title: "Long-Term Delivery", description: "From first release to ongoing operations, with pragmatic tooling and steady iteration over time." },
      ],
    },
    about: {
      label: "> ABOUT_",
      paragraphs: [
        "Crypt AB was founded in 2013 by Johan Smolinski. The core offer today is a growing portfolio of services built and run in-house, with selected customer projects around adjacent products, platforms, and integrations.",
        "That means product thinking and operations matter as much as code. Services are designed to be useful, maintainable, and sustainable over time — whether they are our own or built in close collaboration with a customer.",
        "The work is rooted in backend systems, hosting, APIs, and pragmatic fullstack delivery. When a customer project is the right fit, Crypt AB can take it from first release to ongoing operations.",
      ],
    },
    policies: {
      label: "> POLICIES_",
      intro: "Default billing and service terms. Service-specific agreements may define additional or overriding terms.",
      items: [
        {
          number: "01",
          title: "Refunds & Disputes",
          paragraphs: [
            "Payments for digital services, hosting, subscriptions, and setup work are generally non-refundable once the service period has started or delivery has begun, unless a service-specific agreement states otherwise.",
            "If you believe you were charged incorrectly or a service was not delivered as agreed, contact us through the contact form before opening a dispute. We will review the case and, where appropriate, issue a refund or other remedy.",
          ],
        },
        {
          number: "02",
          title: "Cancellation Policy",
          paragraphs: [
            "Recurring services can be cancelled before the next renewal date. Cancellation stops future billing, and access normally continues until the end of the paid term unless otherwise agreed.",
            "Completed setup work, delivered custom work, and already incurred service costs are not cancelled retroactively and are not refunded unless explicitly agreed in writing.",
          ],
        },
        {
          number: "03",
          title: "Legal & Export Restrictions",
          paragraphs: [
            "Services may not be used in violation of applicable Swedish, EU, or international law, including sanctions, export control rules, and restrictions on prohibited end-users or end-uses.",
            "We may refuse, limit, or terminate service where legal restrictions apply, including access from sanctioned or embargoed jurisdictions.",
          ],
        },
        {
          number: "04",
          title: "Promotions & Special Offers",
          paragraphs: [
            "Trials, discounts, and promotions apply only during the stated period, to the stated services, and subject to the stated eligibility criteria.",
            "Unless explicitly stated otherwise, promotions cannot be combined, applied retroactively, transferred, or exchanged for cash, and may be changed or withdrawn at any time.",
          ],
        },
      ],
      note: "If you need service-specific commercial terms, support commitments, or procurement language, contact us before purchase.",
    },
    contact: {
      label: "> CONTACT_",
      description: "Ask about our services, a partnership, or a customer-specific build.",
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
      headline: "Driftade tjänster, byggda in-house.",
      description: "> Crypt AB utvecklar och driver en egen portfölj av webbappar, tjänster, API:er och uppkopplade system. Vi tar också på oss utvalda kundprojekt när det finns en tydlig matchning.",
      cta: "[ HÖR AV DIG ]",
    },
    services: {
      label: "> TJÄNSTER_",
      items: [
        { number: "01", title: "Egna tjänster", description: "En växande portfölj av webbappar och tjänster som designas, ägs och drivs av Crypt AB." },
        { number: "02", title: "Hosting & Drift", description: "Stabil hosting, övervakning, backuper och underhåll för tjänster vi själva driver och utvalda kundsystem." },
        { number: "03", title: "Kundanpassade lösningar", description: "Nya tjänster, integrationer och interna verktyg för kunder när projektet passar vår plattform och produktinriktning." },
        { number: "04", title: "API:er & Backends", description: "Applikationsbackends, jobb, köer och API:er som stödjer både våra egna produkter och kundprojekt." },
        { number: "05", title: "Uppkopplade plattformar", description: "Molntjänster för enheter, telemetri, fjärrstyrning och andra uppkopplade produkter." },
        { number: "06", title: "Långsiktig leverans", description: "Från första version till löpande drift, med pragmatiska verktyg och kontinuerlig förbättring över tid." },
      ],
    },
    about: {
      label: "> OM OSS_",
      paragraphs: [
        "Crypt AB grundades 2013 av Johan Smolinski. Kärnerbjudandet idag är en växande portfölj av tjänster som byggs och drivs in-house, kompletterad med utvalda kundprojekt kring närliggande produkter, plattformar och integrationer.",
        "Det innebär att produktperspektiv och drift är lika viktiga som själva koden. Tjänsterna utformas för att vara användbara, underhållbara och hållbara över tid — oavsett om de är våra egna eller tas fram i nära samarbete med en kund.",
        "Arbetet vilar på backendsystem, hosting, API:er och pragmatisk fullstackleverans. När ett kundprojekt är rätt matchning kan Crypt AB ta ansvar från första leverans till löpande drift.",
      ],
    },
    policies: {
      label: "> POLICYER_",
      intro: "Standardvillkor för betalning och tjänster. Tjänstespecifika avtal kan innehålla tillägg eller avvikande villkor.",
      items: [
        {
          number: "01",
          title: "Återbetalningar och tvister",
          paragraphs: [
            "Betalningar för digitala tjänster, hosting, prenumerationer och uppstartsarbete återbetalas normalt inte när tjänsteperioden har startat eller leverans har påbörjats, om inte annat anges i ett tjänstespecifikt avtal.",
            "Om du anser att en debitering är felaktig eller att en tjänst inte levererats enligt överenskommelse, kontakta oss via kontaktformuläret innan du öppnar en korttvist. Vi granskar ärendet och erbjuder vid behov återbetalning eller annan lösning.",
          ],
        },
        {
          number: "02",
          title: "Avbokning och uppsägning",
          paragraphs: [
            "Löpande tjänster kan sägas upp före nästa förnyelsedatum. Uppsägning stoppar framtida debitering, och tillgången fortsätter normalt till slutet av den redan betalda perioden om inget annat avtalats.",
            "Genomfört uppstartsarbete, levererat kundanpassat arbete och redan uppkomna tjänstekostnader annulleras inte retroaktivt och återbetalas inte utan uttrycklig skriftlig överenskommelse.",
          ],
        },
        {
          number: "03",
          title: "Juridiska och exportrelaterade begränsningar",
          paragraphs: [
            "Tjänsterna får inte användas i strid med tillämplig svensk, europeisk eller internationell lagstiftning, inklusive sanktioner, exportkontrollregler samt begränsningar för förbjudna slutanvändare eller användningsområden.",
            "Vi kan neka, begränsa eller avsluta en tjänst där juridiska begränsningar gäller, inklusive åtkomst från sanktionerade eller embargobelagda jurisdiktioner.",
          ],
        },
        {
          number: "04",
          title: "Kampanjer och specialerbjudanden",
          paragraphs: [
            "Provperioder, rabatter och kampanjer gäller endast under angiven period, för angivna tjänster och enligt de villkor som anges för erbjudandet.",
            "Om inget annat uttryckligen anges kan kampanjer inte kombineras, tillämpas retroaktivt, överföras eller lösas in mot kontanter, och de kan ändras eller dras tillbaka när som helst.",
          ],
        },
      ],
      note: "Om du behöver tjänstespecifika kommersiella villkor, supportåtaganden eller upphandlingsspråk, kontakta oss före köp.",
    },
    contact: {
      label: "> KONTAKT_",
      description: "Fråga om våra tjänster, ett partnerskap eller en kundanpassad lösning.",
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
