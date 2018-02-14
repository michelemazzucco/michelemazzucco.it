import React from 'react'
import Link from 'gatsby-link'
import Circle from './circle.svg'
import { Wrapper } from './style'

const Logo = () =>
  <Wrapper>
    <div>
      <Link to='/'><Circle width={22} height={22} /></Link>
      <div className="circle" />
    </div>
  </Wrapper>

export default Logo
