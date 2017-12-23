import React from 'react'
import globalStyles from '../utils/globalStyles'

const Layout = ({ children }) => {
  globalStyles()
  return (
    <div> 
      {children()}
    </div>
  )
}

export default Layout
