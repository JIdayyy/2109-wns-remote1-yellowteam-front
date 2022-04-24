/* eslint-disable no-console */
import { Box } from '@chakra-ui/react'
import {
  SortOrder,
  useGetAllBugsByQuery,
  useGetAllNotificationsQuery,
} from 'src/generated/graphql'
import { Outlet } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import useSearchState from 'src/hooks/useSearchState'
import UserNavBar from './UserNavBar'
import Header from './Header'
import NavBar from './NavBar'
import MuteButtonPortal from '../Assets/MuteButton'
import LoadingScreen from '../Assets/Loading.screen'

export default function Layout(): JSX.Element {
  const { website } = useSearchState()
  const { user } = useAppState()

  const { loading: loadingBugs } = useGetAllBugsByQuery({
    // notifyOnNetworkStatusChange: true,

    variables: {
      orderBy: {
        number: 'desc' as SortOrder,
      },
      skip: 0,
      take: 20,
      where: {
        Website: {
          is: {
            id: {
              equals: website || undefined,
            },
          },
        },
      },
    },
  })

  const { loading: loadingNotifications } = useGetAllNotificationsQuery({
    variables: {
      where: {
        userId: {
          equals: user?.id,
        },
      },
      orderBy: {
        created_at: 'desc' as SortOrder,
      },
    },
  })

  if (loadingBugs || loadingNotifications) return <LoadingScreen />

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
      <MuteButtonPortal />
      <Box pl="60px" zIndex={20} width="full" height="full">
        <Header />
        <NavBar />
        <Box
          display="flex"
          width="full"
          height="full"
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
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
