/** @type {import('next').NextConfig} */ const nextConfig
  = {
    output: 'standalone',

    experimental: {
      typedRoutes                     : true,
      serverActions                   : true,
      serverComponentsExternalPackages: [
        'mongodb',
        'prisma',
        'eslint'
      ]
    }
  };
module.exports = nextConfig;
