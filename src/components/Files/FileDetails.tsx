import {
  Flex,
  Button,
  Text,
  Stack,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Image,
  Center,
} from '@chakra-ui/react'
import { GetAllFilesByBugQuery } from 'src/generated/graphql'

interface IProps {
  file: GetAllFilesByBugQuery['bug']['File'][number]
  isDetails: string
}

export default function FileDetails({ file, isDetails }: IProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {isDetails === file.id && (
        <Flex
          px={2}
          py={4}
          justifyContent="space-between"
          fontSize="xs"
          alignItems="center"
          w="100%"
        >
          <Stack spacing={2}>
            <Flex>
              <Text color="#24323F">Uploaded by: </Text>
              <Text mx={2}>
                {file.user.first_name} {file.user.last_name}
              </Text>
            </Flex>
            <Flex>
              <Text color="#24323F">Date :</Text>
              <Text mx={2}>{file.created_at}</Text>
            </Flex>
          </Stack>
          <Stack spacing={1}>
            <Button
              size="sm"
              color="white"
              rounded={4}
              px={14}
              backgroundColor="#24323F"
              onClick={onOpen}
            >
              <Text>PREVIEW</Text>
            </Button>
            <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Image preview</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                    <Image
                      boxSize="max"
                      src={file.path}
                      fallbackSrc="https://via.placeholder.com/150"
                    />
                  </Center>
                </ModalBody>

                <ModalFooter>
                  <Center>
                    <Button colorScheme="blue" onClick={onClose}>
                      Close
                    </Button>
                  </Center>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Stack>
        </Flex>
      )}
    </>
  )
}
