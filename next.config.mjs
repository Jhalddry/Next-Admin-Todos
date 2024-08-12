/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailus.io",
      },
    ],
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
};

export default nextConfig;
