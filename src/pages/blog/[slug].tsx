import {GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage} from 'next'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemoteSerializeResult, MDXRemote} from 'next-mdx-remote'

import {getAllBlogSlugs, map} from '../../helpers/blog'
import Tags from '../../components/Tags'

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>,
	title: string,
	tags: string[],
}

const BlogPost: NextPage<Props> = ({source, title, tags}) => (
	<>
		<article className="prose mx-auto">
			<h1>{title}</h1>
			<Tags tags={tags} />
			<MDXRemote {...source} />
		</article>
	</>
)

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = getAllBlogSlugs()

	const paths = slugs.map((s) => ({
		params: {slug: s.substring(1)},
	}))

	const result: GetStaticPathsResult = {
		paths,
		fallback: false,
	}

	return result
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const slug = params?.slug as string ?? ''
	const f = map.get(`/${slug}`)

	if (!f) {
		return {props: {}}
	}

	const source = await serialize(f?.content ?? '')

	return {props: {source, ...f.data}}
}

export default BlogPost
