import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/blackbucknationalpark/' : '',
  basePath: isProd ? '/blackbucknationalpark' : '',
  images: {
    unoptimized: true, // only needed if you're using next/image
  },
  trailingSlash: true, 
};

export default nextConfig;