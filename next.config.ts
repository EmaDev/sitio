import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      "firebasestorage.googleapis.com",
      "i.pravatar.cc",
      "sandbox-tailwind-template.netlify.app",
      "astrolus-premium.netlify.app"
    ],
  },
};

export default nextConfig;
