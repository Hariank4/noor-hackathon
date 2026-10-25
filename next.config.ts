import type { NextConfig } from "next";

// Registration is a Google Form for now (client dropped Unstop). Override with NEXT_PUBLIC_REGISTER_URL if it changes.
const FORM = "https://docs.google.com/forms/d/e/1FAIpQLSexvxYRc1TAvgwUOxrpAtNZI97cgYq3Dl9lNJVf8Ua8-5LCJw/viewform?usp=header";
const register = process.env.NEXT_PUBLIC_REGISTER_URL || FORM;

// /go/register is the one canonical entry to registration: change the target here (via env) and every button, poster and QR keeps working.
// Visitors' query (e.g. ?utm_content=hero) is forwarded by Next.
const destination = `${register}${register.includes("?") ? "&" : "?"}utm_source=noorhackathon.com&utm_medium=site&utm_campaign=noor2026`;

const config: NextConfig = {
  env: { NEXT_PUBLIC_REGISTER_URL: register },
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
