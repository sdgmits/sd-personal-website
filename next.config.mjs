/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/sd-personal-website',
  trailingSlash: true,
};

export default nextConfig;
