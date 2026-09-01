import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = text.length;
  // Group into words vs. whitespace so line-wraps only ever land between
  // words. Each character below renders as its own inline-block span (for
  // the per-character reveal), and browsers are free to break a line
  // between any two inline-block boxes — without this grouping, that
  // means mid-word breaks. Wrapping each word's characters in a single
  // nowrap inline-block keeps the word atomic while leaving the actual
  // whitespace between words as normal, breakable text.
  const tokens = text.match(/\S+|\s+/g) ?? [];
  let index = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((token, tokenIndex) => {
        const chars = token.split('').map((char) => {
          const i = index++;
          return (
            <Char key={i} char={char} progress={scrollYProgress} start={i / total} end={(i + 1) / total} />
          );
        });
        const isWord = !/\s/.test(token);
        return isWord ? (
          <span key={tokenIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars}
          </span>
        ) : (
          chars
        );
      })}
    </p>
  );
}

function Char({
  char,
  progress,
  start,
  end,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === ' ' ? ' ' : char;

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{display}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {display}
      </motion.span>
    </span>
  );
}
