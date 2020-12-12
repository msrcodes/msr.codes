module.exports = {
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/blog`,
				name: 'markdown-pages',
			},
		},
	],
}
