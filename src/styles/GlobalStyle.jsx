import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.container{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

`

export default GlobalStyle