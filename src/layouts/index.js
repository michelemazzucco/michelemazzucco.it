import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import globalStyles from '../utils/globalStyles'

const Layout = ({ children }) => {
  globalStyles()
  return (
    <div> 
      <Header />
      {children()}
      <Nav />
    </div>
  )
}

export default Layout
