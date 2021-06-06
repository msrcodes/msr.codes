import {readdirSync, readFileSync} from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

export const CONTENT_PATH = join(process.cwd(), '/src/_content')

type Types = 'blogs' | 'works'

export const getAllFiles = (type: Types) => readdirSync(join(CONTENT_PATH, type))

export const getAllSlugs = (type: Types) => getAllFiles(type).map((fileName) => {
	const source = readFileSync(join(CONTENT_PATH, type, fileName))
	const {data} = matter(source)
	return data.slug
})

export type ContentItem = [
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

export const getContentMap = (type: Types) => new Map(
	getAllFiles(type).map((fileName) => {
		const source = readFileSync(join(CONTENT_PATH, type, fileName))
		const {data, content} = matter(source)

		const title: string = data.title ?? 'Untitled Content'
		const tags: string[] = data.tags.split(', ') ?? []

		return [data.slug, {content, data: {title, tags}}] as ContentItem
	}),
)

export const getContentFromSlug = (type: Types, slug: string) => getContentMap(type).get(slug)
