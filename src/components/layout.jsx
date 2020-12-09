import React from 'react'

const Layout = ({location, title, children}) => (
	<>
		<header>This will be the header</header>
		<main>{children}</main>
		<footer>This will be the footer</footer>
	</>
)

export default Layout
