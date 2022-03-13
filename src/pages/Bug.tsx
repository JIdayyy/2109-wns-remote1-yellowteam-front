import { Box, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useGetBugDatasQuery } from 'src/generated/graphql'

export default function Bug(): JSX.Element {
  const { id } = useParams()
  const { data, loading } = useGetBugDatasQuery({
    variables: {
      where: {
        id,
      },
    },
  })

  if (loading)
    return (
      <Box padding="20" height="800px" boxShadow="lg" bg="white">
        <SkeletonCircle mt="2" noOfLines={1} />
        <SkeletonText mt="2" noOfLines={10} spacing="3" />
      </Box>
    )

  return (
    <Box w="100%" backgroundColor="white" p={20} shadow="md" height="80%">
      <Text>{data?.bug.title}</Text>
      <Text>{data?.bug.user.first_name}</Text>
      <Text>{data?.bug.user.last_name}</Text>
      <Text>{data?.bug.description}</Text>
      <Text backgroundColor="green" px={2} py={1}>
        {data?.bug.priority}
      </Text>
      <Box backgroundColor="black" px={2} py={1}>
        {data?.bug.File.map((file) => (
          <Text color="white">{file.path}</Text>
        ))}
      </Box>
      <Text backgroundColor="green" px={2} py={1}>
        {data?.bug.severity}
      </Text>
      <Text backgroundColor="green" px={2} py={1}>
        {data?.bug.status}
      </Text>
    </Box>
  )
}
