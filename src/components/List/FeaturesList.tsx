import { Flex, Spinner } from '@chakra-ui/react'
import { useGetAllFeaturesQuery } from 'src/generated/graphql'
import FeatureCard from './ListItems/FeatureItem.card'

export default function FeaturesList(): JSX.Element {
  const { data, loading } = useGetAllFeaturesQuery()
  if (loading) return <Spinner />
  return (
    <Flex
      w="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
    >
      {data?.features.map((feature) => (
        <FeatureCard feature={feature} />
      ))}
    </Flex>
  )
}
