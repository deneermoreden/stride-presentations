import { useState, useCallback, useEffect } from "react";

interface UsePresentationOptions {
  totalSlides: number;
  onSlideChange?: (index: number) => void;
}

export const usePresentation = ({ totalSlides, onSlideChange }: UsePresentationOptions) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      onSlideChange?.(index);
    },
    [currentSlide, totalSlides, onSlideChange]
  );

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
      onSlideChange?.(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, onSlideChange]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      onSlideChange?.(currentSlide - 1);
    }
  }, [currentSlide, onSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          event.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "Backspace":
          event.preventDefault();
          previousSlide();
          break;
        case "Home":
          event.preventDefault();
          goToSlide(0);
          break;
        case "End":
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, previousSlide, goToSlide, totalSlides]);

  // Touch/swipe navigation for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          previousSlide();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, previousSlide]);

  return {
    currentSlide,
    direction,
    goToSlide,
    nextSlide,
    previousSlide,
    isFirst: currentSlide === 0,
    isLast: currentSlide === totalSlides - 1,
  };
};
