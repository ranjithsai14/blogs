/** @type {import('next').NextConfig} */
const nextConfig = {
    
    reactStrictMode: true,
    distDir: "build",
    output: "export",

    images: {
      unoptimized: true,
    },

    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,

  },
};


export default nextConfig;