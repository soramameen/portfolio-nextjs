import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH || "/portfolio-nextjs";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  images: { unoptimized: true },
};

export default nextConfig;
