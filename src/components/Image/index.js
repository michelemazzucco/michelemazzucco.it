import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, sources, className }) => {
  const renderSource = ({ media, srcset }, i) => (
    media 
      ? <source key={i} media={`(${media})`} srcSet={srcset.join(', ')} />
      : <source key={i} srcSet={srcset.join(', ')} />
  )
    

  return (
    <picture className={className}>
      {sources && sources.map(renderSource)}
      <img src={src} alt={alt} />
    </picture>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  sources: PropTypes.arrayOf(PropTypes.shape({
    media: PropTypes.string,
    srcset: PropTypes.arrayOf(PropTypes.string).isRequired
  }))
}

Image.defaultProps = {
  alt: '',
  sources: {
    media: null
  }
}

export default Image
