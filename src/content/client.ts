import {createClient} from 'contentful'
import type {IComponentRichTextFields, ILinkFields, IPageFields} from '../../@types/generated/contentful'

const {
	CONTENTFUL_SPACE_ID: space,
	CONTENTFUL_PREVIEW: previewKey,
	CONTENTFUL_DELIVERY: deliveryKey,
} = process.env

if (!space) {
	throw new Error('CONTENTFUL_SPACE_ID is undefined. Please specify a value in your .env.local')
}

/**
 * If a CONTENTFUL_DELIVERY key is truthy, return true
 */
const isPreview = !deliveryKey

const accessToken = isPreview ? previewKey : deliveryKey
if (!accessToken) {
	throw new Error(`Access token is undefined. Please specify a value in your .env.local. Found:\nCONTENTFUL_PREVIEW=${previewKey}\nCONTENTFUL_DELIVERY=${deliveryKey}`)
}

const client = createClient({
	space,
	accessToken,
	host: isPreview ? 'preview.contentful.com' : 'contentful.com',
})

/**
 * Helper function to return all URL slug values
 * @returns An array of all URL Slug properties specified in Contentful
 */
export const getSlugs = async () => {
	const {items} = await client.getEntries<IPageFields>({content_type: 'page'})

	// eslint-disable-next-line max-len
	const validPages = items.filter(({fields}) => !!fields.pageBlocks && !!fields.seoConfig && !!fields.headerLinks)

	const slugs = validPages.map(({fields: {urlSlug}}) => urlSlug)
	return slugs
}

export type Fields = IComponentRichTextFields
export type Type = 'componentRichText'

export type Block = {
	fields: Fields
	type: Type,
	id: string,
}

export const getPageData = async (slug: string) => {
	// Return undefined if the slug is not found
	if (!(await getSlugs()).includes(slug)) return undefined

	// Get all content items
	const {items} = await client.getEntries<IPageFields>({content_type: 'page'})
	const {
		fields: {
			pageBlocks,
			seoConfig,
			headerLinks: linksContainer,
		},
	} = items.filter((x) => x.fields.urlSlug === slug)[0]

	const headerLinks = await Promise.all((linksContainer?.[0] || []).fields.links.map(
		async ({sys: {id}}) => {
			const link = await client.getEntry<ILinkFields>(id)
			return link
		},
	))

	const blocks: Block[] = (pageBlocks || []).map((block) => ({
		fields: block.fields,
		type: block.sys.contentType.sys.id,
		id: block.sys.id,
	}))

	return {blocks, seoConfig, headerLinks}
}

export default client
