import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
      serverComponentsExternalPackages: ["ravendb"],
  },
};

export default nextConfig;
