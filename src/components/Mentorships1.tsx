const mentorships = [
  {
    title: "Mentoría individual",
    description: "Sesiones personalizadas para trabajar tu guion a tu ritmo. Feedback detallado y acompañamiento cercano.",
    features: ["1 sesión semanal", "Feedback escrito", "Ritmo personalizado"],
  },
  {
    title: "Mentoría grupal",
    description: "Aprende junto a otros escritores. Comparte tu proceso y recibe perspectivas diversas sobre tu trabajo.",
    features: ["Grupos reducidos", "Comunidad de apoyo", "Lecturas cruzadas"],
  },
  {
    title: "Mentoría de proyecto",
    description: "Para quienes ya tienen un guion en desarrollo. Te acompaño hasta la versión final lista para presentar.",
    features: ["Hasta 3 meses", "Enfoque intensivo", "Guion terminado"],
  },
];

const Mentorships = () => {
  return (
    <section id="mentorias" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Mentorías
            </p>
            <h2 className="text-balance">
              Acompañamiento real,
              <br />
              <span className="text-primary">a tu medida</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Cada escritor tiene su propio ritmo. Elige el formato que mejor se adapte a ti.
            </p>
          </div>

          {/* Mentorship cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {mentorships.map((mentorship, index) => (
              <div
                key={index}
                className="group p-8 bg-soft/30 border border-border/50 hover:border-primary/30 hover:bg-soft/50 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Number */}
                  <span className="text-primary/30 font-serif text-4xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-serif">{mentorship.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {mentorship.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    {mentorship.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subtle divider */}
                  <div className="pt-4">
                    <div className="w-12 h-px bg-primary/20 group-hover:w-full group-hover:bg-primary/40 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic font-serif">
              ¿No sabes cuál elegir? Escríbeme y lo conversamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorships;
