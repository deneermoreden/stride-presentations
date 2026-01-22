import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/presentation/AnimatedElements";

export const SlideTeamAlignment = () => {
  return (
    <div className="slide slide-left">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="text-headline mb-12"
        >
          팀이 정렬됐습니다.
        </motion.h1>

        <motion.div 
          variants={fadeUpVariants}
          className="space-y-6"
        >
          <p className="text-subtitle text-muted-foreground">
            매일 아침 10분, 데일리 스크럼.
          </p>
          
          <p className="text-subtitle">
            <span className="text-accent-glow font-semibold">
              서로 뭐 하는지 알아야, 중복 없이 빠르게.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
