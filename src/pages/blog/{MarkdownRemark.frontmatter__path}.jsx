import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/layout'

const Blog = (props) => {
	// Get markdownRemark object, or create error object
	const markdownRemark = props?.pageResources?.json?.data?.markdownRemark || {
		html: '<p>Terribly sorry! Something seems to have gone wrong.</p>',
		timeToRead: 1,
		frontmatter: {
			date: Date.now(),
			title: 'An unexpected error occured',
		},
	}

	// Display
	const {html, timeToRead, frontmatter: {date, title}} = markdownRemark
	return (
		<Layout>
			<article className="md:mx-24 mx-8 mt-4">
				<section>
					<h2 className="pt-2">{title}</h2>
					<h3>{new Date(date).toDateString()}</h3>
					<em>{timeToRead} minute{timeToRead > 1 ? 's' : null} to read</em>
				</section>
				<section dangerouslySetInnerHTML={{__html: html}} />
			</article>
		</Layout>
	)
}

export default Blog

export const query = graphql`
	query($id: String) {
		markdownRemark(id: {eq: $id}) {
			html
			timeToRead
			frontmatter {
				date
				title
			}
		}
	}
`
