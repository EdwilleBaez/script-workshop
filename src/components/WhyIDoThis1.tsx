const WhyIDoThis = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
            Por qué hago esto
          </p>

          <h2 className="text-balance">
            Porque alguien me acompañó
            <br />
            <span className="text-primary">
              cuando yo no sabía cómo empezar.
            </span>
          </h2>

          <div className="divider mb-12" />

          <div className="space-y-6 text-muted-foreground">
            <p>
              Hubo un momento en el que yo también miraba la página en blanco
              preguntándome si tenía algo que contar.
            </p>
            <p>
              Alguien me dijo que sí. Que la historia ya estaba ahí, solo
              necesitaba permiso para escribirla.
            </p>
            <p>Hoy quiero ser esa voz para ti.</p>
          </div>

          <div className="divider mb-12" />

          <p className="text-xl font-serif italic text-foreground">
            "No hago esto para crear escritores perfectos.
            <br />
            Lo hago para que termines lo que empiezas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyIDoThis;
