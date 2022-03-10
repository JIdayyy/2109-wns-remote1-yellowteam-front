import { Box, Image, Link, Text } from '@chakra-ui/react'
import { GetAllWebSitesQuery } from 'src/generated/graphql'
import useCreateBug from 'src/hooks/useCreateBugState'

type Props = {
  website: GetAllWebSitesQuery['websites'][number]
}

export default function WebSitesListItem({ website }: Props): JSX.Element {
  const { dispatchWebSite } = useCreateBug()
  return (
    <Box
      onClick={() => dispatchWebSite(website.id)}
      p={4}
      cursor="pointer"
      display="flex"
      flexDirection="row"
      border="1px"
      borderColor="gray"
      key={website.id}
    >
      <Image src={website.logo} width={10} height={10} />
      <Box>
        <Text color="black">{website.name}</Text>
        <Text color="black">
          <Link href={website.url} target="_blank" color="black">
            {website.url}
          </Link>
        </Text>
      </Box>
    </Box>
  )
}
