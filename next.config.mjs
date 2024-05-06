/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
