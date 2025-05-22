import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // For static export (next export)
  assetPrefix: isProd ? "/blackbucknationalpark/" : "",
  basePath: isProd ? "/blackbucknationalpark" : "",
  images: {
    unoptimized: true, // Required for next/image when using static export
  },
  trailingSlash: true, // Optional: keeps URLs like /about/ instead of /about
};

export default nextConfig;