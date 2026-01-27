import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="inscripcion" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Decorative element */}
          <div className="flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
          
          <h2 className="text-balance">
            No esperes a sentirte listo.
            <br />
            <span className="text-primary">Empieza escribiendo.</span>
          </h2>
          
          {/* Form area */}
          <div className="pt-6 space-y-6">
            <div className="max-w-md mx-auto space-y-4">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              
              <Button variant="cta" className="w-full" size="lg">
                Inscribirme al taller gratuito
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              Tu primer guion empieza con una página en blanco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
