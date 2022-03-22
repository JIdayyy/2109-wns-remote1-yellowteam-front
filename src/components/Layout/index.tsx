/* eslint-disable no-console */
import {
  Box,
  Button,
  Text,
  Image,
  SkeletonCircle,
  SkeletonText,
  useToast,
  Flex,
} from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import {
  GetAllBugsByDocument,
  GetAllNotificationsDocument,
  useAllNotificationsSubscription,
} from 'src/generated/graphql'
import { customClient } from 'src/App'
import UserNavBar from './UserNavBar'
import Notifications from '../Notifications'

export const NavBar = (): JSX.Element => {
  const navigation = useNavigate()

  const toast = useToast()

  useAllNotificationsSubscription({
    onSubscriptionComplete: async () => {
      toast({
        title: 'You just received a notification',
        status: 'info',
      })
    },

    shouldResubscribe: true,
    onSubscriptionData: async (r) => {
      console.log(r)
      await customClient.refetchQueries({
        include: [GetAllBugsByDocument, GetAllNotificationsDocument],
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
      position="fixed"
      width="100vw"
      height="100vh"
      fontFamily="Poppins"
      display="flex"
      zIndex={20}
    >
      <UserNavBar />
      <Box pl="60px" zIndex={20} width="100%" height="100vh">
        <Header />
        <NavBar />
        <Box
          display="flex"
          width="100%"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              marginRight: '4px',
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
          zIndex={1}
          height="80%"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
