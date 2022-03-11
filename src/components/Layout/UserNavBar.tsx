import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import DcBug from 'src/static/svg/DbBug'
import { useLocation, useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import SignOutIcon from 'src/static/svg/SignOutIcon'
import TasksIcon from 'src/static/svg/TasksIcon'

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

  const handleLougout = () => dispatchLogout()

  return (
    <Flex
      py="40px"
      px="10px"
      width="66px"
      backgroundColor="#24323F"
      height="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="end"
      z-index="10"
    >
      <Flex
        height="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Tab path="">
          <TasksIcon
            color={location.pathname.includes('/') ? 'gray' : 'white'}
          />
        </Tab>

        <Box as="button" data-testid="sign-out-button" onClick={handleLougout}>
          <SignOutIcon color="white" />
        </Box>
      </Flex>

      <DcBug />
    </Flex>
  )
}

export default UserNavBar
