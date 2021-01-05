import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'

const HeaderLinks = ({className, edges}) => (
    <nav className="flex md:flex-col">
        {
            edges.map(({node: {text, href}}) => (
                /^\/(?!\/)/.test(href) ? <Link to={href} className={className}>{text}</Link> : <a href={href} className={className}>{text}</a>
            ))
        }
    </nav>
)

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allNavigationJson {
                    edges {
                        node {
                            text
                            href
                        }
                    }
                }
            }
        `
    )

    const edges = data?.allNavigationJson?.edges || []

    return (
        <header className="bg-primary p-4 shadow-2xl">
            <HeaderLinks className="hover:underline my-2 mr-2" edges={edges} />
        </header>
    )
}

export default Header
