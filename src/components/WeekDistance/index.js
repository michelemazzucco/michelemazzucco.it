import React, { Component, Fragment } from 'react'
import getWeekDistance from '../../utils/functions'
import { DistanceWrapper, DistanceLoader, EmojiWrapper, Kilometers } from './style'

class WeekDistance extends Component {
  state = { distance: null }

  componentDidMount() {
    getWeekDistance()
      .then(data => this.setState({ distance: data.distance }))
      .catch(e => this.setState({ distance: null }))
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
      ? <Fragment><EmojiWrapper role="img" aria-label="sad face">☹️</EmojiWrapper>No km of running this week</Fragment>
      : <Fragment>{this.getEmoji(distance)} I've run <Kilometers target="_blank" rel="noopener noreferrer" href="https://www.strava.com/athletes/8681316">{this.state.distance}km</Kilometers> this week</Fragment>
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
