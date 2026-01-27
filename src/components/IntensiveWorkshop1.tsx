import { Button } from "@/components/ui/button";

const IntensiveWorkshop = () => {
  return (
    <section id="intensivo" className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Divider line */}
          <div className="divider-wide mb-16" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">
                Laboratorio
              </p>
              
              <h2 className="text-balance">
                Escribir tu guion
                <span className="text-primary"> completo</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Para quienes deciden comprometerse con su historia.
                Un proceso de 3 meses con acompañamiento constante 
                desde el inicio hasta terminar un guion sólido.
              </p>
            </div>
            
            {/* Right content - styled box */}
            <div className="p-8 border border-border bg-soft/20">
              <div className="space-y-6">
                <div className="space-y-3 font-serif italic text-lg text-foreground">
                  <p>No es rápido.</p>
                  <p>No es fácil.</p>
                  <p className="text-primary">Pero es real.</p>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" size="default" asChild>
                    <a href="#intensivo">Conocer el proceso completo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntensiveWorkshop;
