import { Button, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import AddNewReport from 'src/static/svg/AddNewReport'

export default function AddBugButton(): JSX.Element {
  const navigation = useNavigate()

  return (
    <Button
      onClick={() => navigation('/createbug')}
      display="flex"
      justifyContent="flex-start"
      color="white"
      backgroundColor="#24323F"
      rounded="4"
      h={7}
      px={4}
    >
      <AddNewReport />
      <Text mx={4}>Report a new bug</Text>
    </Button>
  )
}
