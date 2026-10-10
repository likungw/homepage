/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dgtzuqphqg23d.cloudfront.net" },
      { protocol: "https", hostname: "image.mux.com" },
    ],
  },
};

// No MDX code generation is required for this research-group website.
module.exports = nextConfig;
