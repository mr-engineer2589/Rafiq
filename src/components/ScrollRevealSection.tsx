import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};