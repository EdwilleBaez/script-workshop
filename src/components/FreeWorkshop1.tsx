import { Button } from "@/components/ui/button";

import { Calendar, Clock, CalendarDays } from "lucide-react";

const features = [
  "Duración: 1 mes",
  "100% online",
  "Sin costo",
  "Sin presión"
];

const FreeWorkshop = () => {
  return (
    <section id="taller-gratuito" className="section-padding bg-soft/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Label */}
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm tracking-wide">
            Taller gratuito
          </div>
          
          <h2 className="text-balance">
            Taller base gratuito
            <br />
            <span className="text-primary">Un mes para empezar sin miedo</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Un espacio guiado donde aprenderás los fundamentos del guion y, 
            sobre todo, a terminar lo que empiezas.
          </p>
          
          {/* Schedule Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-6 px-8 bg-background border border-border/50 max-w-xl mx-auto">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Mes</p>
                <p className="font-serif text-foreground">Febrero 2025</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Día</p>
                <p className="font-serif text-foreground">Sábados</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Hora</p>
                <p className="font-serif text-foreground">10:00 AM (CDMX)</p>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="pt-8 space-y-4">
            <Button variant="cta" size="lg" asChild>
              <a 
                href="https://calendly.com/tu-usuario/taller-gratuito" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Reservar mi lugar en Calendly
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Al agendar recibirás un correo con el enlace de Zoom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeWorkshop;
