import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, slideLeftVariants } from "@/components/presentation/AnimatedElements";

const timingItems = [
  "12월 프라임덴탈 런칭 → 상품 구색",
  "11월 씨뿌림 → 12월 전환",
  "니콘 카메라 → 12월 런칭",
  "MTS 오토디엔 → 이익률 46%",
];

export const SlideTiming = () => {
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
          타이밍이 맞았습니다.
        </motion.h1>

        <div className="space-y-6 mb-12">
          {timingItems.map((item, index) => (
            <motion.div
              key={item}
              variants={slideLeftVariants}
              custom={index * 0.15 + 0.3}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" 
                style={{ boxShadow: "0 0 10px hsl(var(--primary) / 0.5)" }}
              />
              <p className="text-body text-foreground/90">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUpVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-subtitle text-primary font-semibold"
        >
          → 신규 고객 유입 + 이탈 고객 복귀
        </motion.p>
      </motion.div>
    </div>
  );
};
