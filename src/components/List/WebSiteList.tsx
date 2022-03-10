import { Box, Image, Link, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { useGetAllWebSitesQuery } from 'src/generated/graphql'
import WebSitesListItem from './ListItems/WebSitesListItem'

export default function WebSiteList(): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()

  if (loading) <Spinner />

  return (
    <Box display="flex" flexDirection="column">
      {data?.websites.map((website) => (
        <WebSitesListItem website={website} />
      ))}
    </Box>
  )
}
