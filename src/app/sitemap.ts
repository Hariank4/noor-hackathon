import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://noorhackathon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site }, { url: `${site}/privacy` }];
}
