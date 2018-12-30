import React from 'react'
import Navigation from './Navigation'
import { GlobalStyle } from '../style/global'

export default ({ children, location }) =>
  <main>
    <GlobalStyle />
    {children}
    <Navigation location={location}></Navigation>
  </main>    
