/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Box, Flex, Text } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetAllBugsByQuery, GetBugDatasDocument } from 'src/generated/graphql'
import customClient from 'src/services/graphql'

type Props = {
  bug: GetAllBugsByQuery['bugs'][number]
}

export default function BugListItem({ bug }: Props): JSX.Element {
  const navigation = useNavigate()
  const { id } = useParams()

  const bgColor = () => {
    if (bug.id === id) {
      return '#ECECEC'
    }
    return '#FFFFFF'
  }

  const chipColor = () => {
    if (bug.status === 'OPEN') {
      return '#F69826'
    }
    if (bug.status === 'CLOSED') {
      return '#FF3A3A'
    }
    if (bug.status === 'IN_PROGRESS') {
      return '#9093DF'
    }
    return '#F69826'
  }

  return (
    <Box
      onMouseEnter={async () =>
        customClient.query({
          query: GetBugDatasDocument,
          variables: {
            where: {
              id: bug.id,
            },
          },
        })
      }
      backgroundColor={bgColor()}
      onClick={() => navigation(`/bugs/${bug.id}`)}
      px={7}
      py={2}
      cursor="pointer"
      justifyContent="space-between"
      display="flex"
      width="100%"
      flexDirection="row"
      key={bug.id}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="flex-start"
        w="80%"
      >
        <Text textStyle="cardBold">{bug.Website.name}</Text>
      </Box>
      <Flex w={20} justifyContent="space-between">
        <Box width="10%" height="10%">
          <Box
            rounded="full"
            width="15px"
            marginTop={1}
            height="15px"
            backgroundColor={chipColor()}
          />
        </Box>
        <Text textStyle="cardBold" fontWeight="normal">
          #{bug.number}
        </Text>
      </Flex>
    </Box>
  )
}
