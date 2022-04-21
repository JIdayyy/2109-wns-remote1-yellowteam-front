import { Box, Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react'
import FileHeaderIcon from 'src/static/svg/FilesHeaderIcon'
import FilesList from '../List/FilesList'
import UploadFileModal from '../Modals/UploadFile.modal'
import CustomBox from '../UI/CustomBox'
import Fold from '../../static/img/fold.png'

export default function FilesTable(): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <CustomBox border="1px solid #B8B8B8" rounded={4} width="full" shadow="md">
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
          <Text mx={2}>Files</Text>
        </Flex>
        <Button
          mx={1}
          size="sm"
          variant="action"
          rounded={4}
          px={14}
          onClick={onOpen}
        >
          ADD FILE
        </Button>
      </Flex>
      <Flex p={2} width="full" alignItems="center">
        <Box width="100%" />
        <Text fontWeight="normal" maxW="20%" width="20%">
          Size
        </Text>
        <Text fontWeight="normal" width="20%">
          Type
        </Text>
        <Text fontWeight="normal" width="20%">
          Date
        </Text>
        <Button pointerEvents="none" opacity={0} backgroundColor="white">
          <Image src={Fold} w={5} h={5} />
        </Button>
      </Flex>
      <FilesList />
    </CustomBox>
  )
}
