import { Box, Image, Link, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import {
  useGetAllBugsByQuery,
  useGetAllWebSitesQuery,
} from 'src/generated/graphql'
import BugListItem from './ListItems/BugListItem'

export default function BugList(): JSX.Element {
  const { data, loading } = useGetAllBugsByQuery({
    variables: {
      where: {
        websiteId: {
          equals: '9f3fe4e5-72eb-482d-8ff6-f88ccd61bbda',
        },
      },
    },
  })

  if (loading) <Spinner />

  return (
    <Box
      width="30%"
      height="100%"
      backgroundColor="gray"
      display="flex"
      flexDirection="column"
    >
      {data?.bugs.map((bug) => (
        <BugListItem bug={bug} />
      ))}
    </Box>
  )
}
