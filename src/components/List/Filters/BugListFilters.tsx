import {
  Button,
  Flex,
  Image,
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
import CustomBox from 'src/components/UI/CustomBox'

export default function BugListFilters(): JSX.Element {
  const { data, loading } = useGetAllWebSitesQuery()
  const { dispatchSearchedWebsite } = useSearchState()

  const [selectedWebsite, setSelectedWebsite] = useState<string | null>()

  return (
    <CustomBox h="20%" w="100%" p={7} zIndex={11}>
      <Stack spacing={4} w="100%">
        <Menu isLazy size="sm">
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
            {selectedWebsite ? (
              <Flex justifyContent="flex-start" alignItems="center">
                <WorldIcon />
                <Text fontSize="xs" ml={2}>
                  {selectedWebsite}
                </Text>
              </Flex>
            ) : (
              <Flex justifyContent="flex-start" alignItems="center">
                <WorldIcon />
                <Text fontSize="xs" ml={2}>
                  All websites
                </Text>
              </Flex>
            )}
          </MenuButton>
          <MenuList width="100%">
            <MenuItem onClick={() => dispatchSearchedWebsite('')} width="100%">
              All websites
            </MenuItem>
            {data?.websites.map((w) => (
              <MenuItem
                display="flex"
                justifyContent="space-between"
                onClick={() => {
                  dispatchSearchedWebsite(w.id)
                  setSelectedWebsite(w.name)
                }}
                key={w.id}
                width="100%"
              >
                {w.name}
                <Image mx={2} w={5} h={5} src={w.logo} />
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <AddBugButton />
      </Stack>
    </CustomBox>
  )
}
