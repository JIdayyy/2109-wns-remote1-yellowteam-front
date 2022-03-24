/* eslint-disable react/no-children-prop */
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useGetAllWebSitesQuery } from 'src/generated/graphql'
import SearchIcon from 'src/static/svg/Search'
import WebSitesListItem from './ListItems/WebSitesListItem'

export default function WebSiteList({
  isNew,
}: {
  isNew: boolean
}): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()
  const [search, setSearch] = useState('')

  if (loading) <Spinner width={10} height={10} />
  if (!data) return <Box>No data</Box>

  return (
    <Box
      display="flex"
      rounded={4}
      width="auto"
      height="100%"
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
        On wich website did you encounter this bug ?
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="tel"
          placeholder="Search"
        />
      </InputGroup>
      <Flex width="100%" flexWrap="wrap" flexDirection="row">
        {data?.websites
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((website) => (
            <WebSitesListItem
              key={website.id}
              isNew={isNew}
              website={website}
            />
          ))}
      </Flex>
    </Box>
  )
}
