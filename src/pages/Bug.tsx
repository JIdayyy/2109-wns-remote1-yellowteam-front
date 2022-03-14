import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useGetBugDatasQuery } from 'src/generated/graphql'

const backgroundColor = (children: string): string => {
  if (children === 'CRITICAL') {
    return '#161A42'
  }
  if (children === 'HIGH') {
    return '#FF0000'
  }
  if (children === 'MEDIUM') {
    return '#9A8C43'
  }
  if (children === 'LOW') {
    return '#9988FF'
  }
  if (children === 'OPEN') {
    return '#9A8C43'
  }
  if (children === 'IN_PROGRESS') {
    return '#9988FF'
  }
  if (children === 'CLOSED') {
    return '#FF0000'
  }
  return 'gray'
}

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
      <Box padding="20" width="100%" height="2000px%" boxShadow="lg" bg="white">
        <SkeletonCircle mt="2" noOfLines={1} />
        <SkeletonText mt="2" noOfLines={10} spacing="3" />
      </Box>
    )

  return (
    <Box
      zIndex={1}
      w="100%"
      rounded="md"
      backgroundColor="white"
      p={20}
      shadow="md"
      color="#747474"
      fontFamily="Poppins"
    >
      <Flex direction="row" justifyContent="space-between">
        <Flex direction="column">
          <Text fontSize={30} fontWeight="bold">
            {data?.bug.title}
          </Text>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text fontSize={20} fontWeight="bold">
              {data?.bug.Website.name}
            </Text>
            <Image
              ml={5}
              src={data?.bug.Website.logo}
              width="30px"
              height="30px"
            />
          </Flex>
        </Flex>
        <Flex>
          <Text fontSize={30} fontWeight="bold">
            🐛 Bug#{data?.bug.number}
          </Text>
          <Button
            rounded="md"
            color="white"
            backgroundColor={backgroundColor(data?.bug.status as string)}
            px={2}
            py={1}
          >
            {data?.bug.status}
          </Button>
        </Flex>
      </Flex>

      <Text>Firstname: {data?.bug.user.first_name}</Text>
      <Text>Lastname: {data?.bug.user.last_name}</Text>
      <Text>Email: {data?.bug.user.email}</Text>

      <Flex
        my={10}
        width="20%"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <Flex justifyContent="center" direction="column" alignItems="center">
          <Text>Priority</Text>
          <Button
            rounded="md"
            color="white"
            backgroundColor={backgroundColor(data?.bug.priority as string)}
            px={2}
            py={1}
          >
            {data?.bug.priority}
          </Button>
        </Flex>
        <Flex justifyContent="center" direction="column" alignItems="center">
          <Text>Severity</Text>
          <Button
            rounded="md"
            color="white"
            backgroundColor={backgroundColor(data?.bug.severity as string)}
            px={2}
            py={1}
          >
            {data?.bug.severity}
          </Button>
        </Flex>
      </Flex>

      <Flex width="100%" justifyContent="space-between">
        <Flex direction="column" my={10}>
          <Text>Description</Text>
          <Text>{data?.bug.description}</Text>
        </Flex>
        <Box
          minH="400px"
          overflowY="scroll"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
          width="30%"
          p={4}
          backgroundColor="#EDEDED"
          shadow="md"
        >
          <Text my={4} fontSize={20} fontWeight="bold">
            Files
          </Text>
          {data?.bug.File.length
            ? data?.bug.File.map((file) => (
                <Button
                  my={1}
                  fontWeight="normal"
                  fontSize={17}
                  px={4}
                  py={1}
                  rounded="md"
                  width="100%"
                  textAlign="left"
                  backgroundColor="#B9B9B9"
                  color="white"
                >
                  <Link
                    isTruncated
                    noOfLines={1}
                    target="_blank"
                    href={file.path}
                  >
                    {file.name}
                  </Link>
                </Button>
              ))
            : 'No files'}
        </Box>
      </Flex>
    </Box>
  )
}
