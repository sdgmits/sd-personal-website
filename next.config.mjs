/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '', // Add '/repo-name' if not using username.github.io
  trailingSlash: true,
};

export default nextConfig;
