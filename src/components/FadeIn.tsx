import { motion } from 'framer-motion';
import { useMemo, type ElementType, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
}: FadeInProps) {
  const MotionTag = useMemo(() => motion.create(as), [as]);

  // Opacity is deliberately not animated: if the viewport-intersection
  // check ever fails to fire on some device/browser, content must still
  // be fully visible and readable, not stuck invisible. Only the slide-in
  // offset is animated, so a failed trigger is a minor cosmetic miss
  // (content sits slightly offset) rather than missing content.
  return (
    <MotionTag
      className={className}
      initial={{ x, y }}
      whileInView={{ x: 0, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 400px 0px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
