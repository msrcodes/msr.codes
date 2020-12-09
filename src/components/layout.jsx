import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({location, title, children}) => (
	<div className="min-h-screen grid md:grid-rows-layout md:grid-cols-layout grid-rows-layoutm grid-cols-layoutm">
		<Header />
		<main className="bg-yellow-300">{children}</main>
		<Footer />
	</div>
)

export default Layout
