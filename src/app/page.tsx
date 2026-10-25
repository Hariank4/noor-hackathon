import QRCode from "qrcode";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import SponsorStrip from "../components/SponsorStrip";
import { About, Contact, Faq, Footer, Hero, Partners, Prizes, Register, Rounds, Rubric, Rules, Team, Themes, Venue } from "../components/sections";
import { event } from "../content/content";
import { flags, links, withUtm } from "../content/links";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://noorhackathon.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: "2026-11-02",
  endDate: "2026-11-03",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Manav Rachna University",
    address: { "@type": "PostalAddress", addressLocality: "Faridabad", addressRegion: "Haryana", addressCountry: "IN" },
  },
  url: site,
};

const navItems: [string, string][] = [
  ["About", "#about"],
  ["Themes", "#themes"],
  ["Rounds", "#rounds"],
  ["Prizes", "#prizes"],
  ["Rules", "#rules"],
  ["Venue", "#venue"],
  ...(flags.showFaq ? ([["FAQ", "#faq"]] as [string, string][]) : []),
  ["Contact", "#contact"],
];

export default async function Home() {
  // The QR encodes the direct Unstop URL (not our redirect) so it still works if this site is down.
  const qr = links.unstop
    ? await QRCode.toDataURL(withUtm(links.unstop, "qr"), { margin: 1, width: 360, errorCorrectionLevel: "Q", color: { dark: "#050505", light: "#F7F0E8" } })
    : null;

  return (
    <>
      <Loader />
      <a className="skip" href="#about">Skip to content</a>
      <SponsorStrip />
      <Nav items={navItems} />
      <main>
        <Hero />
        <About />
        <Themes />
        <Rounds />
        <Prizes />
        <Rubric />
        <Rules />
        <Register qr={qr} />
        <Venue />
        <Partners />
        <Faq />
        <Team />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
