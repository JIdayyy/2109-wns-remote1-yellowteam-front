/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteObject, Navigate, useRoutes } from 'react-router-dom'
import Login from 'src/pages/Login'

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]

const authRoutes = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => useRoutes(routes)

export default authRoutes
