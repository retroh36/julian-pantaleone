// icons.jsx — inline Lucide-style 2px line icons (the DS icon set), monochrome, currentColor.
function Icon({ d, paths, size = 20, stroke = 2.2, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" {...rest}>
      {d ? <path d={d} /> : paths}
    </svg>
  );
}

const ChevronLeft  = (p) => <Icon {...p} d="M15 18l-6-6 6-6" />;
const ChevronRight = (p) => <Icon {...p} d="M9 18l6-6-6-6" />;
const X            = (p) => <Icon {...p} d="M18 6L6 18M6 6l12 12" />;
const ArrowDown    = (p) => <Icon {...p} d="M12 5v14M19 12l-7 7-7-7" />;
const ArrowRight   = (p) => <Icon {...p} d="M5 12h14M13 5l7 7-7 7" />;
const Camera       = (p) => <Icon {...p} paths={<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>} />;
const Heart        = (p) => <Icon {...p} d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />;
const Maximize     = (p) => <Icon {...p} d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />;
const Share        = (p) => <Icon {...p} paths={<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></>} />;
const Check        = (p) => <Icon {...p} d="M20 6L9 17l-5-5" />;
const Instagram    = (p) => <Icon {...p} paths={<><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></>} />;
const Mail         = (p) => <Icon {...p} paths={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></>} />;
const Trophy       = (p) => <Icon {...p} paths={<><path d="M6 9a6 6 0 0 0 12 0V3H6z"/><path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3M9 21h6M12 15v6"/></>} />;
const Clock        = (p) => <Icon {...p} paths={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>} />;
const Zap          = (p) => <Icon {...p} d="M13 2L4 14h7l-1 8 9-12h-7z" />;
const MapPin       = (p) => <Icon {...p} paths={<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>} />;
const Twitter      = (p) => <Icon {...p} d="M22 4c-1 .5-2 .8-3 1a4 4 0 0 0-7 3v1A9 9 0 0 1 4 5s-4 9 5 13a10 10 0 0 1-6 2c9 5 20 0 20-11.5 0-.3 0-.6-.1-.8A6 6 0 0 0 22 4z" />;

Object.assign(window, {
  JPIcon: Icon, ChevronLeft, ChevronRight, X, ArrowDown, ArrowRight, Camera,
  Heart, Maximize, Share, Check, Instagram, Mail, Trophy, Clock, Zap, MapPin, Twitter,
});
