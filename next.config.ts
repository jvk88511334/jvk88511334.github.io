import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_PAGES === "true" ? "export" : undefined,
  typescript:
    process.env.GITHUB_PAGES === "true"
      ? { tsconfigPath: "tsconfig.pages.json" }
      : undefined,
};

export default nextConfig;
