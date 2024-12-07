import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 100;

export function useHeaderAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(
    scrollY,
    [0, SCROLL_THRESHOLD],
    [0, 1]
  );

  const headerStyles = {
    opacity: headerOpacity,
  };

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > SCROLL_THRESHOLD);
    });
  }, [scrollY]);

  return {
    isVisible,
    headerStyles,
  };
}