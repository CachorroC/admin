/** @type {import('next').NextConfig} */
const nextConfig = {
  /*   output: 'standalone', */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placekitten.com',
        pathname: '/250/200?image=**',
      },
    ],
    domains: [
      'placekitten.com'
    ],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,

    serverComponentsExternalPackages: [
      'mongodb'
    ],
  },
};

module.exports = nextConfig;
