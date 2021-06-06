import {FC} from 'react'
import Link from '../Link'

export interface Props {
	title: string,
	href: string,
	last?: boolean,
	className?: string,
}

const HeaderLink: FC<Props> = ({title, href, last = false, className = ''}: Props) => (
	<Link href={href} className={`hover:underline mt-4 sm:mt-0 ${last ? '' : 'sm:mr-4'} ${className}`}>
		{title}
	</Link>
)

export default HeaderLink
