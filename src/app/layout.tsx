import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { event } from "../content/content";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://noorhackathon.com";
const title = `${event.name} | ${event.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title,
  description: event.description,
  openGraph: { title, description: event.description, url: site, siteName: event.name, images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title, description: event.description, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="sky" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
