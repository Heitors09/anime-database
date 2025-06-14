/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images*.alphacoders.com',
      },
      {
        protocol: 'https',
        hostname: 'artfiles.alphacoders.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
      },
    ],
  },
}

module.exports = nextConfig 