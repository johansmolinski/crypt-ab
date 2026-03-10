const AboutSection = () => {
  return (
    <section id="about" className="border-b border-border px-6 lg:px-12 py-16">
      <p className="text-label mb-8">&gt; ABOUT_</p>
      <div className="max-w-[58ch]">
        <p className="text-foreground text-sm leading-[1.85] mb-6 crt-glow">
          Crypt AB was founded in 2013 by Johan Smolinski. We do not pretend to be a large agency. We are an independent consultancy providing senior expertise in backend development, cloud architecture, and platform-side IoT solutions.
        </p>
        <p className="text-foreground text-sm leading-[1.85] mb-6 crt-glow">
          The approach is grounded in pragmatic problem-solving, long-term thinking, and a commitment to building software that simply works. Every engagement benefits from over two decades of hands-on experience with complex systems, distributed architectures, and real-world constraints.
        </p>
        <p className="text-muted-foreground text-sm leading-[1.85]">
          When the project calls for it, Crypt AB delivers pragmatic fullstack solutions — leveraging modern tooling and AI-assisted development to ship complete, working products without unnecessary overhead.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
