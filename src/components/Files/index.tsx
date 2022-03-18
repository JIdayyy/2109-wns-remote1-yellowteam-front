import { Box, Flex, Text } from '@chakra-ui/react'

import FileHeaderIcon from 'src/static/svg/FilesHeaderIcon'
import FilesList from './FilesList'

export default function FilesTable(): JSX.Element {
  return (
    <Box
      border="0.5px solid #e6e6e6"
      rounded={4}
      width="100%"
      backgroundColor="white"
      shadow="md"
    >
      <Flex p={2} width="100%" justifyContent="flex-start" alignItems="center">
        <FileHeaderIcon />
        <Text mx={2} fontWeight="normal">
          Files
        </Text>
      </Flex>
      <Flex p={2} backgroundColor="#F6F6F6" width="100%" alignItems="center">
        <Box width="100%" />
        <Text fontWeight="normal" width="20%">
          Size
        </Text>
        <Text fontWeight="normal" width="20%">
          Type
        </Text>
        <Text fontWeight="normal" width="20%">
          Date
        </Text>
      </Flex>
      <FilesList />
    </Box>
  )
}
