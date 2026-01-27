const testimonials = [
  {
    quote: "Pensé que no podía escribir. Hoy tengo un guion terminado.",
    author: "María L."
  },
  {
    quote: "Aprendí que escribir mal también es avanzar.",
    author: "Carlos R."
  },
  {
    quote: "Por primera vez, terminé una historia.",
    author: "Ana P."
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-soft/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Testimonios
            </p>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="text-center space-y-6 p-6"
              >
                {/* Quote mark */}
                <div className="text-5xl font-serif text-primary/20 leading-none">
                  "
                </div>
                
                <blockquote className="text-lg font-serif italic text-foreground leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-px bg-primary/30" />
                  <cite className="text-sm text-muted-foreground not-italic">
                    {testimonial.author}
                  </cite>
                  <div className="w-8 h-px bg-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
