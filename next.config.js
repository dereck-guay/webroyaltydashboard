/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		swcPlugins: [
			[
				"next-superjson-plugin",
				{
					excluded: [],
				},
			],
		],
		appDir: true,
	},
};

module.exports = nextConfig;
