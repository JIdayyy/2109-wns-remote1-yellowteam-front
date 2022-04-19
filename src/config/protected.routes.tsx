/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import Layout from 'src/components/Layout'
import WebSiteList from 'src/components/List/WebSiteList'
import Api from 'src/pages/Api'
import Bug from 'src/pages/Bug'
import NoMatchPage from 'src/pages/NoMatch'
import Home from '../pages/Home'

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
        path: '/bugs/:id',
        element: <Bug />,
      },
      { path: '*', element: <NoMatchPage /> },
    ],
  },
  {
    path: '/api',
    element: <Api />,
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
]

const ProtectedRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => useRoutes(routes)

export default ProtectedRoutes
