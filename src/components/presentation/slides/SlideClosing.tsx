import { motion } from "framer-motion";
import { fadeUpVariants, glowVariants } from "@/components/presentation/AnimatedElements";
import { useEffect, useState } from "react";

// Simple confetti particle
const Particle = ({ delay }: { delay: number }) => {
  const colors = ["#3B82F6", "#60A5FA", "#93C5FD", "#FFFFFF", "#DBEAFE"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const rotation = Math.random() * 720 - 360;
  const size = Math.random() * 8 + 4;

  return (
    <motion.div
      initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
      animate={{ 
        y: "100vh", 
        x: Math.random() * 200 - 100,
        opacity: 0, 
        rotate: rotation 
      }}
      transition={{ 
        duration: 3 + Math.random() * 2, 
        delay: delay,
        ease: "easeOut" 
      }}
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      }}
    />
  );
};

export const SlideClosing = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="slide slide-centered relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <Particle key={i} delay={i * 0.05} />
          ))}
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center relative z-10"
      >
        <motion.div
          variants={glowVariants}
          className="mb-12"
        >
          <h1 className="text-title md:text-headline font-bold leading-tight">
            DCM은 돈 버는 사업이 될 겁니다.
          </h1>
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="text-subtitle text-muted-foreground mb-8"
        >
          12월에 증명했고, 상반기에도 증명하겠습니다.
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          custom={1.2}
          initial="hidden"
          animate="visible"
          className="text-title text-accent-glow font-semibold"
        >
          DCM 팀에게 감사드립니다.
        </motion.p>
      </motion.div>
    </div>
  );
};
