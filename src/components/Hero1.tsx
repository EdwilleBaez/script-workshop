import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft/50 to-background" />
      
      <div className="section-container relative z-10 text-center py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8 fade-in-up">
          {/* Small eyebrow text */}
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">
            Mentoría de guion cinematográfico
          </p>
          
          {/* Main headline */}
          <h1 className="text-balance leading-tight">
            Escribir un guion no es un talento.
            <br />
            <span className="text-primary">Es un proceso que se aprende.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto text-balance font-serif italic">
            Si quieres escribir tu primer guion, pero no sabes por dónde empezar, 
            estás en el lugar correcto.
          </p>
          
          {/* CTA */}
          <div className="pt-6 space-y-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://chat.whatsapp.com/D2XXUfOyALq1glqBq4mdfN?mode=gi_t" target="_blank" rel="noopener noreferrer">Inscribirme en el taller gratuito</a>
            </Button>
            <p className="text-sm text-muted-foreground">
              No necesitas experiencia previa. Solo ganas de escribir.
            </p>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-primary/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
