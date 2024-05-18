/** @type {import('next').NextConfig} */
const path = require('path')

const withPWA = require('next-pwa')
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

module.exports = withPWA({
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    })(nextConfig)
