import React from 'react'
import styled from 'styled-components'

const ProfileBlock = ({ title, children }) =>
  <article>
    <header>
      <h3>{title}</h3>
    </header>
    <main>{children}</main>
  </article>

export default ProfileBlock
