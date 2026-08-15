import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // local exported Figma assets live in /public/images — no remote loaders needed
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
