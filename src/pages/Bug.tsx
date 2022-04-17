import { Flex } from '@chakra-ui/react'
import BugList from 'src/components/List/BugList'
import ReportModule from 'src/components/Report'

export default function Bug(): JSX.Element {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="flex-start"
      direction="row"
      w="full"
      h="full"
      position="fixed"
    >
      <BugList />

      <ReportModule />
    </Flex>
  )
}
