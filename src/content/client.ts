import {createClient} from 'contentful'
import type {IPageFields} from '../../@types/generated/contentful'

const {
    CONTENTFUL_SPACE_ID: space,
    CONTENTFUL_PREVIEW: previewKey,
    CONTENTFUL_DELIVERY: deliveryKey,
} = process.env

if (!space) {
    throw new Error(`CONTENTFUL_SPACE_ID is undefined. Please specify a value in your .env.local`)
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

    const slugs = items.map(({fields: {urlSlug}}) => urlSlug)
    return slugs
}

export default client