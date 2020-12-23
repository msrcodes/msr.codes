import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'

const Home = ({data}) => {
	const blogs = data?.blogs?.edges || []
	return (
		<Layout>
			<div className="grid mx-6 md:mx-12 my-4 gap-x-2 gap-y-4">
				{
					blogs.map(({node: {excerpt, frontmatter: {date, path, title}}}) => (
						<section className="p-4 shadow-xl bg-secondary rounded-md flex flex-col">
							<h2>{title}</h2>
							<h3>{new Date(date).toDateString()}</h3>
							<p>{excerpt}</p>						
							<Link to={`blog/${path}`} className="self-end">
								<button className="bg-primary hover:bg-primary-dark rounded-md text-white shadow px-4 py-2 mt-2">Read now</button>
							</Link>
						</section>
					))
				}
			</div>
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
