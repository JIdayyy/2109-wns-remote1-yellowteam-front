import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CategoryMark from 'src/components/Assets/Category.mark'
import { GetAllFeaturesQuery } from 'src/generated/graphql'

type Props = {
  feature: GetAllFeaturesQuery['features'][number]
}

export default function FeatureCard({ feature }: Props): JSX.Element {
  return (
    <Flex
      w="100%"
      cursor="pointer"
      color="gray"
      p={5}
      rounded={4}
      shadow="md"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-between"
        overflow="hidden"
        w="50%"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text fontWeight="bold">{feature.name}</Text>{' '}
          <CategoryMark category={feature.category} />
        </Flex>
        <Text>{feature.website.name}</Text>
        <Text my={5} noOfLines={2}>
          {feature.description}
        </Text>
      </Flex>
    </Flex>
  )
}
