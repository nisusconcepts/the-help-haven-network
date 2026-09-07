// Single source of truth for category metadata — used by the homepage,
// the browse page, the submission form, and the seed script. Add a
// category here once and it shows up everywhere (including its icon,
// used on the homepage grid and the browse sidebar).
//
// Color scheme (2026-09-07, glossy cobalt pass): every category shares the
// same glossy cobalt-blue accent (color + tint) instead of a distinct hue
// per category, per Josh's request for a unified, modern, futuristic look
// for category badges, tiles, tabs, and map pins. Categories are still
// visually distinguished by their custom icon (see lib/categoryIcons.js —
// emoji were replaced with hand-built SVGs the same pass) and label, just
// not by color. Both values are WCAG 2.1 AA-checked: cobalt text on
// white/panel is 7.7:1, cobalt text on its own tint is 6.15:1, both clear
// the 4.5:1 text threshold (and the 3:1 border/UI threshold).
const CATEGORY_COLOR = "#1e46c4";
const CATEGORY_TINT = "#dde6fb";

export const CATEGORIES = [
  { slug: "crisis", label: "Crisis & Mental Health", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "recovery", label: "Substance Abuse & Recovery", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "domestic-violence", label: "Domestic Violence Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "shelter", label: "Shelter & Housing", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "sober-living", label: "Sober Living Homes", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "lgbtq", label: "LGBTQ+ Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "food", label: "Food Assistance", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "clothing", label: "Clothing & Essentials", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "military-first-responder", label: "Military & First Responder Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "support-groups", label: "Support Groups & Peer Recovery", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "legal-aid", label: "Legal Aid & Protective Orders", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "financial-assistance", label: "Financial & Utility Assistance", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "human-trafficking", label: "Human Trafficking Support", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
  { slug: "teachers", label: "Teachers & Educators", color: CATEGORY_COLOR, tint: CATEGORY_TINT },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));

// Shared "all categories" pseudo-entry, for pages that render an "All
// Resources" tile/link alongside the real categories (homepage grid,
// browse sidebar, browse hero) without it living in CATEGORIES itself —
// it isn't a real category slug in the database. Left on the neutral
// ink/panel pairing (not the cobalt accent) so "All Resources" still
// reads as distinct from a specific category.
export const ALL_CATEGORY = { slug: "all", label: "All Resources", color: "var(--ink)", tint: "var(--panel)" };
