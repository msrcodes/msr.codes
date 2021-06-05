import {FC} from 'react'
import Link from '../Link'

export interface Props {
	title: string,
	href: string,
	last?: boolean,
}

const HeaderLink: FC<Props> = ({title, href, last = false}: Props) => (
	<Link href={href} className={`hover:underline mt-4 sm:mt-0 ${last ? '' : 'sm:mr-4'}`}>
		{title}
	</Link>
)

export default HeaderLink
