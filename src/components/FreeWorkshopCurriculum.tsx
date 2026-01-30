import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, FileText } from "lucide-react";

const modules = [
  {
    week: "Semana 1-2",
    icon: Lightbulb,
    title: "Idea · Formato · Sinopsis · Tratamiento",
    topics: [
      "Cómo encontrar y desarrollar tu idea",
      "Elegir el formato adecuado",
      "Escribir una sinopsis efectiva",
      "Construir tu tratamiento",
    ],
  },
  {
    week: "Semana 2-3",
    icon: Users,
    title: "Creación de personajes · Estructura",
    topics: [
      "Personajes con profundidad y arco",
      "Motivaciones y conflictos internos",
      "Estructuras narrativas clásicas",
      "Encontrar tu propia estructura",
    ],
  },
  {
    week: "Semana 3-4",
    icon: FileText,
    title: "Escaleta · Diálogo · Tips",
    topics: [
      "Organizar escenas con escaleta",
      "Escribir diálogos naturales",
      "Errores comunes y cómo evitarlos",
      "Herramientas y consejos prácticos",
    ],
  },
];

const FreeWorkshopCurriculum = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
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
              Temario del taller
            </motion.div>
            <h2 className="text-balance mb-4">
              ¿Qué aprenderás en <span className="text-primary">un mes</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un recorrido completo por los fundamentos del guion, desde la idea
              inicial hasta el pulido final, poniendo en práctica lo aprendido a
              través de un cortometraje terminado, que te servirá como proyecto
              real para aplicar los conocimientos de manera concreta y práctica.
            </p>
          </motion.div>

          {/* Modules grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                >
                  {/* Card */}
                  <motion.div
                    className="h-full p-8 bg-soft/50 border border-border/50 backdrop-blur-sm relative overflow-hidden"
                    whileHover={{
                      borderColor: "hsl(var(--primary) / 0.3)",
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute top-0 right-0 w-px h-8 bg-primary/20" />
                      <div className="absolute top-0 right-0 w-8 h-px bg-primary/20" />
                    </div>

                    {/* Week badge */}
                    <motion.div
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs tracking-wider mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {module.week}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-serif text-foreground mb-6 leading-relaxed">
                      {module.title}
                    </h3>

                    {/* Topics list */}
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.15 + topicIndex * 0.1,
                          }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: topicIndex * 0.3,
                            }}
                          />
                          <span className="text-sm">{topic}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Bottom line decoration */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>

                  {/* Connecting line between cards (hidden on mobile) */}
                  {index < modules.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-border"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <motion.p
            className="text-center text-muted-foreground mt-12 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            Cada sesión incluye ejercicios prácticos y retroalimentación
            personalizada
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FreeWorkshopCurriculum;
