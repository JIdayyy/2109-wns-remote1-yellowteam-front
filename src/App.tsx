import React from 'react'
import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import { ChakraProvider, Text } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import Layout from './components/Layout'
import Login from './pages/Login'
import mainTheme from './theme/mainTheme'
import apolloClient from './services/graphql'
import useAppState from './hooks/useAppState'
import Home from './pages/Home'
import '@fontsource/poppins' // Defaults to weight 400.
import WebSiteList from './components/List/WebSiteList'
import Bug from './pages/Bug'
import CreateBug from './components/Forms/CreateBug'
import HomeLayout from './components/HomeLayout'
import CreateBugPage from './pages/createBug'

const client = apolloClient()

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/websites',
        element: <WebSiteList isNew={false} />,
      },
      {
        path: '/websites/:id/bugs',
        element: <Text color="black">test 3</Text>,
      },
      {
        path: '/createbug',
        element: <HomeLayout />,
        children: [
          { index: true, element: <CreateBugPage /> },
          { path: '/createbug/websites/:id/', element: <CreateBug /> },
        ],
      },
      {
        path: '/websites/:id/createbug',
        element: <CreateBug />,
      },
      {
        path: '/bugs/:id',
        element: <Bug />,
      },
      { path: '*', element: <Text>No match</Text> },
    ],
  },
]

const Routes = () => useRoutes(routes)

function App(): JSX.Element {
  const { isAuth } = useAppState()

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={mainTheme}>
        <Router>{isAuth ? <Routes /> : <Login />}</Router>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
