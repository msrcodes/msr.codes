import { ReactNode } from 'react'

import SEO from '../SEO'
import type {SEOProps} from '../SEO'

type LayoutProps = {
    children?: ReactNode,
    seoProps: SEOProps,
}

const Layout = ({children, seoProps}: LayoutProps) => (
    <>
        <SEO {...seoProps} />
        <main>
            {children}
        </main>
    </>
)

export default Layout