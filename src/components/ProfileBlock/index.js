import React from 'react'

const ProfileBlock = ({ title, children }) =>
  <section>
    <h3>{title}</h3>
    <div>{children}</div>
  </section>

export default ProfileBlock
