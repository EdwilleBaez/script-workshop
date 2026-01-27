import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import image4 from "@/assets/image4.png";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid tile pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <motion.div
        className="absolute -left-32 top-1/2 w-64 h-64 bg-soft/50 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating quote marks */}
      <motion.span
        className="absolute top-20 right-20 text-[200px] font-serif text-primary/5 leading-none select-none hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        "
      </motion.span>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder - left */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* <ImagePlaceholder
              aspectRatio="aspect-square"
              label="Imagen de página en blanco o escritor pensando"
            /> */}
            <img
              src={image4}
              alt="Escribiendo un guion"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text content - right */}
          <motion.div
            className="order-1 lg:order-2 max-w-xl space-y-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Divider */}
            <motion.div
              className="divider lg:mx-0"
              initial={{ width: 0 }}
              animate={isInView ? { width: 48 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            <motion.h2
              className="text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              No es que no puedas escribir.
              <br />
              <span className="text-primary">
                Es que nadie te enseñó cómo empezar.
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl font-light">
                La mayoría abandona antes de escribir la primera página.
              </p>
              <p className="text-lg md:text-xl font-light">
                No por falta de ideas, sino por miedo a hacerlo mal, a no ser
                suficiente, a no "saber cine".
              </p>
            </motion.div>

            {/* Key message */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-serif italic text-foreground">
                Aquí no venimos a impresionar.
                <br />
                Venimos a escribir.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
