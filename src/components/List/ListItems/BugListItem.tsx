import { Box, Image, Link, Text } from '@chakra-ui/react'
import { GetAllBugsByQuery, GetAllWebSitesQuery } from 'src/generated/graphql'
import useCreateBug from 'src/hooks/useCreateBugState'

type Props = {
  bug: GetAllBugsByQuery['bugs'][number]
}

export default function BugListItem({ bug }: Props): JSX.Element {
  return (
    <Box
      p={4}
      cursor="pointer"
      display="flex"
      flexDirection="row"
      border="1px"
      borderColor="gray"
      key={bug.id}
    >
      <Box>
        <Text color="black">{bug.title}</Text>
      </Box>
    </Box>
  )
}
