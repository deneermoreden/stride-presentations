import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer, scaleInVariants } from "@/components/presentation/AnimatedElements";

const roles = [
  { title: "고객 영업", person: "지수" },
  { title: "프라임덴탈 + 피부미용", person: "지현" },
  { title: "운영 전반", person: "민철" },
  { title: "슈링크 영업", person: "언의, 영준, 창배" },
];

export const SlideRoles = () => {
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
          각자 역할에만 집중.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              variants={scaleInVariants}
              custom={index * 0.1}
              className="presentation-card group"
            >
              <p className="text-muted-foreground text-lg mb-2">{role.title}</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {role.person}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
