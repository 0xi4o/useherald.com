const withPlugins = require('next-compose-plugins');
const withTm = require('next-transpile-modules')(['@herald/widget']);
const { withDokz } = require('dokz/dist/plugin');

module.exports = withPlugins([withDokz, withTm], {
	images: {
		domains: ['useherald.com'],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
});

// module.exports =
