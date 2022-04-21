import { Button, Text, useDisclosure } from '@chakra-ui/react'
import AddNewReport from 'src/static/svg/AddNewReport'
import CreateBugModal from '../Modals/CreateBug.modal'

export default function AddBugButton(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Button
      onClick={onOpen}
      display="flex"
      justifyContent="flex-start"
      variant="action"
      rounded="4"
      h={7}
      px={4}
    >
      <AddNewReport />
      <CreateBugModal isOpen={isOpen} onClose={onClose} />

      <Text fontSize="xs" ml={2}>
        Report a new bug
      </Text>
    </Button>
  )
}
