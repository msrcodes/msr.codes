import { ReactNode } from 'react'
import { ISeoConfigFields } from '../../../@types/generated/contentful'

import SEO from '../SEO'

type LayoutProps = {
    children?: ReactNode,
    seoFields: ISeoConfigFields,
}

const Layout = ({children, seoFields}: LayoutProps) => (
    <>
        <SEO {...seoFields} />
        <main>
            {children}
        </main>
    </>
)

export default Layout