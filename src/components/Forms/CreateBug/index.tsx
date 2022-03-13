import { Box } from '@chakra-ui/react'
import CreateBugForm from './CreateBugForm'

export default function CreateBug(): JSX.Element {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      rounded={4}
      color="white"
    >
      <CreateBugForm />
    </Box>
  )
}
