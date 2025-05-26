// next.config.js
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // if you're not using image optimization
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      type: 'asset/resource', // allows Webpack to treat image imports as URLs
    });
    return config;
  },
};

module.exports = nextConfig;
