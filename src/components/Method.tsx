import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import screenplayImage from "@/assets/screenplay-desk.jpg";
import ImagePlaceholder from "./ImagePlaceholder";

const methodPoints = [
  {
    title: "Escribir sin juicio",
    description: "La primera versión no tiene que ser perfecta. Solo tiene que existir."
  },
  {
    title: "Entender estructura sin rigidez",
    description: "Aprende las reglas para después saber cuándo romperlas."
  },
  {
    title: "Avanzar incluso con dudas",
    description: "La claridad llega escribiendo, no antes."
  },
  {
    title: "Acompañamiento real",
    description: "No fórmulas mágicas. Proceso honesto y personalizado."
  }
];

const Method = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-soft/30 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={screenplayImage} 
          alt="Guiones de cine" 
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-soft/80 via-soft/90 to-background" />
      </div>
      
      {/* Diagonal tile pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 25px, hsl(var(--primary) / 0.02) 25px, hsl(var(--primary) / 0.02) 26px)"
        }}
      />
      
      {/* Decorative shapes */}
      <motion.div 
        className="absolute -right-20 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute left-10 bottom-10 w-40 h-40 border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Header with image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="text-center lg:text-left space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
                Enfoque
              </p>
              <h2 className="text-balance">
                Primero se escribe.
                <br />
                Después, se mejora.
              </h2>
            </motion.div>
            
            {/* Small image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImagePlaceholder 
                aspectRatio="aspect-[16/9]"
                label="Imagen del proceso creativo"
              />
            </motion.div>
          </div>
          
          {/* Method points grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {methodPoints.map((point, index) => (
              <motion.div 
                key={index} 
                className="group p-6 bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <motion.span 
                      className="text-primary/40 font-serif text-2xl"
                      whileHover={{ scale: 1.2, color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif">{point.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Method;
