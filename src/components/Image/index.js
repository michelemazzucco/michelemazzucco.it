import React, { Component } from 'react'
import { string, arrayOf, shape, func } from 'prop-types'

class Image extends Component {
  state = { isLoaded: false }

  renderSource(source, i) {
    const { media, srcset } = source
    return media 
      ? <source key={i} media={`(${media})`} srcSet={srcset.join(', ')} />
      : <source key={i} srcSet={srcset.join(', ')} />    
  }

  setLoaded() {
    this.setState({ isLoaded: true })
  }

  render() {
    const { src, alt, sources, className, loader } = this.props
    const { isLoaded } = this.state
    return (
        <picture className={className}>
          {loader && loader({ isLoaded })}
          {sources && sources.map(this.renderSource)}
          <img onLoad={() => this.setLoaded()} src={src} alt={alt} />
        </picture>
    )
  }
}

Image.propTypes = {
  src: string.isRequired,
  alt: string,
  sources: arrayOf(shape({
    media: string,
    srcset: arrayOf(string).isRequired
  })),
  className: string,
  loader: func.isRequired
}

Image.defaultProps = {
  alt: '',
  sources: { media: null },
  className: null
}

export default Image
