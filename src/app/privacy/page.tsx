import type { Metadata } from "next";
import Link from "next/link";
import { links } from "../../content/links";

export const metadata: Metadata = { title: "Privacy | Noor Hackathon 2K26" };

export default function Privacy() {
  return (
    <main className="sec">
      <div className="wrap wrap--narrow prose">
        <Link href="/" className="eyebrow">← Back to Noor Hackathon 2K26</Link>
        <h2>Privacy</h2>
        <p>This website does not collect personal information. It has no forms, accounts or uploads.</p>
        <h2>Registration</h2>
        <p>Registration, payment and verification happen on Unstop. Your details, ID card and payment proof are handled there under Unstop&apos;s own privacy policy; we never receive them through this site.</p>
        <h2>Analytics</h2>
        <p>We may count anonymous visits and clicks on the Register button using a cookie-free analytics tool. No cross-site tracking.</p>
        <h2>Third-party services</h2>
        <p>The venue map is an embedded Google Map. Links to Unstop, Instagram, LinkedIn and partner sites lead to services with their own policies.</p>
        <h2>Contact</h2>
        <p>Questions: <a href={`mailto:${links.email}`}>{links.email}</a></p>
      </div>
    </main>
  );
}
