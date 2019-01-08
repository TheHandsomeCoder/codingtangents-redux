import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/styles/theme.scss'
import Image from 'gatsby-image'
export default class Header extends React.Component {

    render() {
        return <StaticQuery
            query={bioQuery}
            render={data => {
                const { title, author, subtitle, social } = data.site.siteMetadata
                return (
                    <header>
                        <div className="container">
                            <div className="logo">
                                <a href="/" className="logo">
                                    <Image
                                        fixed={data.avatar.childImageSharp.fixed}
                                        alt={author}
                                    />
                                </a>
                            </div>
                            <div className="titles">
                                <h3 className="title"><a href="/">{title}</a></h3>
                                <span className="subtitle">{subtitle}</span>
                            </div>
                        </div>
                    </header>
                )
            }}
        />
    }
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
        author
      }
    }
  }
`