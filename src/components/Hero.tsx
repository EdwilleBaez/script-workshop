import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import typewriterImage from "@/assets/typewriter-hands.jpg";
import image4 from "@/assets/image4.png";
import ImagePlaceholder from "./ImagePlaceholder";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={typewriterImage}
          alt="Escribiendo un guion"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Tile pattern overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated film strip decoration */}
      <motion.div
        className="absolute left-0 top-1/4 w-8 h-48 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-0 bottom-1/4 w-8 h-64 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{ y: [100, 0, 100] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small eyebrow text */}
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Mentoría de guion cinematográfico
            </motion.p>

            {/* Main headline */}
            <motion.h1
              className="text-balance leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Escribir un guion no es un talento.
              <br />
              <span className="text-primary">
                Es un proceso que se aprende.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto lg:mx-0 text-balance font-serif italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Si quieres escribir tu primer guion, pero no sabes por dónde
              empezar, estás en el lugar correcto.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="pt-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#taller-gratuito">Inscribirme en el taller gratuito</a>
              </Button>
              <p className="text-sm text-muted-foreground">
                No necesitas experiencia previa. Solo ganas de escribir.
              </p>
            </motion.div>
          </motion.div>

          {/* Hero image placeholder */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* <ImagePlaceholder
              aspectRatio="aspect-[4/5]"
              label="Imagen principal del mentor o escena cinematográfica"
            /> */}
            <img
              src={image4}
              alt="Escribiendo un guion"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 64 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-primary/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
