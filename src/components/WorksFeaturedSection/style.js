import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import Image from '../Image'
import { media } from '../../style/constants'

export const WorkFeatured = styled.article`
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, .35);
  transform: translateY(0);
  transition: all .3s cubic-bezier(.45, 0, .1, 1);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: box-shadow, transform;

  &:hover {
    transform: translateY(-.5rem);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .35);
  }

  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 0;
    line-height: 0;
    z-index: 2;
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

export const StyledImage = styled(Image)`
  display: block;
  position: relative;
  background: #242e3a;
  
  &::before {
    content: '';
    padding-top: 74%;
    display: block;
    ${media.sm`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    object-fit: cover;
    z-index: 1;
  }
`

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

export const StyledCarousel = styled(Carousel)`
  box-shadow: 0 10px 30px rgba(19, 27, 37, .4);
  overflow: hidden;
  border-radius: 2px;
  
  .carousel {
    .slide {
      background: transparent;
    }

    .control-dots {
      margin: 0 0 1rem;
      
      .dot {
        box-shadow: none;
        height: 1px;
        width: 1.5rem;
        margin: 0 .25rem;
        border-radius: 0;
      }
    }
  }
`
