/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true, // If using App Router
  },
};

export default nextConfig;