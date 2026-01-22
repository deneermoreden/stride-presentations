import { motion } from "framer-motion";
import { CountingNumber, fadeUpVariants, glowVariants } from "../AnimatedElements";

export const SlideHook = () => {
  return (
    <div className="slide slide-centered">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(222 47% 12%) 0%, hsl(222 47% 4%) 70%)",
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
          className="text-caption"
        >
          11월 매출총이익{" "}
          <CountingNumber 
            value={2700} 
            suffix="만원" 
            className="text-muted-foreground"
          />
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.2}
          className="text-headline text-foreground"
        >
          12월 매출총이익{" "}
          <span className="text-primary font-black">
            <CountingNumber value={6440} suffix="만원" />
          </span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={glowVariants}
          className="mt-8"
        >
          <h2 
            className="text-hero text-foreground glow-text-white animate-glow-pulse"
            style={{
              fontSize: "clamp(4rem, 15vw, 10rem)",
            }}
          >
            어떻게?
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
