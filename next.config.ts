import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'neiwai.life',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
     ],
    // Allow image optimization from CDNs that may resolve to private IPs in dev
    dangerouslyAllowSVG: false,
    unoptimized: true,
  },
};

export default nextConfig;
