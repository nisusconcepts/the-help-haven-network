export const metadata = { title: "Terms of Service — The Help Haven Network" };

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 720 }}>
      <div className="hero-panel" style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Terms of Service</h2>
        <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
          These terms govern your use of The Help Haven Network (operated by Nisus Concepts LLC, a Texas
          limited liability company — &quot;we,&quot; &quot;us&quot;). By browsing this site or submitting
          a resource, you agree to them.
          <br />
          <span style={{ fontSize: 12.5 }}>Last updated: September 2026.</span>
        </p>
      </div>

      <div className="panel-block" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Section title="What this site is">
          <p>
            The Help Haven Network is an informational directory of mental health, recovery, shelter, and
            other support resources. <strong>It is not a substitute for professional medical, legal, or
            crisis care, and it is not itself a crisis service.</strong> If you or someone else is in
            immediate danger, call 911. We are not affiliated with, and do not control, any organization
            listed in the directory.
          </p>
        </Section>

        <Section title="No guarantee of accuracy">
          <p>
            Listings are community-sourced and reviewed before publishing, but organizations change
            hours, eligibility, staff, and services without telling us. A &quot;Verified&quot; badge means
            an admin or our automated check found the listed phone number or address on the
            organization&apos;s own website at some point — it&apos;s a heuristic, not a guarantee, and a
            missing badge doesn&apos;t mean a listing is wrong. Always confirm hours, eligibility, and
            availability directly with the organization before relying on a listing.
          </p>
        </Section>

        <Section title="Submitting a resource">
          <p>
            Anyone may submit a resource, including an organization submitting its own listing. By
            submitting, you confirm the information is accurate to the best of your knowledge and that
            you have the right to share it, and you grant us a non-exclusive, royalty-free right to
            publish, display, and edit it (for clarity, formatting, or accuracy) on this site. We
            review every submission before publishing and may reject, edit, or later remove any listing
            at our discretion — including one that is inaccurate, misleading, spam, or otherwise
            inappropriate for a directory serving people in vulnerable situations. Submitting a resource
            does not guarantee it will be published, and does not create any business relationship
            between you and us.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>
            Don&apos;t use this site to submit false, fraudulent, or misleading information; to spam,
            scrape at scale, or attempt to bypass the form&apos;s anti-spam protections; to impersonate an
            organization you&apos;re not authorized to represent; or to submit anything illegal, abusive,
            or that could put a vulnerable person at risk. We may block access or remove content from
            anyone who violates this.
          </p>
        </Section>

        <Section title="Third-party organizations and links">
          <p>
            Listings link to or describe services run by independent third parties. Using any listed
            organization&apos;s services is between you and that organization, governed by their own
            policies — not ours. We&apos;re not responsible for the conduct, content, or services of any
            organization listed here, and listing an organization is not an endorsement of it beyond what
            our review process confirms (accuracy of the contact information, not quality of care).
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The site&apos;s design, code, and original written content belong to Nisus Concepts LLC.
            Submitted listing content remains the submitter&apos;s (or the organization&apos;s), shared
            with us under the license above. You may share links to this site or quote a listing for
            personal, non-commercial reference; you may not scrape or republish the directory as your own
            without our permission.
          </p>
        </Section>

        <Section title="No warranty">
          <p>
            This site is provided &quot;as is,&quot; without warranties of any kind, express or implied,
            including accuracy, availability, or fitness for a particular purpose. We do our best to keep
            listings current and the site running, but we don&apos;t guarantee either.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, Nisus Concepts LLC and The Help Haven Network are not
            liable for any damages arising from your use of this site or your reliance on any listed
            information — including harm caused by an inaccurate listing, an organization&apos;s own
            conduct, or a service interruption. Nothing here limits liability where the law doesn&apos;t
            allow it to be limited.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update these terms as the site changes. Material changes will update the &quot;last
            updated&quot; date above; continuing to use the site after a change means you accept the
            updated terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of the State of Texas, without regard to conflict-of-law
            principles.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms, or a listing you believe violates them, go to{" "}
            <a href="mailto:nisusconcepts@gmail.com?subject=Terms%20question">nisusconcepts@gmail.com</a>.
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

