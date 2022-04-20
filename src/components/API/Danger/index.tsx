import { Flex, Text } from '@chakra-ui/react'
import DeleteWebsiteModal from 'src/components/Modals/DeleteWebsite.modal'
import Card from './Card'

const CardList: ICard[] = [
  {
    id: '1',
    title: 'Delete Websites',
    button: 'DELETE',
    modal: DeleteWebsiteModal,
  },
]

export default function Danger(): JSX.Element {
  return (
    <Flex direction="column" w="100%">
      <Text textStyle="cardBold">Danger Zone</Text>
      {CardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Flex>
  )
}
