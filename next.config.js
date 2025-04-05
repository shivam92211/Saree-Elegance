/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    remotePatterns: [],
    unoptimized: true,
  },
  async redirects() {
    return [];
  },
}

module.exports = nextConfig;
