/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                child_process: false,
                net: false,
                tls: false,
            };
        }

        return config;
    },
};

module.exports = nextConfig;
