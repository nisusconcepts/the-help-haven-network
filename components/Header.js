"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import VisitStats from "@/components/VisitStats";

const LINKS = [
  { href: "/", label: "Browse" },
  { href: "/add", label: "Add a Resource" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--line)",
        background: "var(--panel)",
      }}
    >
      <div
        className="shell"
        style={{
          paddingTop: 32,
          paddingBottom: 26,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 8 }}>
            <Link href="/" style={{ color: "var(--ink)", textDecoration: "none" }}>
              The Help Haven Network
            </Link>
          </h1>
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "var(--teal-dark)",
              margin: "0 0 8px",
            }}
          >
            Community resource directory
          </p>
          <p style={{ margin: "0 0 10px", color: "var(--ink-soft)", maxWidth: "46ch", fontSize: 14 }}>
            A directory of mental health, recovery, shelter, and support resources — for people who
            need them, and the organizations that provide them. Starting in North Texas, growing nationwide.
          </p>
          <VisitStats />
        </div>
        <nav
          style={{
            display: "flex",
            gap: 4,
            background: "var(--teal-tint)",
            padding: 4,
            borderRadius: 10,
          }}
        >
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "9px 16px",
                  borderRadius: 7,
                  fontSize: 13.5,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: active ? "var(--ink)" : "var(--teal-dark)",
                  background: active ? "var(--panel)" : "transparent",
                  boxShadow: active ? "var(--shadow)" : "none",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
