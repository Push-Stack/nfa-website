/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
