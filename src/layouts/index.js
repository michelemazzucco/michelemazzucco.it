import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { media, getOuterSpace } from '../utils/commonStyles'
import '../utils/globalStyles'

const NavWrapper = styled.div`
  ${media.md`
    ${getOuterSpace('padding')};
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 9rem;
    background-image: linear-gradient(-180deg, rgba(30,39,51,0.01) 0%, #1E2733 56%);
    display: flex;
    align-items: flex-end;
    z-index: 10;
  `} 
`

const Shoable = styled.div`
  ${media.md`
    display: none;
  `} 
`

class Layout extends Component {
  state = { navOpen: false }

  render() {
    const { children } = this.props
    
    return(
      <div>
        <div>{children()}</div>
        <NavWrapper>
          <header>
            <Logo />
          </header>
          <Shoable>
            <Menu {...open} />
            <Footer />
          </Shoable>
        </NavWrapper>
      </div>      
    )
  }
}

export default Layout
