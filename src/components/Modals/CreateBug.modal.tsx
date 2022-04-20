import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import CreateBugForm from '../Forms/CreateBug/CreateBugForm'
import UploadFile from '../Forms/UploadFile'
import CategoriesList from '../List/CategoriesList'
import WebsitesTable from '../Tables/Websites.table'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateBugModal({
  isOpen,
  onClose,
}: IProps): JSX.Element {
  const [isUpload, setIsUpload] = useState<boolean>(false)
  const [checkedItem, setCheckedItem] = useState<string | undefined>()

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
          <Text color="white">Create a new ticket</Text>

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
          {!isUpload ? (
            <>
              <Box mb={10}>
                <Text my={5} color="#747474" fontWeight="bold" fontSize={15}>
                  Repport a new Bug 🐛
                </Text>
                <Text color="#747474" fontWeight="normal" fontSize={15}>
                  First we would like to thank you for using our tool. We’re now
                  going to need some information.
                </Text>
              </Box>
              <WebsitesTable
                setCheckedItem={setCheckedItem}
                checkedItem={checkedItem}
              />
              <Text my={5} color="#747474" fontWeight="bold" fontSize={15}>
                Now select a category
              </Text>
              <CategoriesList />
              <CreateBugForm
                websiteId={checkedItem}
                setIsUpload={setIsUpload}
              />
            </>
          ) : (
            <UploadFile setIsUpload={setIsUpload} onClose={onClose} />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
