import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Logo from '../../components/Logo'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import ToggleMenu from '../../components/ToggleMenu'
import { colors, media, getOuterSpace } from '../../utils/commonStyles'

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
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props => props.open 
      ? css`
        max-height: 200px;
      `
      : css`
        max-height: 0;
      `}
    
    > div {
      padding: 0 3rem 3rem;
    }
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

class Navigation extends Component {
  constructor() {
    super()
    this.state = { open: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ open: !this.state.open })
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props

    if (location.pathname !== prevProps.location.pathname) {
      this.toggleMenu()
    }
  }

  render() {
    const { open } = this.state
    return (
      <NavWrapper>
        <Header>
          <Logo />
          <ToggleMenu 
            open={open} 
            onClick={this.toggleMenu} 
          />
        </Header>
        <Shoable open={open}>
          <div>
            <Menu />
            <Footer />
          </div>
        </Shoable>
      </NavWrapper>      
    )
  }
}

export default Navigation
