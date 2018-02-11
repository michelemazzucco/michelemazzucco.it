import React from 'react'
import Navigation from '../components/Navigation'
import '../utils/globalStyles'

export default ({ children, location }) =>
  <main>
    {children()}
    <Navigation location={location}/>
  </main>    
