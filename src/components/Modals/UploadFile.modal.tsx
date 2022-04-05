import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import UploadFile from '../Forms/UploadFile'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

export default function UploadFileModal({
  isOpen,
  onClose,
}: IProps): JSX.Element {
  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          borderTopRadius={5}
          display="flex"
          justifyContent="space-between"
          backgroundColor="darkBlueCustom"
        >
          <Text color="white">Upload files for this ticket</Text>

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
          <UploadFile onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
