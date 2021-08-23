const { withDokz } = require('dokz/dist/plugin');

module.exports = withDokz({
	images: {
		domains: ['useherald.com'],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	reactStrictMode: true,
});
