import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const HomeLayout = (): JSX.Element => {
  return (
    <Box
      width="100%"
      position="relative"
      height="80%"
      backgroundColor="#E3E6EA"
    >
      <Outlet />
    </Box>
  )
}
export default HomeLayout
