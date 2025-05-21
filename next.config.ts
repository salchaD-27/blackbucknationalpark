import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',  // For static export
  assetPrefix: isProd ? '/blackbucknationalpark/' : '',  // Adjust this based on your production setup
  basePath: isProd ? '/blackbucknationalpark' : '',  // Adjust base path if deploying to subdirectory
  images: {
    unoptimized: true, // You can keep this if you're using next/image with custom images
  },
  trailingSlash: true,  // Optional, ensures URLs have a trailing slash
  publicRuntimeConfig: {
    basePath: isProd ? '/blackbucknationalpark' : '',  // Base path for production
  },
};

export default nextConfig;
