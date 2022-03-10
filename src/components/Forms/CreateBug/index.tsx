import { Box, Text } from '@chakra-ui/react'
import useCreateBug from 'src/hooks/useCreateBugState'
import WebSiteList from '../../List/WebSiteList'
import CreateBugForm from './CreateBugForm'

export default function CreateBug(): JSX.Element {
  const { website } = useCreateBug()
  return (
    <Box
      width="100%"
      height="100%"
      backgroundColor="white"
      padding={10}
      rounded={4}
      color="white"
    >
      {!website && (
        <>
          <Text color="black">Repport a new Bug</Text>
          <Text color="black">1. WEBSITE</Text>
          <Text color="black">On wich website did you enounter this bug ?</Text>
          <WebSiteList />
        </>
      )}
      {website && <CreateBugForm />}
    </Box>
  )
}
