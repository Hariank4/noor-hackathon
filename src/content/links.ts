// Single place for every outbound link and "not yet approved" switch.
export const flags = {
  showFaq: true, // organiser-supplied FAQ, approved to show (25 Oct)
};

export const links = {
  register: process.env.NEXT_PUBLIC_REGISTER_URL ?? "",
  brochure: process.env.NEXT_PUBLIC_BROCHURE_URL ?? "",
  // Generic MRU pin until the client approves the exact venue location (BRD O-05).
  mapQuery: "Manav Rachna University, Faridabad",
  instagram: "https://www.instagram.com/noorhackathon/", // derived from @noorhackathon: verify
  email: "noorhackathon@gmail.com", // public contact; contact@noorhackathon.com is kept for sponsors/internal use
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
