import {
  Box,
  Button,
  Text,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import { useMutateMeMutation } from '../../generated/graphql'
import BugList from '../List/BugList'
import UserNavBar from './UserNavBar'

interface IBreadcrumb {
  breadcrumb: string
  href: string
}

export const NavBar = (): JSX.Element => {
  const navigation = useNavigate()

  return (
    <Box
      width="100%"
      shadow="md"
      height="10%"
      display="flex"
      justifyContent="flex-end"
      alignContent="center"
      alignItems="center"
      px={10}
      backgroundColor="white"
    >
      <Button
        backgroundColor="#24323F"
        color="white"
        mx={2}
        onClick={() => navigation('/createbug')}
      >
        Report a new Bug 🐛
      </Button>
    </Box>
  )
}

export const Header = (): JSX.Element => {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])
  const { user } = useAppState()
  if (!user) return <>no user</>
  const router = useLocation()
  useEffect(() => {
    const querySplited = router.pathname.split('?')
    const linkPath = querySplited[0].split('/')
    linkPath.shift()
    const pathArray = linkPath.map((path, i) => ({
      breadcrumb: path.replace(/-/g, ' '),
      href: `/${linkPath.slice(0, i + 1).join('/')}${
        querySplited[1] ? `?${querySplited[querySplited.length - 1]}` : ''
      }`,
    }))

    setBreadcrumbs(pathArray)
  }, [router])

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center"
      alignItems="center"
      p={10}
      height="10%"
    >
      <Box>
        <Breadcrumb pt="3">
          <BreadcrumbItem>
            <BreadcrumbLink href="">
              <Text>Dc bug report</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {breadcrumbs.map((link, index) => (
            <BreadcrumbItem>
              <BreadcrumbLink href="">
                {index === breadcrumbs.length - 1
                  ? `${link.breadcrumb}`
                  : capitalizeFirstLetter(link.breadcrumb)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignContent="center"
        alignItems="center"
      >
        <Image mx={2} rounded={100} src={user.avatar} width={50} height={50} />
        <Text fontSize={12}>( {user.email} )</Text>
      </Box>
    </Box>
  )
}

export default function Layout(): JSX.Element {
  const { dispatchLogin, dispatchLogout } = useAppState()

  const [me] = useMutateMeMutation({
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

  return (
    <Box
      fontFamily="Poppins"
      height="100vh"
      position="fixed"
      width="100vw"
      display="flex"
    >
      <UserNavBar />
      <Box width="100%" height="100%">
        <Header />
        <NavBar />
        <Box display="flex" height="100%">
          <BugList />
          <Box width="100%" height="100%" p={10}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
