import { motion } from "framer-motion";

const methodPoints = [
  {
    title: "Escribir sin juicio",
    description:
      "La primera versión no tiene que ser perfecta. Solo tiene que existir.",
  },
  {
    title: "Entender estructura sin rigidez",
    description:
      "Aprende las reglas para después saber cuándo romperlas.",
  },
  {
    title: "Avanzar incluso con dudas",
    description:
      "La claridad llega escribiendo, no antes.",
  },
  {
    title: "Acompañamiento real",
    description:
      "No fórmulas mágicas. Proceso honesto y personalizado.",
  },
];

/* Animations */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Method = () => {
  return (
    <section className="section-padding bg-soft/30 overflow-hidden">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Enfoque
            </p>
            <h2 className="text-balance">
              Primero se escribe.
              <br />
              Después, se mejora.
            </h2>
          </motion.div>

          {/* Method points grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {methodPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-6 bg-background/60 border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-primary/40 font-serif text-2xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="space-y-2">
                      <h3 className="text-xl font-serif">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* underline micro-detalle */}
                <div className="pt-4">
                  <div className="w-12 h-px bg-primary/20 group-hover:w-full group-hover:bg-primary/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Method;
