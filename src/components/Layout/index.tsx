import {FC, ReactNode} from 'react'

import Header from '../Header'
import SEO from '../SEO'

interface Props {
	children: ReactNode,
}

const Layout: FC<Props> = ({children}) => (
	<>
		<SEO
			description="From solution architecture to delivery planning to hands-on-keyboard div slinging, I choose the right hats for any given task."
			siteUrl="https://msr.codes"
			title="Mikael Rozee | Software Engineer & Technical Analyst"
			siteName="msr.codes"
			twitterUser="@mikaelsrozee"
			image="https://images.ctfassets.net/8kxsu8yy3l3b/20nctnhnjDlwOHW1ok5dvl/6c90495a6ace22821a9333454f54ebde/logo.png"
			favicon="https://images.ctfassets.net/8kxsu8yy3l3b/20nctnhnjDlwOHW1ok5dvl/6c90495a6ace22821a9333454f54ebde/logo.png"
		/>
		<Header />
		<main>
			{children}
		</main>
	</>
)

export default Layout
