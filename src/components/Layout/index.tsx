/* eslint-disable no-console */
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import UserNavBar from './UserNavBar'
import Header from './Header'
import NavBar from './NavBar'
import MuteButtonPortal from '../Assets/MuteButton'

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
