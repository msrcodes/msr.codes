import Link from 'next/link'
import {FC} from 'react'

interface Props {
	className?: string
	href: string
	[k: string]: any
}

const CustomLink: FC<Props> = ({className, children, href, ...props}) => (
	<Link {...props} href={href} passHref>
		{/* passHref is present onLink, so accessibility is preserved here */}
		{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		<a className={className}>{children}</a>
	</Link>
)

export default CustomLink
