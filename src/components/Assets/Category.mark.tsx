import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { GetAllCategoriesQuery } from 'src/generated/graphql'

type Props = {
  category: GetAllCategoriesQuery['categories'][number]
}

export default function CategoryMark({ category }: Props): JSX.Element {
  return (
    <Flex
      cursor="pointer"
      color="white"
      px={2}
      py={1}
      m={1}
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
        <Text mx={2} w="100%" fontSize={8} fontWeight="normal">
          {category.name}
        </Text>
      </Flex>
    </Flex>
  )
}
