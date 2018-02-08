import { LAMBDA_ENDPOINT, IS_PROD } from './constants'
import { getRandomNumber } from './functions'

export default () =>
  IS_PROD 
    ? fetch(LAMBDA_ENDPOINT)
      .then(res => res.json())
      .then(data => this.setState({ distance: data.distance }))
    : new Promise(resolve => resolve({ distance: getRandomNumber(0, 50) }))
