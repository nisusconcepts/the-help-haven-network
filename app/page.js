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
      <h2 style={{ fontSize: 24, marginBottom: 8 }}>Find help by category</h2>
      <p style={{ color: "var(--ink-soft)", fontSize: 14.5, maxWidth: "56ch", margin: "0 0 24px" }}>
        Pick a category below, or browse everything at once — search and ZIP filtering are on the next page.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
        }}
      >
        <CategoryTile href="/browse" slug={ALL_CATEGORY.slug} label={ALL_CATEGORY.label} color={ALL_CATEGORY.color} tint={ALL_CATEGORY.tint} />
        {CATEGORIES.map((c) => (
          <CategoryTile key={c.slug} href={`/browse/${c.slug}`} slug={c.slug} label={c.label} color={c.color} tint={c.tint} />
        ))}
      </div>
    </div>
  );
}

function CategoryTile({ href, slug, label, color, tint }) {
  return (
    <Link
      href={href}
      className="category-tab"
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
        color,
        background: tint,
        border: `1px solid ${color}`,
        boxShadow: "var(--shadow)",
      }}
    >
      <CategoryIcon slug={slug} size={28} />
      <span style={{ fontWeight: 600, fontSize: 13, lineHeight: 1.25 }}>{label}</span>
    </Link>
  );
}
