// import { Button } from "@/components/ui/button";

// const IntensiveWorkshop = () => {
//   return (
//     <section id="intensivo" className="section-padding bg-background">
//       <div className="section-container">
//         <div className="max-w-3xl mx-auto">
//           {/* Divider line */}
//           <div className="divider-wide mb-16" />
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left content */}
//             <div className="space-y-6">
//               <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">
//                 Laboratorio
//               </p>
              
//               <h2 className="text-balance">
//                 Escribir tu guion
//                 <span className="text-primary"> completo</span>
//               </h2>
              
//               <p className="text-lg text-muted-foreground">
//                 Para quienes deciden comprometerse con su historia.
//                 Un proceso de 3 meses con acompañamiento constante 
//                 desde el inicio hasta terminar un guion sólido.
//               </p>
//             </div>
            
//             {/* Right content - styled box */}
//             <div className="p-8 border border-border bg-soft/20">
//               <div className="space-y-6">
//                 <div className="space-y-3 font-serif italic text-lg text-foreground">
//                   <p>No es rápido.</p>
//                   <p>No es fácil.</p>
//                   <p className="text-primary">Pero es real.</p>
//                 </div>
                
//                 <div className="pt-4">
//                   <Button variant="outline" size="default" asChild>
//                     <a href="#intensivo">Conocer el proceso completo</a>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntensiveWorkshop;





import { Button } from "@/components/ui/button";

const IntensiveWorkshop = () => {
  return (
    <section id="intensivo" className="section-padding bg-primary/5 relative">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header / Complement */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-sans">
              Complemento del Laboratorio
            </p>
            <h2 className="text-balance">
              Lleva tu guion al siguiente nivel
              <span className="text-primary"> con un taller intensivo</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Para quienes quieren profundizar en la escritura y producción de su cortometraje, 
              con un acompañamiento más cercano y práctico. Ideal para aplicar lo aprendido 
              en el Laboratorio y finalizar tu proyecto con un guion sólido y listo para rodar.
            </p>
          </div>

          {/* Grid / Info + Quote */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans">
                Taller intensivo
              </p>

              <h3 className="text-2xl font-serif">
                Escribir tu guion completo
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Tres meses de trabajo intensivo, entregas semanales y feedback continuo, 
                pensado para que termines tu guion y lo tengas listo para presentar o producir. 
                Este taller es el complemento perfecto para aplicar todo lo aprendido en el Laboratorio de manera práctica.
              </p>
            </div>

            {/* Right content - styled box */}
            <div className="p-8 border border-border bg-background/80 backdrop-blur-sm rounded-2xl">
              <div className="space-y-6">
                <div className="space-y-3 font-serif italic text-lg text-foreground">
                  <p>No es rápido.</p>
                  <p>No es fácil.</p>
                  <p className="text-primary">Pero garantiza resultados reales.</p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" size="default" asChild>
                    <a href="#intensivo">Conocer el taller completo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntensiveWorkshop;
