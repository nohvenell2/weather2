/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: process.env.NODE_ENV === 'production' ? '/weather2' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/weather2' : '',
    };

export default nextConfig;