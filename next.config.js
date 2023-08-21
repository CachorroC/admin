/** @type {import('next').NextConfig} */ const nextConfig
  = {
    output      : 'standalone',
    experimental: {
      typedRoutes                     : true,
      /*   serverActions                   : true, */
      serverComponentsExternalPackages: [
        'mongodb'
      ]
    }
  };
module.exports = nextConfig;
