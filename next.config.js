/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DEVELOPMENT_MODE: process.env.DEVELOPMENT_MODE,
    STADIA_API_KEY:process.env.STADIA_API_KEY
  }
}

module.exports = nextConfig
