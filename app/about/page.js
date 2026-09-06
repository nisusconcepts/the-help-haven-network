export const metadata = { title: "About — The Help Haven Network" };

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 680 }}>
      <div className="hero-panel" style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>About The Help Haven Network</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
          The Help Haven Network is a directory of mental health, substance abuse recovery, shelter, domestic
          violence, LGBTQ+, military and first responder, legal aid, financial assistance, human
          trafficking, food assistance, and clothing/essentials resources. It started in North Texas,
          with the goal of growing city by city — and eventually nationwide. New here and not sure
          where to start? Call <a className="mono" href="tel:211">211</a> (211 Texas) — it connects
          you to local health and human services of every kind, and is the best first call if you
          don&apos;t know where else to look.
        </p>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>
          Anyone can search the directory for free. Anyone can also submit a resource — including
          organizations listing themselves directly — and every submission is reviewed before it goes
          live, to keep listings accurate and to keep bad actors out.
        </p>

        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 0 }}>
          The Help Haven Network is built for, and by, people who have needed resources like these and had trouble
          finding them — and who took hard falls because of that gap. It exists so the next person
          looking doesn&apos;t have to search as hard, or fall as far, to find help.
        </p>
      </div>

      <div className="panel-block">
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
          <strong>This is an informational directory only.</strong> It is not a substitute for
          professional medical, legal, or crisis care. If you or someone else is in immediate danger,
          call 911. Listings are community-sourced and reviewed, but hours and eligibility can change —
          always confirm directly with the organization before you go.
        </p>
      </div>
    </div>
  );
}
