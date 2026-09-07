// Custom line-icon set replacing the emoji category icons (2026-09-07,
// same pass as the glossy cobalt reskin). Emoji render inconsistently
// across platforms/fonts and didn't match the new metallic theme, so each
// category now gets a small hand-built inline SVG instead, keyed by slug.
// Every icon uses `stroke="currentColor"` (or `fill="currentColor"` for the
// filled accents), so it automatically inherits whatever color the parent
// element sets — no extra color prop needed at the call sites, and it stays
// correct in dark mode for free since currentColor always resolves to
// whatever CSS variable-derived color the parent already has.
//
// The one exception is the LGBTQ+ heart, which intentionally uses a fixed
// rainbow gradient fill rather than currentColor — losing the actual pride
// colors there to "match the theme" would defeat the point of the icon.
//
// size/strokeWidth are tuned for the 16–34px range these render at across
// the homepage grid, the browse sidebar, and the category hero banner.
export default function CategoryIcon({ slug, size = 24, strokeWidth = 1.75, style, className }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    style,
    className,
  };
  const line = { fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" };

  switch (slug) {
    // Crisis & Mental Health — a life ring: always-available, immediate help.
    case "crisis":
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="12" r="8.25" />
          <circle cx="12" cy="12" r="3.25" />
          <line x1="12" y1="3.75" x2="12" y2="6.75" />
          <line x1="12" y1="17.25" x2="12" y2="20.25" />
          <line x1="3.75" y1="12" x2="6.75" y2="12" />
          <line x1="17.25" y1="12" x2="20.25" y2="12" />
        </svg>
      );

    // Substance Abuse & Recovery — new growth.
    case "recovery":
      return (
        <svg {...common} {...line}>
          <line x1="12" y1="21" x2="12" y2="12.5" />
          <path d="M12 12.5C12 8.5 9.4 5.8 5.8 5.2 5.9 9.3 7.9 12.4 12 12.5Z" fill="currentColor" stroke="none" />
          <path d="M12.4 15.5C12.4 12.4 14.4 10.2 17.4 9.6 17.4 12.9 15.6 15.3 12.4 15.5Z" fill="currentColor" stroke="none" opacity="0.7" />
        </svg>
      );

    // Domestic Violence Support — a shield: protection and safety.
    case "domestic-violence":
      return (
        <svg {...common} {...line}>
          <path d="M12 3.2 19 6v6c0 5-3.3 7.9-7 8.8-3.7-.9-7-3.8-7-8.8V6l7-2.8Z" />
        </svg>
      );

    // Shelter & Housing — a house.
    case "shelter":
      return (
        <svg {...common} {...line}>
          <polyline points="4,12 12,5 20,12" />
          <path d="M6 11.5V20h12v-8.5" />
          <rect x="10.3" y="15" width="3.4" height="5" />
        </svg>
      );

    // Sober Living Homes — a bed: a stable place to land.
    case "sober-living":
      return (
        <svg {...common} {...line}>
          <path d="M3 18v-5.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V18" />
          <line x1="3" y1="21" x2="3" y2="18" />
          <line x1="21" y1="21" x2="21" y2="18" />
          <line x1="3" y1="13.5" x2="21" y2="13.5" />
          <circle cx="7.5" cy="10.5" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );

    // LGBTQ+ Support — a heart. Intentionally the one icon that breaks from
    // the single-color theme: a rainbow gradient fill instead of
    // currentColor, plus a soft gloss highlight to match the site's glossy
    // finish elsewhere.
    case "lgbtq": {
      const gid = "lgbtq-heart-grad";
      return (
        <svg {...common} viewBox="0 0 24 24">
          <defs>
            <linearGradient id={gid} x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ff5a5a" />
              <stop offset="20%" stopColor="#ff9d42" />
              <stop offset="40%" stopColor="#ffe14d" />
              <stop offset="60%" stopColor="#4dd67a" />
              <stop offset="80%" stopColor="#4d8dff" />
              <stop offset="100%" stopColor="#a24dff" />
            </linearGradient>
          </defs>
          <path
            d="M12 20.5s-7.3-4.6-9.8-9.2C0.6 7.8 2.4 4 6.4 4c2.1 0 4 1.3 5.6 3.4C13.6 5.3 15.5 4 17.6 4c4 0 5.8 3.8 4.2 7.3-2.5 4.6-9.8 9.2-9.8 9.2z"
            fill={`url(#${gid})`}
          />
          <ellipse cx="8.6" cy="8.6" rx="3" ry="1.4" fill="rgba(255,255,255,0.5)" transform="rotate(-30 8.6 8.6)" />
        </svg>
      );
    }

    // Food Assistance — a fork.
    case "food":
      return (
        <svg {...common} {...line}>
          <line x1="9" y1="3" x2="9" y2="10" />
          <line x1="12" y1="3" x2="12" y2="10" />
          <line x1="15" y1="3" x2="15" y2="10" />
          <path d="M9 10c0 1.7 1.3 3 3 3s3-1.3 3-3" />
          <line x1="12" y1="13" x2="12" y2="21" />
        </svg>
      );

    // Clothing & Essentials — a t-shirt.
    case "clothing":
      return (
        <svg {...common} {...line}>
          <path d="M8.5 4 4.5 7l2.7 2.7L8.5 8.5V20h7V8.5l1.3 1.2L19.5 7l-4-3-2 2h-3l-2-2Z" />
        </svg>
      );

    // Military & First Responder Support — an award/medal.
    case "military-first-responder":
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="8.5" r="5.5" />
          <path d="M8.9 13.2 6.2 21l5.8-3 5.8 3-2.7-7.8" />
        </svg>
      );

    // Support Groups & Peer Recovery — two connected circles: community.
    case "support-groups":
      return (
        <svg {...common} {...line}>
          <circle cx="9" cy="12" r="6" />
          <circle cx="15" cy="12" r="6" />
        </svg>
      );

    // Legal Aid & Protective Orders — scales of justice.
    case "legal-aid":
      return (
        <svg {...common} {...line}>
          <line x1="12" y1="3" x2="12" y2="19" />
          <line x1="5" y1="6" x2="19" y2="6" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <path d="M5 6 2.7 11a2.6 3 0 0 0 4.6 0L5 6Z" />
          <path d="M19 6l-2.3 5a2.6 3 0 0 0 4.6 0L19 6Z" />
        </svg>
      );

    // Financial & Utility Assistance — a dollar sign in a circle.
    case "financial-assistance":
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="6.5" x2="12" y2="17.5" />
          <path d="M9.3 9.6c0-1.3 1.2-2.3 2.7-2.3s2.7 1 2.7 2.1-1.2 1.7-2.7 2-2.7 1-2.7 2.1 1.2 2.1 2.7 2.1 2.7-.8 2.7-2.3" />
        </svg>
      );

    // Human Trafficking Support — a broken chain: freedom.
    case "human-trafficking":
      return (
        <svg {...common} {...line}>
          <rect x="2.3" y="10.6" width="7.5" height="4.6" rx="2.3" transform="rotate(-25 6 13)" />
          <rect x="14.2" y="8.8" width="7.5" height="4.6" rx="2.3" transform="rotate(-25 18 11)" />
        </svg>
      );

    // Teachers & Educators — a graduation cap.
    case "teachers":
      return (
        <svg {...common} {...line}>
          <path d="M2 9 12 4l10 5-10 5L2 9Z" />
          <path d="M6.3 11.2v4.3c0 1.7 2.6 3 5.7 3s5.7-1.3 5.7-3v-4.3" />
          <line x1="21.3" y1="9" x2="21.3" y2="14.5" />
        </svg>
      );

    // All Resources — a compass.
    case "all":
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.2 8.8-1.7 4.4-4.4 1.7 1.7-4.4 4.4-1.7Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      );

    // Fallback for any future category added without a matching icon yet —
    // a plain dot, so a missing case here degrades gracefully instead of
    // rendering nothing.
    default:
      return (
        <svg {...common} {...line}>
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
