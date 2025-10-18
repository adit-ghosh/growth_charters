/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            // Turbopack configuration
            rules: {
                // Optional: Add custom loaders if needed
                // '*.svg': {
                //   loaders: ['@svgr/webpack'],
                //   as: '*.js',
                // },
            },
        },
    },
    // Better to fix TypeScript errors than ignore them
    typescript: {
        ignoreBuildErrors: false, // Changed to false for better code quality
    },
    eslint: {
        ignoreDuringBuilds: false, // Don't allow ESLint errors in production
    },
    images: {
        unoptimized: true,
        // If you're using remote images, add your domains:
        // domains: ['example.com'],
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: '**',
        //   },
        // ],
    },
    // Optional: Enable SWC minification for better performance
    swcMinify: true,
    // Optional: Compiler options for production
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Optional: Improve bundling
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        // You can extend webpack configuration here if needed
        return config
    },
}

export default nextConfig
