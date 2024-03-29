/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "utfs.io",
      },
      {
        hostname: "img.clerk.com",
      },
    ],
  },
}

export default nextConfig
