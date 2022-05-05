import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import useAppState from 'src/hooks/useAppState'

const Header = (): JSX.Element => {
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
        height="15%"
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
    />
  )
}

export default Header
