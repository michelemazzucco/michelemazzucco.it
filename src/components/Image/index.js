import React from 'react'
import { string, arrayOf, shape } from 'prop-types'

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
  src: string.isRequired,
  alt: string,
  sources: arrayOf(shape({
    media: string,
    srcset: arrayOf(string).isRequired
  }))
}

Image.defaultProps = {
  alt: '',
  sources: {
    media: null
  }
}

export default Image
