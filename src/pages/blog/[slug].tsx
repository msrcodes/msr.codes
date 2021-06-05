import {GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage} from 'next'
import path from 'path'
import matter from 'gray-matter'
import {readdirSync, readFileSync} from 'fs'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemoteSerializeResult, MDXRemote} from 'next-mdx-remote'

import Link from '../../components/Link'

interface Props {
	source: MDXRemoteSerializeResult<Record<string, unknown>>,
	title: string,
	tags: string[],
}

const BlogPost: NextPage<Props> = ({source, title, tags}) => (
	<>
		<article className="prose mx-auto">
			<h1>{title}</h1>
			<div className="flex space-x-2 w-full">
				{tags.map((tag) => (
					<Link href={`/blog?t=${tag}`} className="bg-red-200 font-bold px-2 rounded-md shadow-sm">{tag}</Link>
				))}
			</div>
			<MDXRemote {...source} />
		</article>
	</>
)

export const getStaticPaths: GetStaticPaths = async () => {
	const BLOG_PATH = path.join(process.cwd(), '/src/_content/blogs')

	const files = readdirSync(BLOG_PATH)

	const slugs: string[] = files.map((fileName) => {
		const source = readFileSync(path.join(BLOG_PATH, fileName))
		const {data} = matter(source)
		return data.slug
	})

	const paths = slugs.map((s) => ({
		params: {slug: s.substring(1)},
	}))

	const result: GetStaticPathsResult = {
		paths,
		fallback: false,
	}

	return result
}

type MapDataItem = [
	string,
	{
		content: string,
		data: {
			[k: string]: any,
		}
	},
]

export const getStaticProps: GetStaticProps = async ({params}) => {
	const slug = params?.slug as string ?? ''

	const BLOG_PATH = path.join(process.cwd(), '/src/_content/blogs')

	const files = readdirSync(BLOG_PATH)

	const mapData = files.map((fileName) => {
		const source = readFileSync(path.join(BLOG_PATH, fileName))
		const {data, content} = matter(source)
		return [data.slug, {content, data}] as MapDataItem
	})

	const map = new Map(mapData)

	const f = map.get(`/${slug}`)

	const title: string = f?.data.title ?? 'An error occured'
	const tags: string[] = f?.data.tags?.split(', ') ?? []

	const source = await serialize(f?.content ?? '')

	return {props: {source, title, tags}}
}

export default BlogPost
