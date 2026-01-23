import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['www.ellitess.com'],
  },
   async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
