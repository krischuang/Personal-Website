import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // replaces the old `next export`
  basePath: '/Personal-Website',
  assetPrefix: '/Personal-Website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
