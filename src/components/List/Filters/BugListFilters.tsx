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
import AddBugButton from 'src/components/Report/AddBugButton'
import WorldIcon from 'src/static/svg/WorldIcon'

export default function BugListFilters(): JSX.Element {
  return (
    <Flex h="20%" w="100%" p={7} zIndex={11} backgroundColor="white">
      <Stack spacing={4} w="100%">
        <Menu isLazy size="sm">
          <MenuButton
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
        </Menu>
        <Menu isLazy size="sm">
          <MenuButton
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
        </Menu>
        <AddBugButton />
      </Stack>
    </Flex>
  )
}
