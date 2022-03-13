import { Box } from '@chakra-ui/react'
import WebSiteList from 'src/components/List/WebSiteList'

export default function CreateBugPage(): JSX.Element {
  return (
    <Box fontWeight="bold" color="#848484" width="50%">
      <WebSiteList isNew />
    </Box>
  )
}
