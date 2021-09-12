const withPlugins = require('next-compose-plugins');
const withTm = require('next-transpile-modules')(['@herald/widget']);
const dokz = require('dokz/dist/plugin');

module.exports = withPlugins([
	[
		dokz,
		{
			images: {
				domains: ['useherald.com'],
			},
			pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
			reactStrictMode: true,
		},
	],
	withTm,
]);
