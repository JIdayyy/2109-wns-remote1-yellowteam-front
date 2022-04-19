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
import WebsitesTable from '../../Tables/Websites.table'
import TokenField from './TokenField'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReedemApiToken({
  isOpen,
  onClose,
}: IProps): JSX.Element {
  const [checkedItem, setCheckedItem] = useState<string | undefined>()
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
          <Text color="white">Reedem your widget token</Text>

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
          <WebsitesTable
            checkedItem={checkedItem}
            setCheckedItem={setCheckedItem}
          />
          <TokenField websiteId={checkedItem} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
