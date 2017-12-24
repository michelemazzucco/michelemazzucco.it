import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import { colors, fonts } from './constants'

const globalStyles = () => 
  injectGlobal`
    ${reset}
    body {
      background: ${colors.blue900};
      color: #FFF;
      font-family: ${fonts.sansSerif};
      font-size: 14px;
      text-rendering: optimizeLegibility;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 300;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `

export default globalStyles
