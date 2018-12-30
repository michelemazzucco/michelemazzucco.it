import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import { fonts, colors, media } from '../style/constants'

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`

const Subtitle = styled.h1`
  text-align: center;
  font-size: 1.1rem;
  font-family: ${fonts.mono};
  color: ${colors.gray500};
  margin: 1rem 0;
  
  span {
    color: ${colors.yellow500};
  }
`

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  ${media.sm`
    top: 45%;
  `}
`

const BackToHome = styled(Link)`
  color: ${colors.yellow500};
  font-family: ${fonts.mono};
  font-size: .9rem;
  border-bottom: 1px dotted ${colors.yellow500};
  padding: 0 0 .1rem;
  display: inline-block;
  
  &:hover {
    color: ${colors.yellow500};
  }
`

export default ({ location }) =>
  <Layout location={location}>
    <Wrapper>
      <header>
        <Title>Oops, sorry!</Title>
        <Subtitle>This page cannot be found.</Subtitle>
        <BackToHome to='/'>Go to index</BackToHome>
      </header>
    </Wrapper>
  </Layout>
