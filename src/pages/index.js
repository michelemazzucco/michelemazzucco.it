import React from 'react'
import Intro from '../components/Intro'
import Head from '../components/Head'
import { META } from '../utils/constants'

export default () =>
  <section>
    <Head 
      {...META.index} 
      image={META.common.image} 
    />
    <Intro fixed={true} />
  </section>
