/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import CreateFeature from 'src/components/Forms/CreateFeature'
import Layout from 'src/components/Layout'
import FeaturesLayout from 'src/components/Layout/FeaturesLayout'
import WebSiteList from 'src/components/List/WebSiteList'
import AddFeaturePage from 'src/pages/AddFeaturePage'
import Bug from 'src/pages/Bug'
import Features from 'src/pages/Features'
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
    path: '/features',
    element: <FeaturesLayout />,
    children: [
      { element: <Features />, index: true },
      { element: <AddFeaturePage />, path: '/features/commit' },
      { element: <CreateFeature />, path: '/features/commit/:id' },
      { path: '*', element: <NoMatchPage /> },
    ],
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
