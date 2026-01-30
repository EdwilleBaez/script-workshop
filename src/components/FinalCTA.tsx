import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="inscripcion"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary) / 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative background elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-soft/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radial lines decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-primary/10 to-transparent origin-bottom"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-200px)`,
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={isInView ? { opacity: 1, height: 128 } : {}}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
          />
        ))}
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border-t border-l border-primary/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 border-b border-r border-primary/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3 }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image gallery side */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label=""
                showIcon={false}
              /> */}

              <div className="aspect-[3/4] overflow-hidden">
                <img src={image1} alt="..." className=" object-cover" />
              </div>

              <div className="space-y-4">
                {/* <ImagePlaceholder
                  aspectRatio="aspect-square"
                  label=""
                  showIcon={false}
                />
                <ImagePlaceholder
                  aspectRatio="aspect-video"
                  label=""
                  showIcon={false}
                /> */}

                <div className="aspect-square overflow-hidden">
                  <img
                    src={image3}
                    alt="Escribiendo un guion"
                    className=" object-cover"
                  />
                </div>

                <div className="aspect-video overflow-hidden">
                  <img
                    src={image2}
                    alt="Escribiendo un guion"
                    className=" object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Form side */}
            <motion.div
              className="text-center lg:text-left mt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative element */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, height: 0 }}
                animate={isInView ? { opacity: 1, height: 48 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
              </motion.div>

              <motion.h2
                className="text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                No esperes a sentirte listo.
                <br />
                <span className="text-primary">Empieza escribiendo.</span>
              </motion.h2>

              {/* Form area */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="pt-2">
                  {/* <div className="space-y-3">
                    <motion.input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      whileFocus={{ borderColor: "hsl(var(--primary))" }}
                    />
                    <motion.input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      whileFocus={{ borderColor: "hsl(var(--primary))" }}
                    />
                  </div> */}

                  <p className="text-xl md:text-xl text-foreground leading-relaxed">
                    Si llevas tiempo pensando en tu guion, ya estás listo para
                    empezarlo; empezamos desde donde estés.
                    <br />
                  </p>

                  <motion.div
                    className="py-5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="cta" className="w-full" size="lg" asChild>
                      <a
                        href="https://calendly.com/baezedwille/mentoria"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar mentoría
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <motion.p
                  className="text-sm text-muted-foreground italic"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  Tu primer guion empieza con una página en blanco.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
