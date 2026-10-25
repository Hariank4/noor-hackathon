// Single place for every outbound link and "not yet approved" switch.
// Items awaiting client approval are hidden in production unless NEXT_PUBLIC_PREVIEW=1.
const preview = process.env.NEXT_PUBLIC_PREVIEW === "1";

export const flags = {
  showFees: preview, // BRD O-03: client to confirm fees should be shown
  showFaq: true, // organiser-supplied FAQ, approved to show (25 Oct)
  showWhatsApp: false, // client to confirm the group link may be public
};

export const links = {
  register: process.env.NEXT_PUBLIC_REGISTER_URL ?? "",
  brochure: process.env.NEXT_PUBLIC_BROCHURE_URL ?? "",
  // Generic MRU pin until the client approves the exact venue location (BRD O-05).
  mapQuery: "Manav Rachna University, Faridabad",
  instagram: "https://www.instagram.com/noorhackathon/", // derived from @noorhackathon: verify
  linkedin: "", // client to supply
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "", // shown only if flags.showWhatsApp
  email: "contact@noorhackathon.com", // BRD O-01: spelling to be confirmed
  phone: "9812358414",
  authorSite: "https://www.hariankjuneja.tech",
  authorLinkedin: "https://www.linkedin.com/in/hariankjuneja",
};

export const withUtm = (url: string, content: string) => {
  const u = new URL(url);
  u.searchParams.set("utm_source", "noorhackathon.com");
  u.searchParams.set("utm_medium", "site");
  u.searchParams.set("utm_campaign", "noor2026");
  u.searchParams.set("utm_content", content);
  return u.toString();
};
