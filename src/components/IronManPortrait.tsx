import ironmanSuit from '../assets/hero/ironman-suit.jpg';
import arcReactor from '../assets/hero/arc-reactor.jpg';

export default function IronManPortrait() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-[#E2451C]/25">
        <img
          src={ironmanSuit}
          alt="Iron Man suit"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
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
