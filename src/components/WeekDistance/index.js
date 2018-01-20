import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fonts, colors } from '../../utils/commonStyles'
import { LAMBDA_ENDPOINT } from '../../utils/constants'

const loading = keyframes`
  0%{
    background-position: -20rem 0
  }
  100%{
    background-position: 20rem 0
  }
`

const DistanceLoader = styled.div`
  display: inline-block;
  height: 1rem;
  width: 10rem;
  background: #273240;
  animation-duration: .75s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${loading};
  animation-timing-function: linear;
  background: #273240;
  background: linear-gradient(to right, #273240 8%, #2c3644 18%, #273240 33%);
  background-size: 800px 104px;
  border-radius: 2px;
`

const DistanceWrapper = styled.div`
  font-family: ${fonts.mono};
  font-size: .8rem;
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
  padding: 0 0 .3rem;
  display: inline-block;
  vertical-align: top;
`

class WeekDistance extends Component {
  state = { distance: null }

  componentDidMount() {
    fetch(LAMBDA_ENDPOINT)
      .then(res => res.json())
      .then(data => this.setState({ distance: data.distance }))
  }

  getEmoji(distance) {
    return distance >= 40 
      ? <EmojiWrapper>🔥</EmojiWrapper> 
      : <EmojiWrapper>⚡️</EmojiWrapper>
  }

  renderDistance() {
    const { distance } = this.state

    return distance === 0 
      ? <DistanceWrapper><EmojiWrapper>🙀</EmojiWrapper>No run this week</DistanceWrapper>
      : <DistanceWrapper>{this.getEmoji(distance)}Run <Kilometers>{this.state.distance}km</Kilometers> last week</DistanceWrapper>
  }

  render() {
    console.log(this.state.distance)
    return (
      this.state.distance !== null
        ? this.renderDistance()
        : <DistanceLoader />
    )
  }
}

export default WeekDistance
