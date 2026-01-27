const Problem = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Divider */}
          <div className="divider mb-12" />
          
          <h2 className="text-balance">
            No es que no puedas escribir.
            <br />
            <span className="text-primary">Es que nadie te enseñó cómo empezar.</span>
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg md:text-xl font-light">
              La mayoría abandona antes de escribir la primera página.
            </p>
            <p className="text-lg md:text-xl font-light">
              No por falta de ideas, sino por miedo a hacerlo mal, 
              a no ser suficiente, a no "saber cine".
            </p>
          </div>
          
          {/* Key message */}
          <div className="pt-8">
            <p className="text-xl md:text-2xl font-serif italic text-foreground">
              Aquí no venimos a impresionar.
              <br />
              Venimos a escribir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
