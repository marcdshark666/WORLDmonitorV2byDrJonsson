import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/WORLDmonitorV2byDrJonsson" : "",
  assetPrefix: isProd ? "/WORLDmonitorV2byDrJonsson/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
