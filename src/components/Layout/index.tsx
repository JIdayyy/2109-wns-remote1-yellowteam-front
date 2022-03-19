/* eslint-disable no-console */
import {
  Box,
  Button,
  Text,
  Image,
  MenuDivider,
  MenuList,
  Menu,
  MenuItem,
  MenuButton,
  SkeletonCircle,
  SkeletonText,
  useToast,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import { useAllNotificationsSubscription } from 'src/generated/graphql'
import useSearchState from 'src/hooks/useSearchState'
import { customClient } from 'src/App'
import { useGetAllWebSitesQuery } from '../../generated/graphql'
import BugList from '../List/BugList'
import UserNavBar from './UserNavBar'
import Notifications from '../Notifications'

export const NavBar = (): JSX.Element => {
  const { data } = useGetAllWebSitesQuery()

  const [selectedWebsite, setSelectedWebsite] = useState(`All`)
  const { dispatchSetBugOnSearch, dispatchResetSearchState } = useSearchState()
  const navigation = useNavigate()

  const toast = useToast()

  useAllNotificationsSubscription({
    onSubscriptionComplete: async () => {
      const Res = await customClient.refetchQueries({
        include: ['GetAllBugsBy', 'GetAllNotifications'],
      })
      console.log(Res)
      toast({
        title: 'You just received a notification',
        status: 'info',
      })
    },

    shouldResubscribe: true,
    onSubscriptionData: async (r) => {
      console.log(r)
      await customClient.refetchQueries({
        include: ['GetAllBugsBy', 'GetAllNotifications'],
      })
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
      <Box
        width="275px"
        minW="275px"
        backgroundColor="white"
        borderRight="2px solid #DDDDDD"
        position="absolute"
        left={0}
        height="100%"
        display="flex"
        justifyContent="space-between"
        px={7}
        alignItems="center"
      >
        <Text mx={4}>Filter:</Text>
        <Menu onClose={() => console.log('test')}>
          <MenuButton
            onChange={(e) => console.log(e)}
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
            _focus={{ boxShadow: 'outline' }}
          >
            {selectedWebsite}
          </MenuButton>

          <MenuList>
            <MenuItem
              onClick={() => {
                setSelectedWebsite('All')
                dispatchResetSearchState()
              }}
            >
              All
            </MenuItem>
            {data?.websites.map((website) => (
              <MenuItem
                onClick={() => {
                  setSelectedWebsite(website.name)
                  dispatchSetBugOnSearch(website.id)
                }}
                key={website.id}
              >
                {website.name}
              </MenuItem>
            ))}

            <MenuDivider />
            <MenuItem onClick={() => navigation('/newwebsite')}>
              New Website
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Button
        backgroundColor="#24323F"
        color="white"
        mx={2}
        onClick={() => navigation('/createbug')}
      >
        Report a new Bug 🐛
      </Button>
      <Notifications />
    </Box>
  )
}

export const Header = (): JSX.Element => {
  const { user } = useAppState()

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
      justifyContent="flex-end"
      alignContent="center"
      alignItems="center"
      p={10}
      height="10%"
    >
      {/* <Box>
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
                  ? capitalizeFirstLetter(`${link.breadcrumb}`)
                  : capitalizeFirstLetter(link.breadcrumb)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box> */}
      <Flex justifyContent="flex-end" alignContent="center" alignItems="center">
        <Text fontSize={12}> {user.email} </Text>
        <Image
          fit="contain"
          mx={2}
          fallbackSrc="https://via.placeholder.com/150"
          rounded={100}
          src={user.avatar}
          width={50}
          height={50}
        />
      </Flex>
    </Box>
  )
}

export default function Layout(): JSX.Element {
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
        <Box display="flex" width="100%" zIndex={1} height="100%">
          <BugList />

          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
