import React from 'react'

const EmailMe = ({ className, text }) => 
  <a className={className} href='mailto:hello@michelemazzucco.it'>{text}</a>

export default EmailMe
