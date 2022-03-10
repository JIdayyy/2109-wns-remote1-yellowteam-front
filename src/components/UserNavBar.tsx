import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import DcBug from 'src/static/svg/DbBug'
import { useLocation, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import TasksIcon from '../static/svg/TasksIcon'
import mainTheme from '../theme/mainTheme'

import SignOutIcon from '../static/svg/SignOutIcon'

const Tab = ({ children, path }: { children: JSX.Element; path: string }) => {
  const navigate = useNavigate()

  const setTab = (tab: string) => navigate(`/${tab}`)

  return (
    <Box as="button" data-testid="tasks-button" onClick={() => setTab(path)}>
      {children}
    </Box>
  )
}

const UserNavBar = (): JSX.Element => {
  const { dispatchLogout } = useAppState()

  const location = useLocation()

  return (
    <Flex
      py="40px"
      width="66px"
      backgroundColor="#24323F"
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
      z-index="10"
    >
      {/* <Flex
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Tab path="">
          <TasksIcon
            color={location.pathname.includes('board') ? 'white' : 'gray'}
          />
        </Tab>

        <Box as="button" data-testid="sign-out-button" onClick={dispatchLogout}>
          <SignOutIcon color={mainTheme.colors.deactivatedGrey} />
        </Box>
      </Flex> */}

      <DcBug />
    </Flex>
  )
}

export default UserNavBar
