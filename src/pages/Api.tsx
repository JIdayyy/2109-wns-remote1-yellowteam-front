import { Flex } from '@chakra-ui/react'
import Global from 'src/components/API/Global'

export default function Api(): JSX.Element {
  return (
    <Flex w="100%" h="100%" p={10}>
      <Global />
    </Flex>
  )
}
