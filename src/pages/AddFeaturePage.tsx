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
import React, { useState } from 'react'
import CategoriesList from 'src/components/List/CategoriesList'
import WebSitesListItem from 'src/components/List/ListItems/WebSitesListItem'
import { useGetAllWebSitesQuery } from 'src/generated/graphql'
import SearchIcon from 'src/static/svg/Search'

export default function AddFeaturePage(): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()
  const [search, setSearch] = useState('')

  if (loading) <Spinner width={10} height={10} />
  if (!data) return <Box>No data</Box>

  return (
    <Flex
      flexDirection="column"
      width="80%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        flexDirection="row"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          rounded={4}
          width="100%"
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
          <Text fontSize={17} my={5}>
            On wich website did you encounter this bug ?
          </Text>
          <InputGroup my={4} w="100%">
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
                <WebSitesListItem key={website.id} website={website} />
              ))}
          </Flex>
        </Box>
      </Flex>
      <Text fontSize={17} my={5} w="100%" textAlign="left">
        Now select a category
      </Text>
      <CategoriesList />
    </Flex>
  )
}
