import React from 'react'
import Navigation from '../components/Navigation'
import PageTransitionHandler from '../components/PageTransitionHandler'
import '../utils/globalStyles'

export default props => {
  console.log(props)
  return (
    <main>
      {props.children()}
      <Navigation location={props.location}/>
    </main>      
  )  
}
