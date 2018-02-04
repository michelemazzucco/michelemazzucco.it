import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Intro from '../components/Intro'
import Head from '../components/Head'
import { META } from '../utils/constants'

const IndexPage = () => {
  return (
    <div>
      <Head 
        title={META.index.title}
        description={META.index.description}
        image={META.common.image}
      />
      <Intro fixed={true} />
    </div>
  )
}

export default IndexPage
