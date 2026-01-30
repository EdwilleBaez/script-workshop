import { motion } from "framer-motion";
import {
  FlaskConical,
  Users,
  Clock,
  Pencil,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import laboratory1 from "@/assets/laboratory1.jpg";
import laboratory2 from "@/assets/laboratory2.jpg";
import laboratory3 from "@/assets/laboratory3.jpg";
import laboratory4 from "@/assets/laboratory4.jpg";
import laboratory5 from "@/assets/laboratory5.jpg";

const Laboratory = () => {
  const phases = [
    {
      week: "Semanas 1-4",
      title: "Ideación y estructura",
      description:
        "Exploramos ideas, definimos el concepto y construimos la estructura narrativa",
    },
    {
      week: "Semanas 5-8",
      title: "Desarrollo y personajes",
      description:
        "Damos vida a los personajes y desarrollamos el tratamiento completo",
    },
    {
      week: "Semanas 9-12",
      title: "Escritura y pulido",
      description:
        "Escribimos el guión escena por escena hasta tener un borrador terminado",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 tile-crosses opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-8"
        >
          {/* <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <FlaskConical className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Nuevo formato
            </span>
          </div> */}
          <div className="inline-flex gap-2 px-4 py-1 bg-primary/10 text-primary text-sm tracking-wide">
            Nuevo
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            El Laboratorio
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            3 meses para crear tu guión desde cero, paso a paso, hasta
            terminarlo
          </p>
        </motion.div>

        {/* Differentiation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto"
        >
          {/* Mentorship Card */}
          <div className="bg-muted/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4">
              <Lightbulb className="w-6 h-6 text-muted-foreground/50" />
            </div>
            <h3 className="font-display text-2xl mb-4">La Mentoría</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="font-semibold text-foreground">
                Acompañamos tu idea.
              </span>{" "}
              Ya tienes un proyecto en mente o en desarrollo. Te guío, resuelvo
              dudas y te ayudo a llevarlo al siguiente nivel.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Revisión de tu material existente
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Retroalimentación personalizada
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Ritmo según tu avance
              </li>
            </ul>
          </div>

          {/* Laboratory Card */}
          <div className="bg-primary/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 relative">
            <div className="absolute top-4 right-4">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl mb-4 text-primary">
              El Laboratorio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="font-semibold text-foreground">
                Creamos juntos desde cero.
              </span>{" "}
              No necesitas tener nada previo. Construimos tu guión paso a paso,
              desde la primera idea hasta el borrador final.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Proceso guiado semana a semana
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Ejercicios y entregas estructuradas
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                Resultado: tu guión terminado
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-border/50">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-display text-2xl">15</p>
                  <p className="text-sm text-muted-foreground">participantes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-border/50">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-display text-2xl">12</p>
                  <p className="text-sm text-muted-foreground">semanas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-border/50">
                <Pencil className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-display text-2xl">1</p>
                  <p className="text-sm text-muted-foreground">
                    guión terminado
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                El Laboratorio es un espacio intensivo donde{" "}
                <span className="text-foreground font-medium">
                  no solo aprendes, sino que produces
                </span>
                . Durante 12 semanas trabajamos en grupo, con entregas semanales
                y retroalimentación constante.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Al finalizar, cada participante tiene un{" "}
                <span className="text-foreground font-medium">
                  guión completo listo para presentar
                </span>
                . Tres meses de trabajo enfocado
                <span className="text-foreground font-medium">
                  , entregas semanales y feedback continuo
                </span>
                .
              </p>
              <div className="space-y-3 font-serif italic text-lg text-foreground">
                <p>No es rápido.</p>
                <p>No es fácil.</p>
                <p className="text-primary">
                  Pero garantiza resultados reales.
                </p>
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-4">
              <h4 className="font-display text-xl">El proceso</h4>
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium">
                      {phase.week}
                    </p>
                    <p className="font-display text-lg">{phase.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* <ImagePlaceholder
              aspectRatio="aspect-[4/3]"
              label="Sesión del Laboratorio"
              className="rounded-2xl"
            /> */}
            <img
              src={laboratory4}
              alt="Escribiendo un guion"
              className="w-full h-full object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              {/* <ImagePlaceholder
                aspectRatio="aspect-square"
                label="Proceso creativo"
                className="rounded-xl"
              /> 
              <ImagePlaceholder
                aspectRatio="aspect-square"
                label="Trabajo en equipo"
                className="rounded-xl"
              /> */}
              <img
                src={laboratory1}
                alt="Escribiendo un guion"
                className="w-full h-full object-cover"
              />
              <img
                src={laboratory5}
                alt="Escribiendo un guion"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Laboratory;
