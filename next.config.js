/** @type {import('next').NextConfig} */

// const ContentSecurityPolicy = `
//   default-src 'self' https://www.nfa.gg data: blob:;
//   script-src 'self' https://www.nfa.gg 'unsafe-inline' 'unsafe-eval';

//   child-src 'self' https://www.nfa.gg;

//   style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
//   font-src https://fonts.gstatic.com;
//   img-src 'self';
// `;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // {
  //   key: "Content-Security-Policy",
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  // },
];

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/arcade-room",
        destination: "/rebel-run/index.html",
        permanent: true,
      },
      {
        source: "/rebel-run",
        destination: "/rebel-run/index.html",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
