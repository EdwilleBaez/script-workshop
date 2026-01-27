const Mentor = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            {/* Image placeholder - left side */}
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="aspect-[3/4] bg-gradient-to-br from-soft via-accent to-muted/50 flex items-end justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-2 p-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-serif text-primary">M</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">Tu mentor</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content - right side */}
            <div className="md:col-span-3 order-1 md:order-2 space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
                Sobre el mentor
              </p>
              
              <h2 className="text-balance">
                No soy un gurú del cine.
                <br />
                Soy alguien que ya pasó por ahí.
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Sé lo que es dudar de cada escena.
                </p>
                <p className="text-lg">
                  Sé lo que es pensar que no eres suficiente.
                </p>
                <p className="text-lg">
                  Y sé que el guion solo aparece cuando te permites escribirlo.
                </p>
              </div>
              
              <div className="pt-4">
                <p className="text-xl font-serif italic text-foreground">
                  Mi trabajo es acompañarte en ese primer paso.
                </p>
              </div>
              
              {/* Subtle divider */}
              <div className="pt-6">
                <div className="w-16 h-px bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
