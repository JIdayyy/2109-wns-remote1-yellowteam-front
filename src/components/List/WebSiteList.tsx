import { Box, Spinner, Text } from '@chakra-ui/react'
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
    <Box
      shadow="md"
      backgroundColor="white"
      display="flex"
      rounded={4}
      height="500px"
      width="100%"
      p={4}
      overflow="scroll"
      flexDirection="column"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '24px',
        },
      }}
    >
      <Text fontSize={17} my={5} mx={4}>
        On wich website did you encounter this bug ?{' '}
      </Text>
      {data?.websites.map((website) => (
        <WebSitesListItem key={website.id} isNew={isNew} website={website} />
      ))}
    </Box>
  )
}
