/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
    
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
      },
    ],
  },
}

module.exports = nextConfig 