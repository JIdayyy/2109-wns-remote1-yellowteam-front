import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const HomeLayout = (): JSX.Element => {
  return (
    <Box
      width="100%"
      position="relative"
      height="80%"
      display="flex"
      zIndex={10}
      overflow="scroll"
      p={[2, 4, 8, 10]}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '24px',
        },
      }}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Outlet />
    </Box>
  )
}
export default HomeLayout
