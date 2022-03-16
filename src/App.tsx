/* eslint-disable no-console */
import React, { useEffect } from 'react'
import {
  useRoutes,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { ChakraProvider, Spinner, Text } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { CookiesProvider } from 'react-cookie'
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
import Layout from './components/Layout'
import Login from './pages/Login'
import mainTheme from './theme/mainTheme'
import initializeCustomApolloClient from './services/graphql'
import useAppState from './hooks/useAppState'
import Home from './pages/Home'
import '@fontsource/poppins' // Defaults to weight 400.
import WebSiteList from './components/List/WebSiteList'
import Bug from './pages/Bug'
import CreateBug from './components/Forms/CreateBug'
import HomeLayout from './components/HomeLayout'
import CreateBugPage from './pages/createBug'
import UploadFile from './components/Forms/UploadFile'
import { useMutateMeMutation } from './generated/graphql'
import Features from './pages/Features'
import FeaturesLayout from './components/Layout/FeaturesLayout'
import AddFeaturePage from './pages/AddFeaturePage'
import CreateFeature from './components/Forms/CreateFeature'

const fpPromise = FingerprintJS.load({
  apiKey: '8OwjmU0dvpZ9QZxBxVlq',
  region: 'eu',
})

// Get the visitor identifier when you need it.
fpPromise.then((fp) => fp.get()).then((result) => console.log(result.visitorId))

export const customClient = initializeCustomApolloClient()

function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuth } = useAppState()
  const { dispatchLogin, dispatchLogout } = useAppState()

  const [me, { loading }] = useMutateMeMutation({
    onCompleted: (data) => {
      dispatchLogin(data.me)
    },
    onError: () => {
      dispatchLogout()
    },
  })

  useEffect(() => {
    me()
  }, [])

  if (!isAuth && loading) return <Spinner />
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    )
  }
  return children
}

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
          {
            path: '/createbug/websites/:websiteId/bug/:bugId/uploadfiles',
            element: <UploadFile />,
          },
        ],
      },
      {
        path: '/websites/:id/createbug',
        element: <CreateBug />,
      },
      {
        path: '/bugs/:id',
        element: <HomeLayout />,
        children: [{ index: true, element: <Bug /> }],
      },
      { path: '*', element: <Text>No match</Text> },
    ],
  },
  {
    path: '/features',
    element: <FeaturesLayout />,
    children: [
      { element: <Features />, index: true },
      { element: <AddFeaturePage />, path: '/features/commit' },
      { element: <CreateFeature />, path: '/features/commit/:id' },
      { path: '*', element: <Text>No match</Text> },
    ],
  },
]

const MyRoutes = () => useRoutes(routes)

function App(): JSX.Element {
  return (
    <CookiesProvider>
      <ApolloProvider client={customClient}>
        <ChakraProvider theme={mainTheme}>
          <Router>
            <RequireAuth>
              <MyRoutes />
            </RequireAuth>
          </Router>
        </ChakraProvider>
      </ApolloProvider>
    </CookiesProvider>
  )
}

export default App
