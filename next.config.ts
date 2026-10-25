import type { NextConfig } from "next";

// /go/register is the one canonical entry to Unstop: change the target here (via env) and every button, poster and QR keeps working.
// Visitors' query (e.g. ?utm_content=hero) is forwarded by Next. Without a URL (preview), fall back to the on-page instructions.
const unstop = process.env.NEXT_PUBLIC_UNSTOP_URL;
const destination = unstop
  ? `${unstop}${unstop.includes("?") ? "&" : "?"}utm_source=noorhackathon.com&utm_medium=site&utm_campaign=noor2026`
  : "/#register";

const config: NextConfig = {
  async redirects() {
    return [{ source: "/go/register", destination, permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default config;
