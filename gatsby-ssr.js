const { createElement } = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    createElement('link', {
      key: 'fonts',
      href: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400',
      rel: 'preconnect' 
    })
  ])
}
