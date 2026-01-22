import { motion } from "framer-motion";
import { fadeUpVariants, glowVariants } from "@/components/presentation/AnimatedElements";

export const SlideDecisionCriteria = () => {
  return (
    <div className="slide slide-centered">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center"
      >
        <motion.div
          variants={glowVariants}
          className="relative"
        >
          <span className="absolute -left-4 md:-left-12 -top-8 text-6xl md:text-8xl text-primary/20 font-serif">
            "
          </span>
          <h1 className="text-title md:text-headline font-bold leading-tight">
            이게 BEP 매출총이익에
            <br />
            기여하는가?
          </h1>
          <span className="absolute -right-4 md:-right-12 -bottom-8 text-6xl md:text-8xl text-primary/20 font-serif">
            "
          </span>
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          custom={0.5}
          initial="hidden"
          animate="visible"
          className="text-caption mt-12"
        >
          모든 의사결정의 기준.
        </motion.p>
      </motion.div>
    </div>
  );
};
