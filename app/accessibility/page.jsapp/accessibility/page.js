export const metadata = { title: "Accessibility — The Help Haven Network" };

export default function AccessibilityPage() {
  return (
    <div style={{ maxWidth: 680 }}>
      <div className="hero-panel" style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Accessibility Statement</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
          The Help Haven Network is meant to be usable by everyone who needs it — including people
          using a screen reader, navigating by keyboard alone, or reading with dyslexia. We aim to
          meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, and treat
          accessibility as ongoing work, not a one-time fix.
        </p>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
          What that looks like on this site today: every text color has been checked against WCAG's
          contrast requirements, and darkened wherever it fell short; every interactive
          element — category tiles, forms, resource cards, the sponsor and admin links — can be
          reached and used with a keyboard alone, with a visible focus outline; a &quot;Skip to main
          content&quot; link lets keyboard users jump straight past the repeated header on every page;
          the whole site is set in OpenDyslexic, a typeface designed to be easier to read for people
          with dyslexia; and the interactive map is always backed by a full text list of the same
          resources, so location information is never map-only.
        </p>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 0 }}>
          If you run into anything on this site that&apos;s hard to use with assistive technology, or
          have a suggestion for making it more accessible, we want to hear about it — email{" "}
          <a href="mailto:nisusconcepts@gmail.com?subject=Accessibility%20feedback">
            nisusconcepts@gmail.com
          </a>{" "}
          and we&apos;ll look into it.
        </p>
      </div>

      <div className="panel-block">
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
          Last reviewed September 2026. This statement describes the state of the site as of that
          review — if something has slipped since, the email above is the fastest way to flag it.
        </p>
      </div>
    </div>
  );
}
