import React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'

const HeaderLinks = ({className, edges}) => (
    <>
        {
            edges.map(({node: {text, href}}) => (
                /^\/(?!\/)/.test(href) ? <Link to={href} className={className}>{text}</Link> : <a href={href} className={className}>{text}</a>
            ))
        }
    </>
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
        <header className="bg-primary p-4 flex md:flex-col">
            <HeaderLinks className="hover:underline my-2 mr-2" edges={edges} />
        </header>
    )
}

export default Header
