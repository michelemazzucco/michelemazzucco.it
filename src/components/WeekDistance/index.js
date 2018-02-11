import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fonts, colors } from '../../utils/commonStyles'
import getWeekDistance from '../../utils/api'

const loading = keyframes`
  0% {
    background-position: -20rem 0;
  }
  
  100% {
    background-position: 20rem 0;
  }
`

const DistanceLoader = styled.div`
  display: inline-block;
  height: 1rem;
  width: 10rem;
  animation-duration: .75s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${loading};
  animation-timing-function: linear;
  background: linear-gradient(to right, #273240 8%, #2c3644 18%, #273240 33%);
  background-size: 800px 104px;
  border-radius: 2px;
`

const DistanceWrapper = styled.div`
  font-family: ${fonts.mono};
  font-size: .9rem;
  color: ${colors.gray500};
`

const EmojiWrapper = styled.span`
  font-size: .95rem;
  color: initial;
  display: inline-block;
  vertical-align: middle;
  margin-right: .65rem;
`

const Kilometers = styled.span`
  border-bottom: 1px dotted ${colors.gray700};
  display: inline-block;
  vertical-align: top;
  color: #fff;
`

class WeekDistance extends Component {
  state = { distance: null }

  componentDidMount() {
    getWeekDistance()
      .then(data => this.setState({ distance: data.distance }))
  }

  getEmoji() {
    const { distance } = this.state
    
    return distance >= 40 
      ? <EmojiWrapper role="img" aria-label="fire">🔥</EmojiWrapper> 
      : <EmojiWrapper role="img" aria-label="lighting">⚡️</EmojiWrapper>
  }

  renderDistance() {
    const { distance } = this.state

    return distance === 0 
      ? <span><EmojiWrapper role="img" aria-label="poop">💩</EmojiWrapper>No km of running this week</span>
      : <span>{this.getEmoji(distance)} I've run <Kilometers>{this.state.distance}km</Kilometers> this week</span>
  }

  render() {
    const { className } = this.props
    
    return (
      this.state.distance !== null
        ? <DistanceWrapper className={className}>{this.renderDistance()}</DistanceWrapper>
        : <DistanceLoader className={className} />
    )
  }
}

export default WeekDistance
