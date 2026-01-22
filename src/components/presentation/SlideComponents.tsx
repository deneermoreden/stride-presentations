import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  isActive: boolean;
  direction: number;
  className?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const fadeVariants = {
  enter: {
    opacity: 0,
    scale: 0.98,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.02,
  },
};

export const SlideWrapper = ({
  children,
  isActive,
  direction,
  className = "",
}: SlideWrapperProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      {isActive && (
        <motion.div
          key="slide"
          custom={direction}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className={`absolute inset-0 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export const ProgressIndicator = ({ current, total }: ProgressIndicatorProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="h-1 bg-muted/30">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            boxShadow: "0 0 10px hsl(var(--primary) / 0.5)",
          }}
        />
      </div>
    </div>
  );
};

interface SlideCounterProps {
  current: number;
  total: number;
}

export const SlideCounter = ({ current, total }: SlideCounterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 text-muted-foreground text-sm font-medium"
    >
      <span className="text-foreground">{current + 1}</span>
      <span className="mx-1">/</span>
      <span>{total}</span>
    </motion.div>
  );
};

interface NavigationDotsProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

export const NavigationDots = ({ current, total, onNavigate }: NavigationDotsProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onNavigate(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === current
              ? "bg-primary w-6"
              : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
          }`}
          style={
            index === current
              ? { boxShadow: "0 0 10px hsl(var(--primary) / 0.5)" }
              : {}
          }
        />
      ))}
    </div>
  );
};
