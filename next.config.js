const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: { 
    loader: 'imgix',
    path: isDev ? 'http://localhost:3000/' : 'https://mog.js.org/',
  },
};

module.exports = nextConfig;
