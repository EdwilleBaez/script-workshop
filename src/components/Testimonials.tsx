import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const testimonials = [
  {
    quote: "Pensé que no podía escribir. Hoy tengo un guion terminado.",
    author: "María L."
  },
  {
    quote: "Aprendí que escribir mal también es avanzar.",
    author: "Carlos R."
  },
  {
    quote: "Por primera vez, terminé una historia.",
    author: "Ana P."
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-soft/30 relative overflow-hidden">
      {/* Dot tile pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary) / 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px"
        }}
      />
      
      {/* Decorative quote marks in background */}
      <motion.span 
        className="absolute top-20 left-20 text-[200px] font-serif text-primary/[0.03] leading-none select-none hidden xl:block"
        animate={{ 
          rotate: [-5, 5, -5],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        "
      </motion.span>
      
      <motion.span 
        className="absolute bottom-20 right-20 text-[200px] font-serif text-primary/[0.03] leading-none select-none rotate-180 hidden xl:block"
        animate={{ 
          rotate: [185, 175, 185],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      >
        "
      </motion.span>
      
      {/* Floating circles */}
      <motion.div 
        className="absolute top-1/3 left-10 w-24 h-24 border border-accent/20 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-10 w-16 h-16 bg-primary/5 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Testimonios
            </p>
          </motion.div>
          
          {/* Testimonials grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-6 p-6 relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Hover background */}
                <motion.div 
                  className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
                
                {/* Avatar placeholder */}
                <motion.div
                  className="mx-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <ImagePlaceholder 
                    aspectRatio="aspect-square"
                    label=""
                    showIcon={false}
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                </motion.div>
                
                {/* Quote mark */}
                <motion.div 
                  className="text-5xl font-serif text-primary/20 leading-none"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  "
                </motion.div>
                
                <blockquote className="text-lg font-serif italic text-foreground leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                
                <div className="flex items-center justify-center gap-2">
                  <motion.div 
                    className="w-8 h-px bg-primary/30"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 32 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                  />
                  <cite className="text-sm text-muted-foreground not-italic">
                    {testimonial.author}
                  </cite>
                  <motion.div 
                    className="w-8 h-px bg-primary/30"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 32 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom gallery image placeholder */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[1, 2, 3, 4].map((i) => (
              <ImagePlaceholder 
                key={i}
                aspectRatio="aspect-square"
                label=""
                showIcon={false}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
