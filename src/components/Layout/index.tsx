/* eslint-disable no-console */
import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import {
  SortOrder,
  useGetAllBugsByQuery,
  useGetAllNotificationsQuery,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import useSearchState from 'src/hooks/useSearchState'
import UserNavBar from './UserNavBar'
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
    <Flex
      width="100vw"
      height="100vh"
      fontFamily="Poppins"
      direction="row"
      zIndex={20}
    >
      <UserNavBar />
      <MuteButtonPortal />
      <Flex direction="column" flexGrow={1} pl="60px" zIndex={20} width="full">
        <NavBar />
        <Flex flexGrow={1} h="calc(100vh - 100px)" zIndex={1}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  )
}
