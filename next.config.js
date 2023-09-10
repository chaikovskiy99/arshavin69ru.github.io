/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: 'file:./dev.db'
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
