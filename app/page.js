import Link from "next/link";
import { CATEGORIES, ALL_CATEGORY } from "@/lib/categories";
import CategoryIcon from "@/lib/categoryIcons";

// Server Component: the homepage is just the category nav — a grid of
// same-size, icon-labeled tiles on a colorful shared background. Each
// links straight to its own /browse/[category] page; "All Resources"
// goes to /browse. Search, ZIP filtering, and the map all live one click
// away on the browse page, so this page stays a fast menu with nothing
// that goes stale (no resource counts, no in-place filtering).
export default function HomePage() {
  return (
    <div className="hero-panel">
      <h2 style={{ fontSize: 24, marginBottom: 8, color: "var(--ink)" }}>Helping North Texas — and growing</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, maxWidth: "56ch", margin: "0 0 24px" }}>
        Pick a category below to get started, or browse everything at once — search and ZIP filtering
        are on the next page. For 24/7 crisis and social-service referrals anywhere in the country, you
        can also dial 211.
      </p>

      <div
        className="tile-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        <CategoryTile href="/browse" slug={ALL_CATEGORY.slug} label={ALL_CATEGORY.label} isAll />
        {CATEGORIES.map((c) => (
          <CategoryTile key={c.slug} href={`/browse/${c.slug}`} slug={c.slug} label={c.label} />
        ))}
      </div>
    </div>
  );
}

function CategoryTile({ href, slug, label, isAll }) {
  return (
    <Link
      href={href}
      className={isAll ? "tile all" : "tile"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minHeight: 112,
        padding: "18px 10px",
        borderRadius: 14,
        textDecoration: "none",
        textAlign: "center",
        border: "1px solid rgba(150,180,255,0.4)",
      }}
    >
      <CategoryIcon slug={slug} size={28} className="tile-icon" />
      <span className="tile-label" style={{ fontSize: 13 }}>
        {label}
      </span>
    </Link>
  );
}
