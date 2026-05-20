import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "development" ? "" : "/portfolio-nextjs";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
