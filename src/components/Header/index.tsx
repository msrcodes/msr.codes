import {FC, useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Sticky from 'react-stickynode'
import useWindowSize from '../../helpers/hooks/windowSize'

import HeaderLink, {Props as HeaderLinkProps} from './link'
import HeaderLinks from './links'

interface HeaderProps {
	links?: HeaderLinkProps[],
}

const Header: FC<HeaderProps> = ({links = [
	{href: '/blog', title: 'Blog'},
	{href: '/uses', title: 'What I use'},
	{href: '/work', title: 'My Work'},
]}) => {
	const [collapsed, setCollapsed] = useState(true)
	const {width} = useWindowSize()

	return (
		<Sticky top={0} innerZ="100">
			<header className="text-primary-default bg-white p-6 mb-6 border-b-4 border-primary-default">
				<div className="mx-auto w-full max-w-[64ch] flex items-center justify-between flex-wrap">
					<h1 className="text-xl font-extrabold w-full text-center sm:w-auto sm:text-left">
						<HeaderLink title="msr.codes" href="/" />
					</h1>
					{(!collapsed || width >= 640) && (
						<nav className="flex flex-col w-full sm:w-auto text-left sm:flex-row">
							<HeaderLinks links={links} />
						</nav>
					)}
					<button
						className="border-black border p-2 absolute top-5 right-9 sm:hidden bg-white"
						type="button"
						onClick={() => setCollapsed(!collapsed)}
						aria-label="Toggle navigation"
					>
						<GiHamburgerMenu />
					</button>
				</div>
			</header>
		</Sticky>
	)
}

export default Header
