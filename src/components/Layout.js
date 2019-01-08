import React from 'react'
import { Link } from 'gatsby'
import '../assets/styles/theme.scss'
import Header from './Header'
import Helmet from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1

        >
          <Link

            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3

        >
          <Link

            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <Helmet bodyAttributes={{
          class: "bilberry-hugo-theme"
        }}/>
        <Header title={title}/>
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
