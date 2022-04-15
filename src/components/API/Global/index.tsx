import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const CardList: ICard[] = [
  {
    id: '1',
    title: 'Add a new website',
    button: 'ADD WEBSITE',
  },
  {
    id: '2',
    title: 'Redeem your API token',
    button: 'GET SECRET TOKEN',
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
