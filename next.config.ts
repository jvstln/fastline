import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
