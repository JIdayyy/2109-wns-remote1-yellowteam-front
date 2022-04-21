import { Flex, VStack } from '@chakra-ui/react'
import Danger from 'src/components/API/Danger'
import Global from 'src/components/API/Global'

export default function Api(): JSX.Element {
  return (
    <Flex w="full" direction="column" h="100%" p={10}>
      <VStack spacing={20}>
        <Global />
        <Danger />
      </VStack>
    </Flex>
  )
}
