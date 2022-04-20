import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'

interface IProps {
  card: ICard
}

export default function Card({ card }: IProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <Button
        w="52"
        onClick={onOpen}
        variant="action"
        bg={card.button === 'DELETE' ? 'red' : 'darkBlueCustom'}
        color="white"
      >
        {card.button}
      </Button>
      <card.modal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}
