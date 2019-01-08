import React from 'react'
import { Link } from 'gatsby'
import '../assets/styles/theme.scss'
import Header from './Header'
import Helmet from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <Helmet bodyAttributes={{
          class: "bilberry-hugo-theme"
        }}/>
        <Header/>
        <div class="main container">
          {children}
        </div>
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
