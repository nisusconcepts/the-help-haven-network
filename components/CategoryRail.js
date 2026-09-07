import Link from "next/link";
import { CATEGORIES, ALL_CATEGORY } from "@/lib/categories";
import CategoryIcon from "@/lib/categoryIcons";

// Compact category switcher for the /browse results page. Deliberately no
// counts (a number here would just go stale as listings change) and no
// dropdown/local state — every item is a real link, so clicking one is a
// normal page navigation that keeps the current ZIP filter intact.
// Category links point at path-based routes (/browse/[category]) so each
// category has its own indexable URL and per-page title/description;
// "All resources" stays at /browse. Each entry shows the same custom icon
// used on the homepage grid, for a consistent visual language across pages.
// The active category and current ZIP come in as props from BrowseClient,
// since with path-based routing the category isn't always in the query
// string for this component to read itself.
//
// `detoxOnly`/`onToggleDetox` (also from BrowseClient) render as a
// hover/focus-revealed popover on the "Substance Abuse & Recovery" item
// only — detox is a service some of those listings offer, not its own
// category, so the toggle now lives right on the one rail item it actually
// applies to instead of sitting as a standalone checkbox above the results
// for every category.
export default function CategoryRail({ activeCategory = "all", zip = "", detoxOnly = false, onToggleDetox }) {
  function hrefFor(slug) {
    const base = slug === "all" ? "/browse" : `/browse/${slug}`;
    return zip ? `${base}?zip=${zip}` : base;
  }

  return (
    <div style={{ position: "sticky", top: 16, display: "flex", flexDirection: "column", gap: 2 }}>
      <RailLink href={hrefFor("all")} slug={ALL_CATEGORY.slug} label={ALL_CATEGORY.label} active={activeCategory === "all"} />
      {CATEGORIES.map((c) => (
        <RailLink
          key={c.slug}
          href={hrefFor(c.slug)}
          slug={c.slug}
          label={c.label}
          active={activeCategory === c.slug}
          detoxOnly={c.slug === "recovery" ? detoxOnly : undefined}
          onToggleDetox={c.slug === "recovery" ? onToggleDetox : undefined}
        />
      ))}
    </div>
  );
}

function RailLink({ href, slug, label, active, detoxOnly, onToggleDetox }) {
  const hasDetoxToggle = typeof onToggleDetox === "function";

  return (
    <div style={{ position: "relative" }} className={hasDetoxToggle ? "rail-detox-wrap" : undefined}>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          textAlign: "left",
          textDecoration: "none",
          background: active ? "var(--panel)" : "transparent",
          padding: "8px 10px",
          borderRadius: 7,
          color: active ? "var(--ink)" : "var(--ink-soft)",
          fontWeight: active ? 500 : 400,
          fontSize: 13.5,
          boxShadow: active ? "var(--shadow)" : "none",
        }}
      >
        <CategoryIcon slug={slug} size={17} style={{ flex: "none" }} />
        {label}
      </Link>

      {hasDetoxToggle && (
        <div className="rail-detox-popover">
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: 12.5,
              color: "var(--ink)",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <input type="checkbox" checked={detoxOnly} onChange={onToggleDetox} />
            Only show places that offer detox
          </label>
        </div>
      )}
    </div>
  );
}
