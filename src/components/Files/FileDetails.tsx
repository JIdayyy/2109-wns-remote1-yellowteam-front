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
        <Flex p={5} justifyContent="space-between" alignItems="center" w="100%">
          <Stack spacing={2}>
            <Flex>
              <Text color="#24323F">Uploaded by :</Text>
              <Text>{file.name}</Text>
            </Flex>
            <Flex>
              <Text color="#24323F">Date :</Text>
              <Text>{file.created_at}</Text>
            </Flex>
          </Stack>
          <Stack spacing={2}>
            <Button
              mx={1}
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
