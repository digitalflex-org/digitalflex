/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            loaders: {},
        },
    },
    images: {
        domains: ['techedo.com', 'badger-website-staging.s3.amazonaws.com', 'archive.org'],
    },
};

export default nextConfig;
