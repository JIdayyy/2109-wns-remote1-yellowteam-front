/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import AddWebsiteForm from '../Forms/AddWebsite'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddWebsiteModal({
  isOpen,
  onClose,
}: IProps): JSX.Element {
  return (
    <Modal size="4xl" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          borderTopRadius={5}
          display="flex"
          justifyContent="space-between"
          backgroundColor="darkBlueCustom"
        >
          <Text color="white">Add a website</Text>

          <Button
            backgroundColor="redClose"
            borderRadius={2}
            color="white"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalHeader>
        <ModalBody>
          <AddWebsiteForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
