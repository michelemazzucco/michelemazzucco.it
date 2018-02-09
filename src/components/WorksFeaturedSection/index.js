import React from 'react'
import { withPrefix } from 'gatsby-link'
import styled from 'styled-components'
import withSizes from 'react-sizes' 
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { media } from '../../utils/commonStyles'

const WorkFeatured = styled.article`
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  padding-top: 74% !important;
  box-shadow: 0 10px 30px rgba(19, 27, 37, .4);
  transform: translateY(0);
  transition: all .3s cubic-bezier(.45, 0, .1, 1);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: box-shadow, transform;
  ${media.sm`
    padding-top: 100% !important;
  `}
  
  img {
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    height: 100%;
    width: auto;
    margin: auto;
  }

  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 20px 52px rgba(19, 27, 37, .6);
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    line-height: 0;
  }

  ${media.sm`
    box-shadow: none;
    transform: translateY(0);
    &:hover {
      box-shadow: none;
      transform: translateY(0);     
    }
  `}
`

const WorksFeaturedWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

const StyledCarousel = styled(Carousel)`
  box-shadow: 0 10px 30px rgba(19, 27, 37, .4);
  overflow: hidden;
  border-radius: 2px;
  
  .carousel .control-dots {
    margin: 0 0 1rem;
    
    .dot {
      box-shadow: none;
      height: 1px;
      width: 1.5rem;
      margin: 0 .25rem;
    }
  }
`

const WorksFeaturedSection = ({ works, isMobile }) => {
  const worksList = works.map(({ work }, i) => {
    const { image, url, title } = work
    return (
      <WorkFeatured key={i}>
        <img width={500} height={360} alt={title} src={withPrefix(image)} />
        {url && <a href={url} target="_blank" rel="noopener noreferrer">More Info</a>}
      </WorkFeatured>
    )
  })

  return (
    isMobile 
    ? <StyledCarousel 
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={10000}
        infiniteLoop
        autoPlay
      >
        {worksList}
      </StyledCarousel>
    : <WorksFeaturedWrapper>{worksList}</WorksFeaturedWrapper>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 640,
})

export default withSizes(mapSizesToProps)(WorksFeaturedSection)
