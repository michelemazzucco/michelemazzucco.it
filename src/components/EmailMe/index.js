import React from 'react'
import PropTypes from 'prop-types'

const EmailMe = ({ className, text }) => 
  <a className={className} href='mailto:hello@michelemazzucco.it'>{text}</a>

export default EmailMe
