/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "salescenter-siniyaisland.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d9hhrg4mnvzow.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
