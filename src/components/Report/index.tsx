import {
  Box,
  Center,
  Flex,
  Image,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useGetBugDatasQuery } from 'src/generated/graphql'
import UserCard from '../Assets/UserCard'
import CommentsModule from '../Comments'
import FilesTable from '../Files'
import BugInfoChip from './BugPriority'

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

export default function ReportModule(): JSX.Element {
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
      <Box ml="400px" padding="20" w="100%" h="100%" boxShadow="lg" bg="white">
        <SkeletonCircle my="2" noOfLines={1} />
        <SkeletonText my="2" noOfLines={3} spacing="0" />
        <SkeletonText my="2" noOfLines={3} spacing="0" />
        <SkeletonText my="2" noOfLines={2} spacing="3" />
        <SkeletonText my="2" noOfLines={3} spacing="0" />
        <SkeletonText my="2" noOfLines={3} spacing="0" />
        <SkeletonText my="2" noOfLines={3} spacing="0" />
      </Box>
    )

  if (!data) return <Center>Error</Center>

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
      paddingLeft="500px"
    >
      <Flex
        mb={10}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        w="100%"
      >
        <Text textStyle="h1" fontWeight="normal">
          Reported by:
        </Text>
        <UserCard user={data.bug.user} />
      </Flex>
      <Flex direction="row" justifyContent="space-between">
        <Stack spacing={2}>
          <Text textStyle="h1">{data?.bug.title}</Text>
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Flex>
              <Text textStyle="h1">Website: </Text>
              <Text fontWeight="normal" textStyle="h1">
                {data?.bug.Website.name}
              </Text>
            </Flex>
            <Image
              ml={2}
              src={data?.bug.Website.logo}
              width="30px"
              height="30px"
            />
          </Flex>
        </Stack>
        <Stack spacing={2}>
          <Text textStyle="h1" fontWeight="bold">
            Bug# {data?.bug.number}
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            rounded={4}
            color="white"
            backgroundColor={backgroundColor(data?.bug.status as string)}
            px={2}
            py={1}
          >
            {data?.bug.status}
          </Box>
        </Stack>
      </Flex>

      <Flex
        my={10}
        width="30%"
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <BugInfoChip name="priority" priority={data.bug.priority} />
        <BugInfoChip name="severity" priority={data.bug.severity} />
      </Flex>

      <Flex width="100%" justifyContent="space-between">
        <Flex direction="column" my={10}>
          <Text>Description</Text>
          <Text>{data?.bug.description}</Text>
        </Flex>
      </Flex>
      <FilesTable />
      <CommentsModule />
    </Box>
  )
}
