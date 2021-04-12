import {Entry} from 'contentful'
import {ReactNode} from 'react'
import {ISeoConfigFields, ILinkFields} from '../../../@types/generated/contentful'

import Header, {HeaderLinkProps} from '../Header'
import SEO from '../SEO'

type LayoutProps = {
	children: ReactNode,
	seoFields: ISeoConfigFields,
	headerLinks: Entry<ILinkFields>[],
}

const Layout = ({children, seoFields, headerLinks}: LayoutProps) => {
	const hLinks: HeaderLinkProps[] = headerLinks.map(({fields: {title, url}}) => ({
		title,
		href: url,
	}))

	return (
		<>
			<SEO {...seoFields} />
			<Header links={hLinks} />
			<main className="mt-8 mx-auto">
				{children}
			</main>
		</>
	)
}

export default Layout
