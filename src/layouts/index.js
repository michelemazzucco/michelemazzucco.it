import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../utils/globalStyles'

const Layout = ({ children }) =>
  <Navigation> 
    <Header />
    {children()}
    <Footer />
  </Navigation>

export default Layout
