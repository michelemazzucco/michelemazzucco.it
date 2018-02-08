import React from 'react'
import Intro from '../components/Intro'
import Head from '../components/Head'
import { META } from '../utils/constants'

export default () =>
  <section>
    <Head 
      title={META.index.title}
      description={META.index.description}
      image={META.common.image}
    />
    <Intro fixed={true} />
  </section>
