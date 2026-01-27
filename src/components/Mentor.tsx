import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import filmReelsImage from "@/assets/film-reels.jpg";
import ImagePlaceholder from "./ImagePlaceholder";
import mentor from "@/assets/mentor.png"


const Mentor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Cross pattern tile */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px),
            radial-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      {/* Decorative elements */}
      <motion.div
        className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-soft/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="absolute -left-20 bottom-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            {/* Main image - left side */}
            <motion.div
              className="md:col-span-2 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main image placeholder for mentor photo */}
                {/* <ImagePlaceholder
                  aspectRatio="aspect-[3/4]"
                  label="Foto del mentor"
                  className="shadow-2xl"
                /> */}

                <img
                  src={mentor}
                  alt="Escribiendo un guion"
                  className="w-full h-full object-cover"
                />

                {/* Small decorative image */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 shadow-lg hidden md:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={filmReelsImage}
                    alt="Cine"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative frame corners */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary/30" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
              </div>
            </motion.div>

            {/* Content - right side */}
            <motion.div
              className="md:col-span-3 order-1 md:order-2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-sm uppercase tracking-[0.2em] text-primary font-sans"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Sobre el mentor
              </motion.p>

              <h2 className="text-balance">
                No soy un gurú del cine.
                <br />
                Soy alguien que ya pasó por ahí.
              </h2>

              <div className="space-y-4 text-muted-foreground">
                {[
                  "Sé lo que es dudar de cada escena.",
                  "Sé lo que es pensar que no eres suficiente.",
                  "Y sé que el guion solo aparece cuando te permites escribirlo.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
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
                <p className="text-xl font-serif italic text-foreground">
                  Mi trabajo es acompañarte en ese primer paso.
                </p>
              </motion.div>

              {/* Subtle divider */}
              <motion.div
                className="pt-6"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="w-16 h-px bg-primary/30" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
