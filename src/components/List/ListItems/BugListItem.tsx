/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line import/no-extraneous-dependencies
import { DateTime } from 'luxon'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetAllBugsByQuery, GetBugDatasDocument } from 'src/generated/graphql'
import { customClient } from 'src/App'

type Props = {
  bug: GetAllBugsByQuery['bugs'][number]
}

interface DateDiff extends Duration {
  values: {
    days: number
  }
}

export default function BugListItem({ bug }: Props): JSX.Element {
  const navigation = useNavigate()
  const { id } = useParams()
  const bugDate = DateTime.fromISO(bug.created_at)
  const todayDate = DateTime.local()
  const diff = todayDate.diff(bugDate, [
    'years',
    'months',
    'days',
    'hours',
  ]) as unknown as DateDiff

  const bgColor = () => {
    if (bug.id === id) {
      return '#CCCCCC'
    }
    return '#DFDFDF'
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
      p={4}
      cursor="pointer"
      justifyContent="space-between"
      display="flex"
      width="280px"
      minW="280px"
      flexDirection="row"
      borderBottom="1px"
      borderColor="#CCCCCC"
      key={bug.id}
    >
      <Box width="10%" height="10%">
        <Box
          rounded="full"
          width="15px"
          marginTop={1}
          height="15px"
          backgroundColor={chipColor()}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="flex-start"
        w="80%"
      >
        <Text fontWeight="bold" color="black">
          {bug.Website.name} report #{bug.number}
        </Text>
      </Box>

      <Text flexWrap="nowrap" display="flex" w={30}>
        {diff.values!.days} d
      </Text>
    </Box>
  )
}
