import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'

const Home = ({data}) => {
	const blogs = data?.blogs?.edges || []
	return (
		<Layout>
			{
				blogs.map(({node: {excerpt, frontmatter: {date, path, title}}}) => (
					<section>
						<h2>{title}</h2>
						<h3>{new Date(date).toDateString()}</h3>
						<p>{excerpt}</p>						
						<Link to={path}><button>Read now</button></Link>
					</section>
				))
			}
		</Layout>
	)
}

export default Home

export const pageQuery = graphql`
	query {
		blogs: allMarkdownRemark(
			sort: {fields: [frontmatter___date], order: DESC}
			limit: 5
		) {
			edges {
				node {
					excerpt
					frontmatter {
						date
						title
						path
					}
				}
			}
		}
	}
`
