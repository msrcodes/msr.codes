module.exports = {
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-netlify-cms',
		'gatsby-transformer-json',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/_content/blog`,
				name: 'blogs',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/_content/navigation`,
				name: 'navigations',
			},
		},
	],
}
