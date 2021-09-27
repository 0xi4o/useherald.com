const withPlugins = require('next-compose-plugins');
const withTm = require('next-transpile-modules')(['@herald/widget']);
const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.js',
});

module.exports = withPlugins([withNextra, withTm], {
	images: {
		domains: ['useherald.com'],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
});

// module.exports =
