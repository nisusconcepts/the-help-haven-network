export const metadata = { title: "Privacy Policy — The Help Haven Network" };

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 720 }}>
      <div className="hero-panel" style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Privacy Policy</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
          The Help Haven Network (operated by Nisus Concepts LLC, a Texas limited liability company —
          &quot;we,&quot; &quot;us&quot;) is a directory, not a data company. This page explains, in plain
          terms, what we actually collect when you use this site, why, and who else sees it.
          <br />
          <span style={{ fontSize: 12.5 }}>Last updated: September 2026.</span>
        </p>
      </div>

      <div className="panel-block" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Section title="The short version">
          <p>
            You don&apos;t need an account to search this directory. We don&apos;t run ads, sell data, or
            use third-party analytics or ad trackers. The only accounts on this site belong to the small
            team that reviews submissions. What follows is the full detail behind that summary.
          </p>
        </Section>

        <Section title="Information you provide">
          <p>
            If you use the &quot;Add a Resource&quot; form, we collect whatever you type into it: an
            organization&apos;s name, category, description, phone number, city/region, address, hours,
            eligibility requirements, website, and an optional note to the reviewer, plus whether
            you&apos;re submitting as an individual or on an organization&apos;s behalf. The form does not
            ask for your own name, email, or phone number — we don&apos;t know who submitted something
            unless you choose to say so in the note field. Whatever you do submit is stored in our
            database and reviewed by an admin before anything goes live; we may edit a submission for
            clarity or accuracy before publishing it.
          </p>
        </Section>

        <Section title="Automatically collected information">
          <p>
            We keep an anonymous, minimal visit log — just the page path and a timestamp, nothing that
            identifies you — used only to show the &quot;visits since launch&quot; counter in the header.
            The raw log is admin-only; the public counter exposes just the one running total, never
            individual entries. A small marker in your browser&apos;s session storage (not a cookie, and
            not shared across sites) prevents that count from inflating every time you load a new page in
            the same visit; it disappears when you close the tab.
          </p>
          <p>
            Separately, our hosting and database providers (Vercel and Supabase, below) generate their
            own standard infrastructure logs — the kind any web host keeps for security and reliability —
            which can include IP addresses. We don&apos;t access or use those logs ourselves; they exist
            at the infrastructure layer, governed by those providers&apos; own privacy practices.
          </p>
        </Section>

        <Section title="The map and search">
          <p>
            The map on the browse pages loads tiles directly from OpenStreetMap&apos;s tile servers, and a
            ZIP code you search with is sent to OpenStreetMap&apos;s Nominatim geocoding service (through
            our own server, not directly from your browser) to translate it into a map location. Neither
            exchange includes your name or any account information — there isn&apos;t one — but loading
            any third-party map tile or geocoding request works like loading any other image or resource
            from across the web: the provider's own server sees the request, including your IP address,
            under its own policies.
          </p>
        </Section>

        <Section title="Fonts">
          <p>
            The site&apos;s typefaces are loaded from Google Fonts and jsDelivr, two widely used content
            delivery networks. Like any font or script loaded from a CDN, your browser makes a direct
            request to their servers, subject to their own standard logging practices — no site login or
            personal data is involved.
          </p>
        </Section>

        <Section title="Admin accounts">
          <p>
            The site&apos;s review team signs in through Supabase Authentication (email and password).
            That login system is Supabase&apos;s, not ours to inspect — we never see or store a
            plaintext password. This applies only to the small internal review team; the public never
            needs an account to use this site.
          </p>
        </Section>

        <Section title="Who we share information with">
          <p>
            We don&apos;t sell, rent, or trade any information collected through this site. The only
            parties who process it are the infrastructure we run on — <strong>Supabase</strong> (database
            and authentication), <strong>Vercel</strong> (hosting), <strong>OpenStreetMap</strong> (map
            tiles and geocoding), and <strong>Google Fonts</strong> / <strong>jsDelivr</strong> (font
            delivery) — each acting as a service provider, not an independent user of your data. Published
            resource listings are, by design, public and visible to anyone who visits the site; that&apos;s
            the whole point of a directory.
          </p>
        </Section>

        <Section title="Children's privacy">
          <p>
            This directory includes resources relevant to people of any age, including minors seeking
            help (for example, LGBTQ+ or domestic-violence support). Browsing and searching the directory
            require no personal information from anyone. We don&apos;t knowingly collect personal
            information from children through the submission form, and we ask that submitters not include
            a minor&apos;s personal details in a note or description. If you believe a submission
            contains a child&apos;s personal information, contact us below and we&apos;ll remove it.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            Since we don&apos;t collect contact information from public users, there&apos;s no account or
            marketing list to opt out of. If you submitted a resource and want it corrected, updated, or
            taken down — whether it&apos;s your own organization&apos;s listing or one you flagged as
            inaccurate — email us at{" "}
            <a href="mailto:nisusconcepts@gmail.com?subject=Privacy%20request">nisusconcepts@gmail.com</a>{" "}
            and we&apos;ll act on it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If how we handle data changes in a meaningful way, we&apos;ll update this page and the
            &quot;last updated&quot; date at the top. We don&apos;t send notices for routine wording
            clarifications.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy, or about information tied to a specific submission, go to{" "}
            <a href="mailto:nisusconcepts@gmail.com?subject=Privacy%20question">nisusconcepts@gmail.com</a>.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 style={{ fontSize: 16, marginBottom: 8 }}>{title}</h3>
      <div style={{ color: "var(--ink-soft)", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 10 }}>
        {children}
      </div>
    </div>
  );
}

