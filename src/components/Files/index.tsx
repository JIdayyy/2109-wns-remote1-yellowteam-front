import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import FileHeaderIcon from 'src/static/svg/FilesHeaderIcon'
import FilesList from '../List/FilesList'
import UploadFileModal from '../Modals/UploadFile.modal'

export default function FilesTable(): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box
      border="1px solid #B8B8B8"
      rounded={4}
      width="100%"
      backgroundColor="white"
      shadow="md"
    >
      <UploadFileModal isOpen={isOpen} onClose={onClose} />
      <Flex
        borderBottom="1px solid #B8B8B8"
        p={2}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex>
          <FileHeaderIcon />
          <Text mx={2} textStyle="body">
            Files
          </Text>
        </Flex>
        <Button
          mx={1}
          size="sm"
          color="white"
          rounded={4}
          px={14}
          backgroundColor="#24323F"
          onClick={onOpen}
        >
          ADD FILE
        </Button>
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
