import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
  showIcon?: boolean;
}

const ImagePlaceholder = ({ 
  aspectRatio = "aspect-video",
  label = "Tu imagen aquí",
  className = "",
  showIcon = true
}: ImagePlaceholderProps) => {
  return (
    <motion.div 
      className={`relative bg-gradient-to-br from-soft via-accent/30 to-muted/20 overflow-hidden ${aspectRatio} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
      
      {/* Diagonal lines */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, hsl(var(--primary) / 0.05) 30px, hsl(var(--primary) / 0.05) 31px)"
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        {showIcon && (
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ImageIcon className="w-10 h-10 text-primary/30" />
          </motion.div>
        )}
        <p className="text-sm text-muted-foreground/60 italic text-center">{label}</p>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-primary/20" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-primary/20" />
    </motion.div>
  );
};

export default ImagePlaceholder;
