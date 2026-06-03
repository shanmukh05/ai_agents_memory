import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export (required for GitHub Pages)
  trailingSlash: true,       // GitHub Pages needs trailing slashes on routes
  basePath: isProd ? "/ai_agents_memory" : "",   // ← change to your exact repo name
  assetPrefix: isProd ? "/ai_agents_memory/" : "", // ← same repo name
  images: {
    unoptimized: true,       // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
