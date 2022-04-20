/* eslint-disable no-console */
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'

import theme from './definitions/chakra/theme'
import RequireAuth from './components/RequireAuth/RequireAuth'
import ProtectedRoutes from './config/protected.routes'

import '@fontsource/poppins' // Defaults to weight 400.
import customClient from './services/graphql'

console.log(theme)
function App(): JSX.Element {
  return (
    <ApolloProvider client={customClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <RequireAuth>
            <ProtectedRoutes />
          </RequireAuth>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
