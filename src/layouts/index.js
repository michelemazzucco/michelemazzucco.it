import React from 'react'
import Navigation from '../components/Navigation'
import '../style/global'

export default ({ children, location }) =>
  <main>
    {children()}
    <Navigation location={location}/>
  </main>    
