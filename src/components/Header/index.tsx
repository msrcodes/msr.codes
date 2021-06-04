import {FC, useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

import HeaderLink, {Props as HeaderLinkProps} from './link'
import HeaderLinks from './links'

interface HeaderProps {
	links?: HeaderLinkProps[],
}

const Header: FC<HeaderProps> = ({links = []}) => {
	const [collapsed, setCollapsed] = useState(true)

	return (
		<header className="flex items-center justify-between flex-wrap bg-blue-300 text-black p-6 transition-all">
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
				className="border-black border p-2 absolute top-5 right-5 sm:hidden bg-white"
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
