import { Box, Text } from '@chakra-ui/react'
import CreateBugForm from './CreateBugForm'

export default function CreateBug(): JSX.Element {
  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor="white"
      padding={2}
      rounded={4}
      color="white"
    >
      <CreateBugForm />
    </Box>
  )
}
