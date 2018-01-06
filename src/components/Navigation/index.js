import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../Menu'

class Navigation extends Component {
  state = { open: false }

  render() {
    const { children } = this.props
    
    return (
      <div>
        <div>{children}</div>
        <Menu {...open} />
      </div>
    )
  }
}

export default Navigation
