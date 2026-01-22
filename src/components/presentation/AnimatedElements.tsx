import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface CountingNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  formatNumber?: boolean;
}

export const CountingNumber = ({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  formatNumber = true,
}: CountingNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const displayValue = formatNumber
    ? count.toLocaleString("ko-KR")
    : count.toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

// Animation variants for reusable animations
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const glowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
}

export const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
}: AnimatedTextProps) => {
  const variants = {
    fadeUp: fadeUpVariants,
    fadeIn: fadeInVariants,
    scaleIn: scaleInVariants,
    slideLeft: slideLeftVariants,
    slideRight: slideRightVariants,
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StrikethroughTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  show?: boolean;
}

export const StrikethroughText = ({
  children,
  className = "",
  delay = 0,
  show = true,
}: StrikethroughTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {show && (
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
          className="absolute left-0 top-1/2 h-0.5 bg-destructive -translate-y-1/2"
        />
      )}
    </span>
  );
};
