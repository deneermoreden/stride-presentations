import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "@/components/presentation/AnimatedElements";
import { ArrowRight } from "lucide-react";

const flowNodes = ["소싱", "콘텐츠", "도서", "강의", "광고", "커머스"];

export const SlideConfidence = () => {
  return (
    <div className="slide slide-left">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl w-full"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="text-headline mb-12"
        >
          "피부미용하면 모어덴"
        </motion.h1>

        {/* Flow diagram */}
        <motion.div 
          variants={fadeUpVariants}
          custom={0.3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8"
        >
          {flowNodes.map((node, index) => (
            <motion.div
              key={node}
              variants={scaleInVariants}
              custom={index * 0.1 + 0.4}
              initial="hidden"
              animate="visible"
              className="flex items-center"
            >
              <span className="flow-node">{node}</span>
              {index < flowNodes.length - 1 && (
                <ArrowRight className="flow-arrow w-5 h-5 mx-1 md:mx-2" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          custom={0.8}
          initial="hidden"
          animate="visible"
          className="text-subtitle text-primary font-semibold mb-8 text-center"
        >
          유기적으로 연결.
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-body text-muted-foreground text-center"
        >
          디자이너, PD 합류. 빠른 의사결정 → 빠른 산출물.
        </motion.p>
      </motion.div>
    </div>
  );
};
