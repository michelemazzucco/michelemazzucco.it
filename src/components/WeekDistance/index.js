import React, { Component, Fragment } from 'react'
import getWeekDistance from '../../utils/functions'
import { DistanceWrapper, DistanceLoader, EmojiWrapper, Kilometers } from './style'

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
      ? <Fragment><EmojiWrapper role="img" aria-label="poop">💩</EmojiWrapper>No km of running this week</Fragment>
      : <Fragment>{this.getEmoji(distance)} I've run <Kilometers>{this.state.distance}km</Kilometers> this week</Fragment>
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
