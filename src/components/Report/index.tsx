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
import customScrollbar from 'src/theme/customScrollbar'
import upperCaseFirstLetter from 'src/utils/upperCaseFirstLetter'
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
      <Box
        padding="20"
        marginLeft="250px"
        w="full"
        h="full"
        boxShadow="lg"
        bg="white"
      >
        <SkeletonCircle my="2" noOfLines={1} />
        <SkeletonText my="2" noOfLines={3} spacing="3" />
        <SkeletonText my="2" noOfLines={3} spacing="4" />
        <SkeletonText my="2" noOfLines={2} spacing="3" />
        <SkeletonText my="2" noOfLines={3} spacing="3" />
        <SkeletonText my="2" noOfLines={3} spacing="2" />
        <SkeletonText my="2" noOfLines={3} spacing="1" />
      </Box>
    )

  if (!data) return <Center>Error</Center>

  return (
    <Box
      zIndex={1}
      w="full"
      marginLeft="250px"
      rounded="md"
      backgroundColor="white"
      px={[20, 20, 20, 20]}
      py={[10, 10, 10, 20]}
      css={customScrollbar}
      overflowY="auto"
      h="full"
      shadow="md"
      color="#747474"
      fontFamily="Poppins"
    >
      <Flex
        mb={10}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        w="full"
      >
        <Stack>
          <Text my={1} textStyle="h1">
            {upperCaseFirstLetter(data?.bug.title)}
          </Text>
          <Flex alignItems="center" justifyContent="flex-start">
            <Text my={1} textStyle="h1" fontWeight="normal">
              Reported by {data.bug.user.first_name} {data.bug.user.last_name}{' '}
              on {data.bug.Website.name}
            </Text>
            <Image
              ml={2}
              src={data?.bug.Website.logo}
              width="30px"
              height="30px"
            />
          </Flex>
        </Stack>
        <Stack spacing={3}>
          <Text textStyle="h1" fontWeight="normal">
            Ticket #{data?.bug.number}
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
        direction={['column', 'column', 'column', 'row']}
        alignItems="center"
      >
        <BugInfoChip name="priority" priority={data.bug.priority} />
        <BugInfoChip name="severity" priority={data.bug.severity} />
      </Flex>

      <Flex width="full" justifyContent="space-between" direction="column">
        <Flex w="full" direction="row" alignItems="center" my={5}>
          <Text textStyle="h1" fontWeight="normal">
            Category :
          </Text>

          <Text mx={2}>
            {data?.bug.Category ? data?.bug.Category.name : 'no category'}
          </Text>
        </Flex>
        <Flex direction="column" my={5}>
          <Text textStyle="h1" fontWeight="normal">
            Description
          </Text>
          <Text>{data?.bug.description}</Text>
        </Flex>
      </Flex>
      <FilesTable />
      <CommentsModule />
    </Box>
  )
}
