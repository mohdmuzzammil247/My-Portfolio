import { useRef, useState, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import ironmanSuit from '../assets/hero/ironman-suit.jpg';
import muzzammilCutout from '../assets/hero/muzzammil-cutout.png';
import arcReactor from '../assets/hero/arc-reactor.jpg';

// Head+shoulders position measured against the top-cropped
// (object-position: top) render of ironman-suit.jpg inside a 4/5 aspect
// card — sized to cover the helmet down through the shoulder pauldrons,
// not just the face, so the photo reads as a head-and-shoulders bust.
const FACE_X = 47; // center, % of card width
const FACE_Y = 36; // center, % of card height
const FACE_RX = 17; // radius, % of card width
const FACE_RY = 17; // radius, % of card height
// The erase-window on the suit is drawn oversized relative to the photo
// underneath so the two soft edges overlap and blend, instead of the
// suit's mask-edge and the photo's own edge lining up into a hard ring.
const ERASE_RX = FACE_RX * 1.5;
const ERASE_RY = FACE_RY * 1.5;

export default function IronManPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(FACE_X);
  const my = useMotionValue(FACE_Y);
  const springX = useSpring(mx, { stiffness: 260, damping: 32, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 260, damping: 32, mass: 0.4 });
  const maskImage = useMotionTemplate`radial-gradient(ellipse ${ERASE_RX}% ${ERASE_RY}% at ${springX}% ${springY}%, transparent 0%, transparent 55%, black 100%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-[#E2451C]/25"
      >
        {/* Under-layer: the face, hidden beneath the suit until erased */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(120% 100% at 47% 20%, #2a0a06 0%, #17070a 55%, #0c0c0c 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(#FFB200 1px, transparent 1px), linear-gradient(90deg, #FFB200 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute"
          style={{
            left: `${FACE_X}%`,
            top: `${FACE_Y}%`,
            width: `${FACE_RX * 2}%`,
            height: `${FACE_RY * 2}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img
            src={muzzammilCutout}
            alt="Mohd Muzzammil"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top-layer: the suit, locally erased under the cursor */}
        <motion.img
          src={ironmanSuit}
          alt="Iron Man suit"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={hovering ? { maskImage, WebkitMaskImage: maskImage } : undefined}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-[#FFB200]/30 bg-black/40 backdrop-blur-sm px-4 py-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#FFB200', animation: 'arc-pulse 2s ease-in-out infinite' }}
          />
          <span className="text-[#F0D9A8] text-[10px] sm:text-xs uppercase tracking-widest font-medium whitespace-nowrap">
            Hover to reveal
          </span>
        </div>
      </div>

      <div
        className="absolute -top-5 -right-5 sm:-top-7 sm:-right-7 w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#FFB200]"
        style={{
          boxShadow: '0 0 24px 4px rgba(66, 189, 255, 0.5)',
          animation: 'float-y 4.5s ease-in-out infinite',
        }}
      >
        <img src={arcReactor} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
