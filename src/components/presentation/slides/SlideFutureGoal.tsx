import { motion } from "framer-motion";
import { CountingNumber, fadeUpVariants, glowVariants } from "@/components/presentation/AnimatedElements";

export const SlideFutureGoal = () => {
  return (
    <div className="slide slide-centered">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center"
      >
        <motion.p
          variants={fadeUpVariants}
          custom={0}
          className="text-subtitle text-muted-foreground mb-4"
        >
          26년 상반기 BEP
        </motion.p>

        <motion.div
          variants={glowVariants}
          className="mb-8"
        >
          <h1 
            className="text-foreground glow-text-white font-black"
            style={{
              fontSize: "clamp(4rem, 18vw, 12rem)",
              lineHeight: 1,
            }}
          >
            월{" "}
            <CountingNumber 
              value={1.2} 
              suffix="억"
              formatNumber={false}
              className="text-primary"
            />
          </h1>
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          custom={0.6}
          initial="hidden"
          animate="visible"
          className="text-title text-accent-glow font-bold"
        >
          두 배. 충분히 할 수 있습니다.
        </motion.p>
      </motion.div>
    </div>
  );
};
