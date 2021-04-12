import {GetStaticProps, GetStaticPaths} from 'next'
import {FC} from 'react'
import {Entry} from 'contentful'
import {getSlugs, getPageData} from '../content/client'
import type {Block} from '../content/client'

import Mapper from '../components/Mapper'
import Layout from '../components/Layout'
import {ISeoConfig, ILinkFields} from '../../@types/generated/contentful'

interface Props {
	blocks: Block[],
	seoConfig: ISeoConfig,
	headerLinks: Entry<ILinkFields>[],
}

const Page: FC<Props> = ({blocks, seoConfig, headerLinks}: Props) => (
	<Layout seoFields={seoConfig?.fields} headerLinks={headerLinks}>
		<Mapper blocks={blocks} />
	</Layout>
)

export const getStaticProps: GetStaticProps = async (context) => {
	const params = context.params!
	const slugArr = params.slug as string[] || ['']
	const slug = `/${slugArr.join('/')}`

	const {blocks, seoConfig, headerLinks} = (await getPageData(slug))!

	return {props: {blocks, seoConfig, headerLinks}}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = await getSlugs()

	const paths = slugs.map((urlSlug) => {
		const slugArr = urlSlug.split('/').filter(Boolean)

		return {
			params: {slug: slugArr},
		}
	})

	return {paths, fallback: false}
}

export default Page
