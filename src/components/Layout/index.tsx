import {FC, ReactNode} from 'react'

import Header from '../Header'
import SEO, {Props as SEOProps} from '../SEO'

interface Props {
	children: ReactNode,
	seoFields?: SEOProps,
}

const Layout: FC<Props> = ({children, seoFields}) => (
	<>
		<SEO {...seoFields} />
		<Header />
		<main className="mt-8 mx-auto px-6">
			{children}
		</main>
	</>
)

export default Layout
