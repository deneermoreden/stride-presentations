import { AnimatePresence, motion } from "framer-motion";
import { usePresentation } from "@/hooks/usePresentation";
import { ProgressIndicator, SlideCounter, NavigationDots } from "./SlideComponents";
import { SlideHook } from "./slides/SlideHook";
import { SlideTeamAlignment } from "./slides/SlideTeamAlignment";
import { SlideRoles } from "./slides/SlideRoles";
import { SlideDecisionCriteria } from "./slides/SlideDecisionCriteria";
import { SlideDropped } from "./slides/SlideDropped";
import { SlideData } from "./slides/SlideData";
import { SlideTiming } from "./slides/SlideTiming";
import { SlideFutureGoal } from "./slides/SlideFutureGoal";
import { SlideConfidence } from "./slides/SlideConfidence";
import { SlideClosing } from "./slides/SlideClosing";

const slides = [
  { id: 1, component: SlideHook },
  { id: 2, component: SlideTeamAlignment },
  { id: 3, component: SlideRoles },
  { id: 4, component: SlideDecisionCriteria },
  { id: 5, component: SlideDropped },
  { id: 6, component: SlideData },
  { id: 7, component: SlideTiming },
  { id: 8, component: SlideFutureGoal },
  { id: 9, component: SlideConfidence },
  { id: 10, component: SlideClosing },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: direction > 0 ? 0.98 : 1.02,
  }),
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: direction < 0 ? 0.98 : 1.02,
  }),
};

export const Presentation = () => {
  const { currentSlide, direction, goToSlide } = usePresentation({
    totalSlides: slides.length,
  });

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.4, ease: "easeInOut" },
            scale: { duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation UI */}
      <ProgressIndicator current={currentSlide} total={slides.length} />
      <SlideCounter current={currentSlide} total={slides.length} />
      <NavigationDots
        current={currentSlide}
        total={slides.length}
        onNavigate={goToSlide}
      />

      {/* Navigation hint (visible on first slide only) */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 text-muted-foreground text-sm"
        >
          <span className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-muted/50 rounded text-xs">←</kbd>
            <kbd className="px-2 py-1 bg-muted/50 rounded text-xs">→</kbd>
            <span>또는 스와이프로 이동</span>
          </span>
        </motion.div>
      )}
    </div>
  );
};
