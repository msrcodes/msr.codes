import React from 'react'

const Layout = ({location, title, children}) => (
	<div className="grid md:grid-rows-layout md:grid-cols-layout grid-rows-layoutm grid-cols-layoutm">
		<header className="bg-red-300">This will be the header</header>
		<main className="bg-yellow-300">{children}</main>
		<footer className="bg-green-300 col-span-full">This will be the footer</footer>
	</div>
)

export default Layout
