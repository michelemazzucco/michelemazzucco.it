import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Helmet from 'gatsby-plugin-react-helmet'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import ToggleMenu from '../components/ToggleMenu'
import { colors, media, getOuterSpace } from '../utils/commonStyles'
import { META } from '../utils/constants'
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
    > div {
      padding: 0 3rem 3rem;
    }
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    ${props => props.open 
      ? css`
        max-height: 200px;
      `
      : css`
        max-height: 0;
      `}
  `} 
  ${media.sm`
    > div {
      padding: 0 2rem 2rem;
    }
  `} 
`

const Header = styled.header`
  ${media.md`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 7rem;
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

  componentDidUpdate(prevProps) {
    const { location } = this.props

    if (location.pathname !== prevProps.location.pathname) {
      this.toggleMenu()
    }
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
            <div>
            <Menu />
            <Footer />
            </div>
          </Shoable>
        </NavWrapper>
      </div>      
    )
  }
}

export default Layout
