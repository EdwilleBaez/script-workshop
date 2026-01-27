const methodPoints = [
  {
    title: "Escribir sin juicio",
    description: "La primera versión no tiene que ser perfecta. Solo tiene que existir."
  },
  {
    title: "Entender estructura sin rigidez",
    description: "Aprende las reglas para después saber cuándo romperlas."
  },
  {
    title: "Avanzar incluso con dudas",
    description: "La claridad llega escribiendo, no antes."
  },
  {
    title: "Acompañamiento real",
    description: "No fórmulas mágicas. Proceso honesto y personalizado."
  }
];

const Method = () => {
  return (
    <section className="section-padding bg-soft/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Enfoque
            </p>
            <h2 className="text-balance">
              Primero se escribe.
              <br />
              Después, se mejora.
            </h2>
          </div>
          
          {/* Method points grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {methodPoints.map((point, index) => (
              <div 
                key={index} 
                className="group p-6 bg-background/60 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-primary/40 font-serif text-2xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif">{point.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
