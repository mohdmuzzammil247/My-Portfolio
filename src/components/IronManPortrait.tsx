import { useRef, useState, type MouseEvent } from 'react';
import ironmanSuit from '../assets/hero/ironman-suit.jpg';
import muzzammilPhoto from '../assets/hero/muzzammil-photo.jpg';
import arcReactor from '../assets/hero/arc-reactor.jpg';

// ---------------------------------------------------------------------------
// Helmet geometry — measured by sampling ironman-suit.jpg's own pixels (the
// glowing eye-slits and the red-shell/gold-visor color boundary), then
// converted into IronManContainer-relative percentages. The container is a
// fixed 4/5 (w/h) box and the suit renders with object-fit: cover,
// object-position: top, which only shows the TOP ~70.3% of the source
// image's height — so raw image-Y measurements are divided by 0.7033 to
// land in the same coordinate space as everything else here. X needs no
// such correction (the suit's width is never cropped).
const HELMET_X = 51; // visor center, % of container width
const HELMET_Y = 36; // visor center, % of container height
const MASK_WIDTH = 17; // visor mask box width, % of container width
const MASK_HEIGHT = 15; // visor mask box height, % of container height

// Where to zoom into the source headshot so just eyes/nose/mouth/chin fill
// the (small) visor box, instead of the whole head-and-shoulders frame.
const FACE_SCALE = 3.4;
const FACE_X_OFFSET = 0; // fine nudge, % of the face layer's own box
const FACE_Y_OFFSET = 0;

// The invisible zone that arms the reveal — sized around the helmet only,
// well clear of the chest/shoulders, so hovering the suit body never
// triggers it.
const HIT_WIDTH = 34; // % of container width
const HIT_HEIGHT = 30; // % of container height
const ACTIVATION_RATIO = 0.5; // fraction of the hit-area's own half-width used as the proximity radius

// A rounded shield/visor silhouette (not a rectangle, not a plain circle),
// in percentages of the mask box's own bounding box.
const VISOR_CLIP =
  'polygon(50% 1%, 80% 11%, 94% 40%, 92% 62%, 78% 84%, 58% 97%, 50% 100%, 42% 97%, 22% 84%, 8% 62%, 6% 40%, 20% 11%)';

export default function IronManPortrait() {
  const hitAreaRef = useRef<HTMLDivElement>(null);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [tapOpen, setTapOpen] = useState(false);
  const open = hoverOpen || tapOpen;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = hitAreaRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
    const radius = Math.min(rect.width, rect.height) / 2 / ACTIVATION_RATIO;
    setHoverOpen(dist < radius);
  };

  const openTransition = open
    ? 'opacity 420ms cubic-bezier(0.22,1,0.36,1) 120ms, transform 420ms cubic-bezier(0.22,1,0.36,1) 120ms'
    : 'opacity 380ms cubic-bezier(0.22,1,0.36,1), transform 380ms cubic-bezier(0.22,1,0.36,1)';

  return (
    <div className="relative w-full">
      <div
        className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-[#E2451C]/25"
        onClick={() => setTapOpen(false)}
      >
        {/* LAYER 1 — Iron Man body, unchanged, always fully visible */}
        <img
          src={ironmanSuit}
          alt="Iron Man suit"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* LAYER 2 — the real face, hard-clipped to the visor opening only */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: `${HELMET_X}%`,
            top: `${HELMET_Y}%`,
            width: `${MASK_WIDTH}%`,
            height: `${MASK_HEIGHT}%`,
            transform: 'translate(-50%, -50%)',
            clipPath: VISOR_CLIP,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              opacity: open ? 1 : 0,
              transform: `scaleY(${open ? 1 : 0.25})`,
              transformOrigin: '50% 50%',
              transition: openTransition,
              boxShadow: open ? 'inset 0 0 8px 2px rgba(0,0,0,0.5)' : 'none',
              background: '#0c0c0c',
            }}
          >
            <img
              src={muzzammilPhoto}
              alt="Mohd Muzzammil"
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 15%',
                transform: `scale(${FACE_SCALE}) translate(${FACE_X_OFFSET}%, ${FACE_Y_OFFSET}%)`,
                transformOrigin: '50% 24%',
              }}
            />
          </div>
        </div>

        {/* LAYER 3 (implicit) — the suit's own painted helmet edges sit in
            the same pixels as LAYER 1 above and are never touched, so they
            continue to frame the clipped face on every side. */}

        {/* Dedicated helmet hit-area — proximity-armed, NOT the whole suit.
            Also doubles as the tap target on touch devices, where hover
            doesn't exist. */}
        <div
          ref={hitAreaRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHoverOpen(false)}
          onClick={(e) => {
            e.stopPropagation();
            setTapOpen((v) => !v);
          }}
          className="absolute cursor-pointer"
          style={{
            left: `${HELMET_X}%`,
            top: `${HELMET_Y}%`,
            width: `${HIT_WIDTH}%`,
            height: `${HIT_HEIGHT}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-[#FFB200]/30 bg-black/40 backdrop-blur-sm px-4 py-2 pointer-events-none">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: '#FFB200', animation: 'arc-pulse 2s ease-in-out infinite' }}
          />
          <span className="text-[#F0D9A8] text-[10px] sm:text-xs uppercase tracking-widest font-medium whitespace-nowrap">
            Hover the helmet to reveal
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
