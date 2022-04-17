import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useGetAllWebSitesQuery } from 'src/generated/graphql'
import AddBugButton from 'src/components/Report/AddBugButton'
import WorldIcon from 'src/static/svg/WorldIcon'
import useSearchState from 'src/hooks/useSearchState'
import { useState } from 'react'

export default function BugListFilters(): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()
  const { dispatchSearchedWebsite } = useSearchState()

  const [selectedWebsite, setSelectedWebsite] = useState<string | null>()

  return (
    <Flex h="20%" w="100%" p={7} zIndex={11} backgroundColor="white">
      <Stack spacing={4} w="100%">
        <Menu isLazy size="sm">
          <MenuButton
            loading={loading}
            backgroundColor="transparent"
            as={Button}
            border="1px solid #24323F"
            rounded={4}
            py={1}
            height={6}
            width="100%"
          >
            {selectedWebsite ? (
              <Flex justifyContent="flex-start" alignItems="center">
                <WorldIcon />
                <Text mx={4}>{selectedWebsite}</Text>
              </Flex>
            ) : (
              <Flex justifyContent="flex-start" alignItems="center">
                <WorldIcon />
                <Text mx={4}>All websites</Text>
              </Flex>
            )}
          </MenuButton>
          <MenuList width="100%">
            <MenuItem onClick={() => dispatchSearchedWebsite('')} width="100%">
              All websites
            </MenuItem>
            {data?.websites.map((w) => (
              <MenuItem
                onClick={() => {
                  dispatchSearchedWebsite(w.id)
                  setSelectedWebsite(w.name)
                }}
                key={w.id}
                width="100%"
              >
                {w.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        {/* <Menu isLazy size="sm">
          <MenuButton
            loading={loading.toString()}
            backgroundColor="transparent"
            as={Button}
            border="1px solid #24323F"
            rounded={4}
            py={1}
            height={6}
            width="100%"
          >
            <Flex justifyContent="flex-start" alignItems="center">
              <WorldIcon />
              <Text mx={4}>Meta Shop</Text>
            </Flex>
          </MenuButton>
          <MenuList width="100%">
            <MenuItem width="100%">Download</MenuItem>
            <MenuItem width="100%">Create a Copy</MenuItem>
            <MenuItem width="100%">Mark as Draft</MenuItem>
            <MenuItem width="100%">Delete</MenuItem>
            <MenuItem width="100%">Attend a Workshop</MenuItem>
          </MenuList>
        </Menu> */}
        <AddBugButton />
      </Stack>
    </Flex>
  )
}
