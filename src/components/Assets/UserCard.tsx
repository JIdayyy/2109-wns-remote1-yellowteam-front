import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { GetBugDatasQuery } from 'src/generated/graphql'

interface IProps {
  user: GetBugDatasQuery['bug']['user']
}

export default function UserCard({ user }: IProps): JSX.Element {
  return (
    <Box
      backgroundColor="#24323F"
      color="white"
      display="flex"
      shadow="md"
      my={2}
      rounded={2}
      alignItems="center"
      justifyContent="flex-start"
    >
      <Image h={55} w={55} src={user.avatar} />
      <Flex
        h="100%"
        display="flex"
        justifyContent="space-between"
        direction="column"
        px={2}
      >
        <Text fontSize={12} textStyle="card">
          {user.first_name} {user.last_name}
        </Text>
        <Text textStyle="card">{user.email}</Text>
      </Flex>
    </Box>
  )
}
