const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	images: {
        unoptimized: true
    },
};

module.exports = withOffline(nextConfig);

