/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...
  api: {
    bodyParser: false, // Make sure to handle raw body
  },
};

module.exports = nextConfig;
