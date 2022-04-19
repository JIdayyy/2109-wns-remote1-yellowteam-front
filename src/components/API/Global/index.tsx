import { Flex, Text } from '@chakra-ui/react'
import AddWebsiteModal from 'src/components/Modals/AddWebsite.modal'
import ReedemApiToken from 'src/components/Modals/RedremApiToken/ReedemApiToken.modal'
import Card from './Card'

const CardList: ICard[] = [
  {
    id: '1',
    title: 'Add a new website',
    button: 'ADD WEBSITE',
    modal: AddWebsiteModal,
  },
  {
    id: '2',
    title: 'Redeem your API token',
    button: 'GET SECRET TOKEN',
    modal: ReedemApiToken,
  },
]

export default function Global(): JSX.Element {
  return (
    <Flex direction="column" w="100%">
      <Text textStyle="cardBold">Global</Text>
      {CardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Flex>
  )
}
