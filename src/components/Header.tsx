import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="font-serif text-xl tracking-tight">
            Tu primer guion<span className="text-primary">.</span>
          </a>

          {/* Navigation - minimal */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#taller-gratuito"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Introducción al guion
            </a>
            <a
              href="#intensivo"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Laboratorio de guion
            </a>
            <a
              href="#mentorias"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentorías
            </a>
          </nav>

          {/* CTA */}
          <Button variant="outline" size="sm" asChild>
            <a href="#inscripcion">Agendar</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
