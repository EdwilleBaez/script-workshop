import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhyIDoThis = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-[0.2em] text-primary font-sans"
          >
            Por qué hago esto
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-balance">
            Porque alguien me acompañó
            <br />
            <span className="text-primary">
              cuando yo no sabía cómo empezar.
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInVariants}
            className="divider mb-12"
          />

          <motion.div
            variants={containerVariants}
            className="space-y-6 text-muted-foreground"
          >
            <motion.p variants={itemVariants}>
              Hubo un momento en el que yo también miraba la página en blanco
              preguntándome si tenía algo que contar.
            </motion.p>

            <motion.p variants={itemVariants}>
              Alguien me dijo que sí. Que la historia ya estaba ahí, solo
              necesitaba permiso para escribirla.
            </motion.p>

            <motion.p variants={itemVariants}>
              Hoy quiero ser esa voz para ti.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            className="divider mb-12"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl font-serif italic text-foreground"
          >
            “No hago esto para crear escritores perfectos.
            <br />
            Lo hago para que termines lo que empiezas.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIDoThis;
