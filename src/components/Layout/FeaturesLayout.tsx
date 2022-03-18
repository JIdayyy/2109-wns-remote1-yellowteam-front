/* eslint-disable no-console */
import {
  Box,
  Text,
  Button,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SkeletonCircle,
  SkeletonText,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import { useAllNotificationsSubscription } from 'src/generated/graphql'
import { customClient } from 'src/App'
import UserNavBar from './UserNavBar'

interface IBreadcrumb {
  breadcrumb: string
  href: string
}

const NavBar = (): JSX.Element => {
  const toast = useToast()
  const navigation = useNavigate()

  useAllNotificationsSubscription({
    onSubscriptionComplete: () => {
      const Res = customClient.refetchQueries({ include: ['GetAllBugsBy'] })
      console.log(Res)
      toast({
        title: 'You just received a notification',
        status: 'info',
      })
    },

    shouldResubscribe: true,
    onSubscriptionData: async (r) => {
      await customClient.refetchQueries({ include: ['GetAllBugsBy'] })
      toast({
        title: `${r.subscriptionData.data?.normalSubscription.message}`,
        status: 'info',
      })
    },
  })

  return (
    <Box
      width="100%"
      shadow="md"
      height="10%"
      zIndex={100}
      display="flex"
      justifyContent="flex-end"
      alignContent="center"
      position="relative"
      alignItems="center"
      px={10}
      backgroundColor="white"
    >
      <Button
        backgroundColor="#24323F"
        color="white"
        mx={2}
        onClick={() => navigation('/features/commit')}
      >
        Propose a new feature
      </Button>
    </Box>
  )
}

const Header = (): JSX.Element => {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])
  const { user } = useAppState()
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

  if (!user)
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
        <SkeletonCircle mt="2" noOfLines={1} />
        <SkeletonText mt="2" noOfLines={3} spacing="4" />
        <SkeletonText mt="2" noOfLines={3} spacing="4" />
      </Box>
    )

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
            <BreadcrumbLink href="/">
              <Text fontSize={10}>Dc bug report</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {breadcrumbs.map((link, index) => (
            <BreadcrumbItem key={link.href}>
              <BreadcrumbLink fontSize={10} href={link.href}>
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

export default function FeaturesLayout(): JSX.Element {
  return (
    <Box
      fontFamily="Poppins"
      height="100vh"
      position="fixed"
      width="100vw"
      display="flex"
      zIndex={20}
    >
      <UserNavBar />
      <Box position="fixed" pl="60px" zIndex={20} width="100%" height="100%">
        <Header />
        <NavBar />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          width="100%"
          zIndex={1}
          height="80%"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
