import React from 'react'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../../utils/commonStyles'

const WorkFeatured = styled.li`
  padding: 1rem;
  width: 50%;

  ${media.md`
    width: 100%;
  `} 
  
  img {
    width: 100%;
    height: auto; 
    display: block;
  }

  > div {
    box-shadow: 0 5px 30px 0 rgba(0,0,0,.4);
    transform: translateY(0);
    border-radius: 1px;
    overflow: hidden;
    transition: all .5s cubic-bezier(0.5, 0.1, 0, 1.15);
    position: relative;
    transform-style: preserve-3d;
  }
  
  &:hover > div {
    transform: translateY(-.5rem);
    box-shadow: 0 15px 52px 0 rgba(0,0,0,.6);
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const WorksFeaturedWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const WorksFeatured = ({ works }) => {
  return (
    <WorksFeaturedWrapper>
      {works.map(({ work }, i) => {
        const { image, url } = work
        const imagePath = require(`../../${image}`)
        return (
          <WorkFeatured key={i}>
            <div>
              <img src={imagePath} />
              {url && <a href={url} target="_blank" />}
            </div>
          </WorkFeatured>
        )
      })}
    </WorksFeaturedWrapper>
  )
}

export default WorksFeatured
