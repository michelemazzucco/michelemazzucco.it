import React from 'react'
import Nav from '../components/Nav'
import globalStyles from '../utils/globalStyles'

const Layout = ({ children }) => {
  globalStyles()
  return (
    <div> 
      {children()}
      <Nav />
    </div>
  )
}

export default Layout
