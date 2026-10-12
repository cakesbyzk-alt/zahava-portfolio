import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    qualities: [75, 95, 100],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
