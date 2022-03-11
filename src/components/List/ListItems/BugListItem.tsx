/* eslint-disable @typescript-eslint/no-non-null-assertion */
// eslint-disable-next-line import/no-extraneous-dependencies
import { DateTime } from 'luxon'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { GetAllBugsByQuery } from 'src/generated/graphql'

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

  return (
    <Box
      backgroundColor={bgColor()}
      onClick={() => navigation(`/bugs/${bug.id}`)}
      p={4}
      cursor="pointer"
      display="flex"
      flexDirection="row"
      borderBottom="1px"
      borderColor="#CCCCCC"
      key={bug.id}
      minH={150}
      width="100%"
    >
      <Box width="10%" height="10%">
        <Box
          rounded="full"
          width="15px"
          height="15px"
          backgroundColor="green"
        />
      </Box>

      <Box
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="flex-start"
        w="80%"
      >
        <Text fontWeight="bold" color="black">
          {bug.Website.name} #{bug.number}
        </Text>
        <Text fontWeight="bold" color="black">
          {bug.title}
        </Text>
        <Text fontWeight="normal" fontSize={9} color="black">
          {bug.id}
        </Text>

        <Text
          fontWeight="normal"
          fontSize={12}
          isTruncated
          w="100%"
          noOfLines={2}
          color="black"
        >
          {bug.description}
        </Text>
      </Box>

      <Text>{diff.values!.days}d</Text>
    </Box>
  )
}
