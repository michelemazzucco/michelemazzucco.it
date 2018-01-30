import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { colors, media, getOuterSpace } from '../utils/commonStyles'
import '../utils/globalStyles'

const NavWrapper = styled.div`
  ${media.md`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  `} 
`

const Shoable = styled.div`
  ${media.md`
    background: ${colors.blue900};
    padding: 0 2rem 2rem;
    ${props => props.open 
      ? css`
        display: block;
      `
      : css`
        display: none;
      `}
  `} 
`

const ToggleMenu = styled.div`
  display: none;
  height: 2rem;
  width: 2rem;
  ${props => props.open 
    ? css`
      background: red;
    `
    : css`
      background: green;
    `}
  
  ${media.md`
    display: block;
  `}
`

const Header = styled.header`
  ${media.md`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 9rem;
    background-image: linear-gradient(to bottom,rgba(30,39,51,0.0) 0%,rgba(30,39,51,1) 50%);
    ${getOuterSpace('padding')};
  `}
`

class Layout extends Component {
  constructor() {
    super()
    this.state = { navOpen: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  state = { navOpen: false }

  toggleMenu() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {
    const { children } = this.props
    
    return(
      <div>
        <div>{children()}</div>
        <NavWrapper>
          <Header>
            <Logo />
            <ToggleMenu 
              open={this.state.navOpen} 
              onClick={this.toggleMenu} 
            />
          </Header>
          <Shoable open={this.state.navOpen}>
            <Menu />
            <Footer />
          </Shoable>
        </NavWrapper>
      </div>      
    )
  }
}

export default Layout
