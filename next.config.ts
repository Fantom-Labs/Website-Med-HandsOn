import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure we're not using port 8080
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
