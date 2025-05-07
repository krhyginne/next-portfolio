const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/my-portfolio' : '',
  basePath: isProd ? '/my-portfolio' : '',
  output: 'export',
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'), // Fixed alias path
    };
    return config;
  },
};

module.exports = nextConfig;
