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
import { useState } from 'react'
import DeleteWebsitesTable from '../Tables/DeleteWebsite.table'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

export default function DeleteWebsiteModal({
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
          <Text color="white">Delete websites</Text>

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
          <DeleteWebsitesTable />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
