/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/weather1' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/weather1' : '',
    };

export default nextConfig;