import {readdirSync, readFileSync} from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

export const BLOG_PATH = join(process.cwd(), '/src/_content/blogs')

export const getAllBlogFiles = () => readdirSync(BLOG_PATH)

export const getAllBlogSlugs = () => getAllBlogFiles().map((fileName) => {
	const source = readFileSync(join(BLOG_PATH, fileName))
	const {data} = matter(source)
	return data.slug
})

export type MapDataItem = [
	string,
	{
		content: string,
		data: {
			slug?: string,
			title: string,
			tags: string[],
			[k: string]: any,
		}
	},
]

export const map = new Map(
	getAllBlogFiles().map((fileName) => {
		const source = readFileSync(join(BLOG_PATH, fileName))
		const {data, content} = matter(source)

		const title: string = data.title ?? 'Untitled Blog'
		const tags: string[] = data.tags.split(', ') ?? []

		return [data.slug, {content, data: {title, tags}}] as MapDataItem
	}),
)

export const getBlogFromSlug = (slug: string) => map.get(slug)
