import React from 'react'
import '../assets/styles/theme.scss'
import Header from './Header'
import Helmet from 'react-helmet'
import Credits from './Credits';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <Helmet bodyAttributes={{
          class: "bilberry-hugo-theme"
        }}/>
        <Header/>
        <div className="main container">
          {children}
        </div>
        <Credits/>
      </div>
    )
  }
}

export default Layout
