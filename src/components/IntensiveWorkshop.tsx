import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import notes from "@/assets/notes.jpg";
import script from "@/assets/script.jpg";


const IntensiveWorkshop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intensivo" className="section-padding bg-background relative overflow-hidden">
      {/* Cross pattern tile */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          backgroundPosition: "0 0, 18px 18px"
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-soft/50 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Film frame corner decorations */}
      <div className="absolute top-20 left-20 w-20 h-20 border-t border-l border-primary/10 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-20 h-20 border-b border-r border-primary/10 hidden lg:block" />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Divider line */}
          <motion.div 
            className="divider-wide mb-16"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                El siguiente paso
              </motion.p>
              
              <h2 className="text-balance">
                Escribir tu guion
                <span className="text-primary"> completo</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Para quienes deciden comprometerse con su historia.
                Un proceso de 6 meses con acompañamiento constante 
                hasta terminar un guion sólido.
              </p>
              
              {/* Image placeholder */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                {/* <ImagePlaceholder 
                  aspectRatio="aspect-video"
                  label="Imagen del proceso intensivo o resultado final"
                /> */}

                  <img
                  src={notes}
                  alt="nota de cuaderno vacía"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            
            {/* Right content - styled box */}
            <motion.div 
              className="relative p-8 border border-border bg-soft/20"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                borderColor: "hsl(var(--primary) / 0.3)",
                boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.1)"
              }}
            >
              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20" />
              
              <div className="space-y-6">
                {/* Small image */}
                {/* <ImagePlaceholder 
                  aspectRatio="aspect-[3/2]"
                  label="Imagen inspiracional"
                  showIcon={false}
                /> */}
                  <img
                  src={script}
                  alt="guion de cine"
                  className="w-full h-full object-cover"
                />
                
                <div className="space-y-3 font-serif italic text-lg text-foreground">
                  {["No es rápido.", "No es fácil.", "Pero es real."].map((text, index) => (
                    <motion.p 
                      key={index}
                      className={index === 2 ? "text-primary" : ""}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.15 }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
                
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" size="default" asChild>
                      <a href="#intensivo">Conocer el proceso completo</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntensiveWorkshop;
