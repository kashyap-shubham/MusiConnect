import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pub-cb7a2f9fc90a444092d82d29ae6acbf6.r2.dev",
      },
    ],
  },
};

export default nextConfig;
