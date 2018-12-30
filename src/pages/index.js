import React from 'react'
import Layout from '../components/layout'
import Intro from '../components/Intro'
import Head from '../components/Head'
import { META } from '../utils/constants'

export default ({ location }) =>
  <Layout location={location}>
    <section>
      <Head 
        {...META.index} 
        image={META.common.image} 
      />
      <Intro fixed={true} />
    </section>
  </Layout>
