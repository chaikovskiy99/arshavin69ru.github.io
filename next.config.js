/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  env: {
    DATABASE_URL: 'file:./dev.db'
  }
};

module.exports = nextConfig;
