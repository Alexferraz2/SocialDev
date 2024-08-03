
import { createGlobalStyle, ThemeProvider } from "styled-components"
import moment from 'moment'
import 'moment/locale/pt-br'

import Navbar from "../src/components/layout/NavBar"

import theme from '../src/theme'
import { useEffect } from "react"

const GlobalStyle = createGlobalStyle `
* {
  padding: 0;
  margin: 0;
  
}

body {
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.background};
}

a{
  color: ${props => props.theme.primary};
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s
  
}

a:hover{
  color: ${props => props.primaryHover}
}

`

function App ({ Component, pageProps }) {

  useEffect(() => {
    moment.locale('pt-br')
  }, [])

  return (

    <ThemeProvider theme={theme}>
      
      <GlobalStyle/>
      <Component {...pageProps} />
    
    </ThemeProvider>
    
  )
}

export default App