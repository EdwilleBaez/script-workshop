import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CalendarDays,
  PenTool,
  Users,
  Timer,
  Target,
} from "lucide-react";
import { getNextMonthLabel } from "@/utils/getNetxMonthLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Duración: 4 semanas",
  "100% online",
  "Sin costo",
  "Sin presión",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FreeWorkshop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="taller-gratuito" className="section-padding bg-soft/50">
      <div className="section-container">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm tracking-wide"
          >
            Taller gratuito
          </motion.div>

          {/* Title */}
          <motion.h2 variants={fadeUp} className="text-balance">
            Introducción al guion
            <br />
            <span className="text-primary">
              4 semanas para empezar sin miedo
            </span>
          </motion.h2>

          {/* Description */}
          {/* <motion.p
            variants={fadeUp}
            className="text-xl text-muted-foreground max-w-xl mx-auto"
          >
            Un espacio guiado donde aprenderás los fundamentos del guion y,
            sobre todo, a terminar lo que empiezas.
          </motion.p> */}

          {/* Info Cards */}
          <div ref={ref} className="grid sm:grid-cols-2 gap-4 pt-2">
            {[
              {
                icon: Target,
                title: "Tu escritura importa",
                text: "Aprenderás los fundamentos del guion y, sobre todo, a terminar lo que empiezas.",
                highlight: "Termina tu guion",
              },
              {
                icon: Timer,
                title: "Mínimo 2 horas diarias",
                text: "Compromiso real con tu escritura para trabajar en ejercicios y avanzar en tu guion.",
                highlight: "Compromiso real",
              },
              {
                icon: Users,
                title: "1 sesión semanal",
                text: "Nos reunimos de forma virtual, pero tu progreso depende del trabajo constante del día a día.",
                highlight: "Virtual en vivo",
              },
              {
                icon: PenTool,
                title: "Hazle tiempo",
                text: 'No es para hacerlo "cuando puedas". Es para hacerle tiempo a lo que quieres terminar.',
                highlight: "Disciplina creativa",
              },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  className="p-5 bg-background/80 backdrop-blur-sm border border-border/50 space-y-3 hover:border-primary/30 transition-colors duration-300 group text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 24px -8px hsl(var(--primary) / 0.15)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                        {card.highlight}
                      </span>
                      <h4 className="text-2xl font-semibold font-serif text-foreground leading-tight">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Schedule Info */}
          <motion.div
            variants={scaleIn}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 py-6 px-8 bg-background border border-border/50 w-full mx-auto"
          >
            {/* Mes */}
            <div className="flex items-start gap-3">
              <CalendarDays className="w-5 h-5 text-primary mt-1" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Mes
                </p>
                <p className="font-serif text-foreground">
                  {getNextMonthLabel()}
                </p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden sm:block" />

            {/* Días */}
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-primary mt-1" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Días
                </p>
                <p className="font-serif text-foreground">Lunes</p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden sm:block" />

            {/* Hora */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Hora
                </p>
                <p className="font-serif text-foreground leading-tight">
                  06:30 PM <br /> (Rep. Dom.)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="pt-8 space-y-4">
            <Button variant="cta" size="lg" asChild>
              <a
                href="https://chat.whatsapp.com/D2XXUfOyALq1glqBq4mdfN?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar mi lugar
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              Únete a nuestro grupo de WhatsApp para coordinar los detalles.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeWorkshop;
