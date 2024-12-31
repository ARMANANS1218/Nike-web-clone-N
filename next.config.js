/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API_HOST: process.env.API_HOST,
  },
  images: {
    domains: ["http://localhost:3000"],
  },
};

module.exports = nextConfig;
