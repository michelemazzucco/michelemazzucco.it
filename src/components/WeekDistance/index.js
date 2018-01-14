import React, { Component } from 'react'
import styled from 'styled-components'
import { fonts, colors } from '../../utils/commonStyles'

const toKilometers = distance => Math.floor((distance / 1000) * 100) / 100

const DistanceLoader = styled.div`
  display: inline-block;
  height: 1rem;
  width: 8rem;
  background: #273240;
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
    fetch('https://d998ufi65f.execute-api.us-east-1.amazonaws.com/dev/distance')
      .then(res => res.json())
      .then(data => this.setState({ distance: data.distance }))
  }

  getEmoji(distance) {
    return distance >= 40000 ? <EmojiWrapper>🔥</EmojiWrapper> : <EmojiWrapper>⚡️</EmojiWrapper>
  }

  renderDistance() {
    const { distance } = this.state

    return distance === 0 
      ? <DistanceWrapper><EmojiWrapper>🙀</EmojiWrapper>No run this week</DistanceWrapper>
      : <DistanceWrapper>{this.getEmoji(distance)}Run <Kilometers>{toKilometers(this.state.distance)}km</Kilometers> last week</DistanceWrapper>
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
