import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const WhyIDoThis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="por-que" className="section-padding bg-background relative overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Large decorative quote marks */}
      <motion.span 
        className="absolute top-10 left-10 text-[300px] font-serif text-primary/[0.03] leading-none select-none hidden lg:block"
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          y: [0, -10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        "
      </motion.span>
      
      <motion.span 
        className="absolute bottom-10 right-10 text-[300px] font-serif text-primary/[0.03] leading-none select-none rotate-180 hidden lg:block"
        animate={{ 
          opacity: [0.03, 0.06, 0.03],
          y: [0, 10, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      >
        "
      </motion.span>
      
      {/* Floating circles */}
      <motion.div 
        className="absolute top-1/4 right-20 w-32 h-32 border border-accent/30 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-20 w-20 h-20 bg-soft/50 rounded-full blur-xl"
        animate={{ 
          x: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <ImagePlaceholder 
                  aspectRatio="aspect-[4/5]"
                  label="Imagen personal o inspiracional"
                />
                
                {/* Small floating image */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-28 h-28 hidden md:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <ImagePlaceholder 
                    aspectRatio="aspect-square"
                    label=""
                    showIcon={false}
                    className="shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Text content */}
            <motion.div 
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Label */}
              <motion.p 
                className="text-sm uppercase tracking-[0.2em] text-primary font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Por qué hago esto
              </motion.p>

              {/* Main quote */}
              <motion.h2 
                className="text-balance leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Porque alguien me acompañó
                <br />
                <span className="text-primary">cuando yo no sabía cómo empezar.</span>
              </motion.h2>

              <motion.div 
                className="w-16 h-px bg-primary/30"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              />

              <motion.div 
                className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {[
                  "Hubo un momento en el que yo también miraba la página en blanco preguntándome si tenía algo que contar.",
                  "Alguien me dijo que sí. Que la historia ya estaba ahí, solo necesitaba permiso para escribirla.",
                  "Hoy quiero ser esa voz para ti."
                ].map((text, index) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div 
                className="w-16 h-px bg-primary/30"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
              />

              <motion.p 
                className="text-foreground font-serif text-xl italic"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                "No hago esto para crear escritores perfectos.
                <br />
                Lo hago para que termines lo que empiezas."
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIDoThis;
