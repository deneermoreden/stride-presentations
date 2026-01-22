import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, StrikethroughText } from "@/components/presentation/AnimatedElements";

const droppedItems = [
  { name: "구매왕 프로모션", reason: "매출 90%가 의료기기" },
  { name: "루페/합금 영업", reason: "안 팔림" },
  { name: "쿠폰 프로모션", reason: "문자/카톡으로 전환" },
];

export const SlideDropped = () => {
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
          BEP에 기여 안 하면 빠르게 접음.
        </motion.h1>

        <div className="space-y-8">
          {droppedItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUpVariants}
              custom={index * 0.2 + 0.3}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6"
            >
              <StrikethroughText 
                delay={0.8 + index * 0.2}
                className="text-subtitle text-muted-foreground"
              >
                {item.name}
              </StrikethroughText>
              <span className="text-body text-foreground/80">
                — {item.reason}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
