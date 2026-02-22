/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Only use basePath for GitHub Pages, not for Cloudflare
  basePath: process.env.GITHUB_ACTIONS ? '/sd-personal-website' : '',
  trailingSlash: true,
};

export default nextConfig;
