import { Flex, Text } from '@chakra-ui/react'
import CategoriesList from 'src/components/List/CategoriesList'
import FeaturesList from 'src/components/List/FeaturesList'

export default function Features(): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      w="80%"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Text
        fontFamily="Poppins"
        w="100%"
        textAlign="left"
        fontSize={20}
        color="gray"
        fontWeight="bold"
      >
        Categories
      </Text>
      <CategoriesList />

      <Text
        w="100%"
        textAlign="left"
        fontFamily="Poppins"
        fontSize={20}
        color="gray"
        fontWeight="bold"
      >
        All
      </Text>
      <FeaturesList />
    </Flex>
  )
}
