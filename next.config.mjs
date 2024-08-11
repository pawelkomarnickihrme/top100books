import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
        port: ''
      }
    ]
  }
};

export default withMDX(config);
