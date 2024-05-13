/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	optimizeFonts: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '**',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
