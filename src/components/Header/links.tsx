import {FC} from 'react'
import HeaderLink, {Props as HeaderLinkProps} from './link'

export interface Props {
	links: HeaderLinkProps[],
}

const HeaderLinks: FC<Props> = ({links}) => (
	<>
		{links.map(({title, href}, i) => (
			<HeaderLink
				title={title}
				href={href}
				last={i === links.length - 1}
				key={`header-${title}-${href}-${i}`}
			/>
		))}
	</>
)

export default HeaderLinks
