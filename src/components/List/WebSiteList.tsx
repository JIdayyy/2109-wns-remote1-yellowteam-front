import { Box, Spinner } from '@chakra-ui/react'
import { useGetAllWebSitesQuery } from 'src/generated/graphql'
import WebSitesListItem from './ListItems/WebSitesListItem'

export default function WebSiteList({
  isNew,
}: {
  isNew: boolean
}): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()

  if (loading) <Spinner width={10} height={10} />
  if (!data) return <Box>No data</Box>

  return (
    <Box display="flex" flexDirection="column">
      {data?.websites.map((website) => (
        <WebSitesListItem key={website.id} isNew={isNew} website={website} />
      ))}
    </Box>
  )
}
