import {FC, useState} from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'

export interface HeaderLinkProps {
	title: string,
	href: string,
	last?: boolean,
}

const HeaderLink: FC<HeaderLinkProps> = ({title, href, last = false}: HeaderLinkProps) => (
	<Link href={href} passHref>
		{/* passHref is present onLink, so accessibility is preserved here */}
		{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
		<a className={`hover:underline mt-4 sm:mt-0 ${last ? '' : 'sm:mr-4'}`}>{title}</a>
	</Link>
)

interface HeaderLinksProps {
	links: HeaderLinkProps[],
}

const HeaderLinks: FC<HeaderLinksProps> = ({links}) => (
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

interface HeaderProps {
	links?: HeaderLinkProps[],
}

const Header: FC<HeaderProps> = ({links = []}) => {
	const [collapsed, setCollapsed] = useState(true)

	return (
		<header className="flex items-center justify-between flex-wrap bg-primary text-white p-6 transition-all">
			<h1 className="text-xl font-extrabold w-full text-center sm:w-auto sm:text-left">
				<HeaderLink title="msr.codes" href="/" />
			</h1>
			{/* Mobile nav */}
			<nav className={`flex flex-col w-full text-center sm:w-auto sm:text-left sm:flex-row ${collapsed ? 'hidden' : 'sm:hidden'}`}>
				<HeaderLinks links={links} />
			</nav>
			{/* Desktop nav */}
			<nav className="hidden sm:flex flex-col w-full text-center sm:w-auto sm:text-left sm:flex-row">
				<HeaderLinks links={links} />
			</nav>
			<button
				className="border-white border p-2 absolute top-5 right-5 sm:hidden"
				type="button"
				onClick={() => setCollapsed(!collapsed)}
				aria-label="Toggle navigation"
			>
				<GiHamburgerMenu />
			</button>
		</header>
	)
}

export default Header
