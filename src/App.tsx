import React from 'react'
import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import Layout from './components/Layout'
import Login from './pages/Login'
import mainTheme from './theme/mainTheme'
import apolloClient from './services/graphql'
import useAppState from './hooks/useAppState'
import Home from './pages/Home'

const client = apolloClient()

const Routes = () => useRoutes([{ path: '/', element: <Home /> }])

function App(): JSX.Element {
  const { isAuth } = useAppState()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={mainTheme}>
        <Router>
          {isAuth ? (
            <Layout>
              <Routes />
            </Layout>
          ) : (
            <Login />
          )}
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
