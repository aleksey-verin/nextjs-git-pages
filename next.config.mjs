/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-git-pages',
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'flagcdn.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
};

export default nextConfig;
