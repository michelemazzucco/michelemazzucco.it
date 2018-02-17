import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made (with love) in {getCurrentYear()}
    </Item>
    <Item position='right'>
      <span>P.I. 03671100984&nbsp;-&nbsp;</span>
      
      <a target="_blank" rel="noopener noreferrer" href='https://github.com/michelemazzucco/michelemazzucco.it'>Source code</a>
    </Item>
  </Wrapper>

export default Footer
