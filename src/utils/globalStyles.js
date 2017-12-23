import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const globalStyles = () => 
  injectGlobal`
    ${reset}
    body {
      background: #1e2733;
      color: #FFF;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  `

export default globalStyles
