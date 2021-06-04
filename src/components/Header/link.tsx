import {FC} from 'react'
import Link from 'next/link'

export interface Props {
	title: string,
	href: string,
	last?: boolean,
}

const HeaderLink: FC<Props> = ({title, href, last = false}: Props) => (
	<Link href={href} passHref>
		{/* passHref is present onLink, so accessibility is preserved here */}
		{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		<a className={`hover:underline mt-4 sm:mt-0 ${last ? '' : 'sm:mr-4'}`}>{title}</a>
	</Link>
)

export default HeaderLink
