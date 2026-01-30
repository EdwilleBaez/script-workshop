import { Button } from "@/components/ui/button";
import { Calendar, Clock, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import zoomMeeting from "@/assets/zoom.jpg";

const features = ["Duración: 4 semanas", "100% online", "Sin costo", "Sin presión"];

const FreeWorkshop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="taller-gratuito"
      className="section-padding bg-soft/50 relative overflow-hidden"
    >
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--primary) / 0.03) 20px, hsl(var(--primary) / 0.03) 21px)",
        }}
      />

      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Film strip decorations */}
      <div className="absolute left-8 top-0 bottom-0 w-2 hidden lg:flex flex-col justify-center gap-4">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-8 bg-primary/10 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              delay: i * 0.2,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute right-8 top-0 bottom-0 w-2 hidden lg:flex flex-col justify-center gap-4">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-8 bg-primary/10 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.1, 0.3] }}
            transition={{
              delay: i * 0.2,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* <ImagePlaceholder 
                  aspectRatio="aspect-[4/3]"
                  label="Imagen del taller o captura de sesión"
                  className="shadow-xl"
                /> */}

                <img
                  src={zoomMeeting}
                  alt="reunión de zoom"
                  className="w-full h-full object-cover"
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm font-medium">Virtual</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Label */}
              <motion.div
                className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm tracking-wide"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Taller gratuito
              </motion.div>

              <motion.h2
                className="text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Taller base gratuito
                <br />
                <span className="text-primary">
                  Un mes para empezar sin miedo
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Un espacio guiado donde aprenderás los fundamentos del guion y,
                sobre todo, a terminar lo que empiezas.
              </motion.p>

              {/* Schedule Info */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 py-6 px-8 bg-background/80 backdrop-blur-sm border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
              >
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Mes
                    </p>
                    <p className="font-serif text-foreground">Marzo 2026</p>
                  </div>
                </motion.div>
                <div className="w-px h-8 bg-border hidden sm:block" />
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Día
                    </p>
                    <p className="font-serif text-foreground">Martes</p>
                  </div>
                </motion.div>
                <div className="w-px h-8 bg-border hidden sm:block" />
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <Clock className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Hora
                    </p>
                    <p className="font-serif text-foreground">
                      07:00 PM  <br/> (Rep. Dom.)
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Features */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                className="pt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="cta" size="lg" asChild>
                    <a
                      href="https://chat.whatsapp.com/D2XXUfOyALq1glqBq4mdfN?mode=gi_t"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reservar mi lugar
                    </a>
                  </Button>
                </motion.div>
                <p className="text-sm text-muted-foreground">
                  Únete a nuestro grupo de WhatsApp para coordinar los detalles.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeWorkshop;
