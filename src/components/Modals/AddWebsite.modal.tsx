/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddWebsiteModal({
  isOpen,
  onClose,
}: IProps): JSX.Element {
  const { handleSubmit, register } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

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
          <FormLabel color="#747474" fontWeight="normal">
            Informations
          </FormLabel>
          <Input
            my={2}
            color="black"
            {...register('name')}
            placeholder="Website name"
          />
          <Input
            my={2}
            color="black"
            {...register('url')}
            placeholder="Website url"
          />
          <Button
            variant="solid"
            backgroundColor="green"
            color="white"
            onClick={handleSubmit(onSubmit)}
          >
            SUBMIT
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
