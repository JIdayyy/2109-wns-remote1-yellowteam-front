import { Button, Flex, Text } from '@chakra-ui/react'

interface IProps {
  card: ICard
}

export default function Card({ card }: IProps): JSX.Element {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      bg="white"
      shadow="md"
      p={4}
      my={2}
      rounded="md"
    >
      <Text textStyle="cardBold">{card.title}</Text>
      <Button variant="with-shadow">{card.button}</Button>
    </Flex>
  )
}
