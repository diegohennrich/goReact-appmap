import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body,
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family:sans-serif;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .map {
        position: relative;
        z-index: 10;
    }
`

export default GlobalStyle
