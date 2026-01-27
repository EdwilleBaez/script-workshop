import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const mentorships = [
  {
    title: "Mentoría individual",
    description: "Sesiones personalizadas para trabajar tu guion a tu ritmo. Feedback detallado y acompañamiento cercano.",
    features: ["1 sesión semanal", "Feedback escrito", "Ritmo personalizado"],
  },
  {
    title: "Mentoría grupal",
    description: "Aprende junto a otros escritores. Comparte tu proceso y recibe perspectivas diversas sobre tu trabajo.",
    features: ["Grupos reducidos", "Comunidad de apoyo", "Lecturas cruzadas"],
  },
  {
    title: "Mentoría de proyecto",
    description: "Para quienes ya tienen un guion en desarrollo. Te acompaño hasta la versión final lista para presentar.",
    features: ["Hasta 3 meses", "Enfoque intensivo", "Guion terminado"],
  },
];

const Mentorships = () => {
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
    <section id="mentorias" className="section-padding bg-background relative overflow-hidden">
      {/* Film strip pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 12px, hsl(var(--primary) / 0.03) 12px, hsl(var(--primary) / 0.03) 24px)"
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-soft/40 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Header with image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <ImagePlaceholder 
                aspectRatio="aspect-video"
                label="Imagen de sesión de mentoría o trabajo colaborativo"
              />
            </motion.div>
            
            {/* Header text */}
            <motion.div 
              className="text-center lg:text-left space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
                Mentorías
              </p>
              <h2 className="text-balance">
                Acompañamiento real,
                <br />
                <span className="text-primary">a tu medida</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Cada escritor tiene su propio ritmo. Elige el formato que mejor se adapte a ti.
              </p>
            </motion.div>
          </div>

          {/* Mentorship cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {mentorships.map((mentorship, index) => (
              <motion.div
                key={index}
                className="group p-8 bg-soft/30 border border-border/50 hover:border-primary/30 hover:bg-soft/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="space-y-6">
                  {/* Image placeholder for each mentorship */}
                  <ImagePlaceholder 
                    aspectRatio="aspect-[4/3]"
                    label={`Imagen ${mentorship.title.toLowerCase()}`}
                    showIcon={false}
                    className="mb-4"
                  />
                  
                  {/* Number */}
                  <motion.span 
                    className="text-primary/30 font-serif text-4xl"
                    whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  {/* Title */}
                  <h3 className="text-2xl font-serif">{mentorship.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {mentorship.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 pt-2">
                    {mentorship.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.div 
                          className="w-1 h-1 bg-primary rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.3 }}
                        />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Subtle divider */}
                  <div className="pt-4">
                    <motion.div 
                      className="h-px bg-primary/20 group-hover:bg-primary/40 transition-all duration-500"
                      initial={{ width: 48 }}
                      whileHover={{ width: "100%" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom note */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground italic font-serif">
              ¿No sabes cuál elegir? Escríbeme y lo conversamos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mentorships;
