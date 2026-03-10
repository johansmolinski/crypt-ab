const services = [
  {
    number: "01",
    title: "Backend Development",
    description: "Scalable, high-performance core systems built for longevity and maintainability.",
  },
  {
    number: "02",
    title: "Cloud Architecture",
    description: "Resilient infrastructure design, deployment, and operational strategy.",
  },
  {
    number: "03",
    title: "API & Integrations",
    description: "Secure, seamless data flow between platforms, services, and third-party systems.",
  },
  {
    number: "04",
    title: "IoT / Connected Services",
    description: "Cloud-side platform engineering for physical devices and sensor networks.",
  },
  {
    number: "05",
    title: "Technical Leadership",
    description: "Solution design, architectural guidance, and pragmatic decision-making.",
  },
  {
    number: "06",
    title: "Pragmatic Fullstack",
    description: "End-to-end delivery utilizing modern AI-assisted tooling when the project requires it.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-b border-border">
      <div className="px-6 lg:px-12 py-12">
        <p className="text-label mb-8">SERVICES</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.number}
            className="border-t border-border md:odd:border-r px-6 lg:px-12 py-8"
          >
            <span className="text-label block mb-3">{service.number}</span>
            <h3 className="font-heading text-lg font-700 text-foreground mb-2">
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
