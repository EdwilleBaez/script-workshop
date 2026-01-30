import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const mentorships = [
  {
    title: "Mentoría individual",
    description:
      "Sesiones personalizadas para trabajar tu guion a tu ritmo. Feedback detallado y acompañamiento cercano.",
    features: ["1 sesión semanal", "Feedback escrito", "Ritmo personalizado"],
    cta: {
      label: "Agendar",
      variant: "cta",
      href: "https://calendly.com/baezedwille/mentoria",
    },
  },
  {
    title: "Mentoría grupal",
    description:
      "Aprende junto a otros escritores. Comparte tu proceso y recibe perspectivas diversas sobre tu trabajo.",
    features: ["Grupos reducidos", "Comunidad de apoyo", "Lecturas cruzadas"],
    cta: {
      label: "Inscribirme",
      variant: "cta",
      href: "https://chat.whatsapp.com/CZhNd7mtcD9Gjh9jN5GVjj?mode=gi_t",
    },
  },
  {
    title: "Laboratorio",
    description:
      "Compromiso con tu historia. Acompañamiento constante desde el inicio hasta terminar un guion sólido.",
    features: ["12 semanas", "Enfoque intensivo", "Guion terminado"],
    cta: {
      label: "Inscribirme",
      variant: "cta",
      href: "https://chat.whatsapp.com/INmfS4JDzMfGMUG5hWPo4C?mode=gi_t",
    },
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Mentorships = () => {
  return (
    <section
      id="mentorias"
      className="section-padding bg-background"
      aria-labelledby="mentorias-title"
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Mentorías
            </p>

            <h2 id="mentorias-title" className="text-balance">
              Acompañamiento real,
              <br />
              <span className="text-primary">a tu medida</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Cada escritor tiene su propio ritmo. Elige el formato que mejor se
              adapte a ti.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {mentorships.map((mentorship, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group p-8 bg-soft/30 border border-border/50
                hover:border-primary/30 hover:bg-soft/50
                group-focus-within:border-primary/30
                group-focus-within:bg-soft/50
                transition-all duration-300 flex flex-col"
              >
                <div className="space-y-6 flex-1">
                  <span
                    className="text-primary/30 font-serif text-4xl"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl font-serif">
                    {mentorship.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {mentorship.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {mentorship.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div
                          className="w-1 h-1 bg-primary rounded-full"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="pt-6"
                >
                  <Button
                    variant={mentorship.cta.variant as any}
                    size="lg"
                    className="w-full focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    asChild
                  >
                    <a
                      href={mentorship.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir ${mentorship.title}`}
                    >
                      {mentorship.cta.label}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic font-serif mb-4">
              ¿No sabes cuál elegir? Lo podemos conversar.
            </p>

            <a
              href="https://wa.me/18297556895"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp para consultar mentorías"
              className="inline-flex items-center gap-2 text-primary hover:underline
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorships;
