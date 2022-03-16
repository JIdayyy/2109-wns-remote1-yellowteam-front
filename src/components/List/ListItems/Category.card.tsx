import { Flex, Image, Text } from '@chakra-ui/react'
import { GetAllCategoriesQuery } from 'src/generated/graphql'

type Props = {
  category: GetAllCategoriesQuery['categories'][number]
}

export default function CategoryCard({ category }: Props): JSX.Element {
  const imgUrl = `/${category.icon}`
  return (
    <Flex
      cursor="pointer"
      color="white"
      px={4}
      py={4}
      m={1}
      minW="265px"
      rounded={4}
      shadow="md"
      backgroundColor={category.backgroundColor}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
      >
        <Image w={20} h={10} src={imgUrl} />
        <Text mx={5} w="100%" fontWeight="bold">
          {category.name}
        </Text>
      </Flex>
    </Flex>
  )
}
