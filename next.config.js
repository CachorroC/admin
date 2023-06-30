/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: 'standalone', */
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: [
      'mongodb'
    ],
  },
};

module.exports = nextConfig;
