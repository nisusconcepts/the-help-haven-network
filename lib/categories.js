// Single source of truth for category metadata — used by the homepage,
// the browse page, the submission form, and the seed script. Add a
// category here once and it shows up everywhere (including its icon,
// used on the homepage grid and the browse sidebar).
//
// Color scheme (2026-09-07): every category shares the same steel/silver
// "metallic" accent (color + tint) instead of a distinct hue per category,
// per Josh's request for a unified, metallic look for category badges,
// tiles, tabs, and map pins. Categories are still visually distinguished
// by their icon and label — just not by color anymore. Both values are
// WCAG 2.1 AA-checked (steel text on white/panel and on its own tint both
// clear 4.5:1; steel used as a border/non-text element clears 3:1).
const CATEGORY_COLOR = "#4a5568";
const CATEGORY_TINT = "#e1e4ea";

export const CATEGORIES = [
  { slug: "crisis", label: "Crisis & Mental Health", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🆘" },
  { slug: "recovery", label: "Substance Abuse & Recovery", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🌱" },
  { slug: "domestic-violence", label: "Domestic Violence Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🛡️" },
  { slug: "shelter", label: "Shelter & Housing", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🏠" },
  { slug: "sober-living", label: "Sober Living Homes", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🛏️" },
  { slug: "lgbtq", label: "LGBTQ+ Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🏳️‍🌈" },
  { slug: "food", label: "Food Assistance", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🍽️" },
  { slug: "clothing", label: "Clothing & Essentials", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "👕" },
  { slug: "military-first-responder", label: "Military & First Responder Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🎖️" },
  { slug: "support-groups", label: "Support Groups & Peer Recovery", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🤝" },
  { slug: "legal-aid", label: "Legal Aid & Protective Orders", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "⚖️" },
  { slug: "financial-assistance", label: "Financial & Utility Assistance", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "💵" },
  { slug: "human-trafficking", label: "Human Trafficking Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🕊️" },
  { slug: "teachers", label: "Teachers & Educators", color: CATEGORY_COLOR, tint: CATEGORY_TINT, icon: "🍎" },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));

// Shared "all categories" pseudo-entry, for pages that render an "All
// Resources" tile/link alongside the real categories (homepage grid,
// browse sidebar, browse hero) without it living in CATEGORIES itself —
// it isn't a real category slug in the database. Left on the neutral
// ink/panel pairing (not the metallic accent) so "All Resources" still
// reads as distinct from a specific category.
export const ALL_CATEGORY = { slug: "all", label: "All Resources", color: "var(--ink)", tint: "var(--panel)", icon: "🔎" };
