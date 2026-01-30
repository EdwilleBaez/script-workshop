import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, UsersRound, Clock, Video, MessageSquare, FileEdit, Calendar, Target } from "lucide-react";

const dynamics = [
  {
    type: "individual",
    icon: User,
    title: "Mentoría Individual",
    subtitle: "1 a 1 — Atención exclusiva",
    description:
      "Sesiones privadas donde trabajamos únicamente en tu proyecto. Ritmo completamente adaptado a tus tiempos y necesidades.",
    features: [
      { icon: Clock, text: "Sesiones de 60 min" },
      { icon: Video, text: "Videollamada privada" },
      { icon: FileEdit, text: "Feedback escrito detallado" },
      { icon: Calendar, text: "Horarios flexibles" },
    ],
    benefits: [
      "Atención 100% personalizada",
      "Profundidad en tu proyecto específico",
      "Ritmo adaptado a tu vida",
      "Confidencialidad total",
    ],
    accent: "primary",
  },
  {
    type: "group-medium",
    icon: UsersRound,
    title: "Mentoría Grupal",
    subtitle: "6–8 participantes — Comunidad y diversidad",
    description:
      "Grupos medianos con diversidad de voces y proyectos. Ideal para recibir feedback de varios compañeros y compartir experiencias.",
    features: [
      { icon: Clock, text: "Sesiones de 90–120 min" },
      { icon: UsersRound, text: "6 a 8 participantes" },
      { icon: MessageSquare, text: "Lecturas cruzadas y discusión" },
      { icon: Calendar, text: "Sesiones quincenales" },
    ],
    benefits: [
      "Feedback diverso y enriquecedor",
      "Red de apoyo entre escritores",
      "Aprende de otros proyectos",
      "Mayor exposición a diferentes estilos",
    ],
    accent: "primary",
  },
];

const MentorshipDynamics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-soft/30 relative overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative blurs */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm tracking-wide mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Dinámica de las mentorías
            </motion.div>
            <h2 className="text-balance mb-4">
              Elige cómo quieres <span className="text-primary">trabajar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada formato tiene su propia dinámica. Encuentra el que mejor se adapte a tu estilo de aprendizaje.
            </p>
          </motion.div>

          {/* Mentorships */}
          <div className="grid lg:grid-cols-2 gap-8">
            {dynamics.map((dynamic, index) => {
              const Icon = dynamic.icon;
              return (
                <motion.div
                  key={index}
                  className="p-8 bg-background border border-border/50 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                  whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-14 h-14 bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-serif text-foreground">
                        {dynamic.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {dynamic.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {dynamic.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {dynamic.features.map((feature, i) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <FeatureIcon className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Benefits */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Beneficios
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dynamic.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-soft text-muted-foreground text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipDynamics;
