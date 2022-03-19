import {
  Box,
  Button,
  Flex,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import CommentsModule from 'src/components/Comments'
import FilesList from 'src/components/Files'
import { useGetBugDatasQuery } from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

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
  const { user } = useAppState()
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
      p={10}
      shadow="md"
      color="#747474"
      fontFamily="Poppins"
    >
      <Flex
        mb={20}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="100%"
      >
        <Text fontWeight="normal">Reported by:</Text>
        <Box
          p={2}
          display="flex"
          w="auto"
          my={5}
          shadow="md"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Image width={50} h={50} src={user?.avatar} />
          <Flex direction="column">
            <Text>
              {data?.bug.user.first_name} {data?.bug.user.last_name}
            </Text>
            <Text>{data?.bug.user.email}</Text>
          </Flex>
        </Box>
      </Flex>
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
      </Flex>
      <FilesList />
      <CommentsModule />
    </Box>
  )
}
