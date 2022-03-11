import { Box, Image, Link, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { GetAllWebSitesQuery } from 'src/generated/graphql'

type Props = {
  website: GetAllWebSitesQuery['websites'][number]
  isNew: boolean
}

export default function WebSitesListItem({
  website,
  isNew,
}: Props): JSX.Element {
  const navigation = useNavigate()
  const handleClick = () => {
    if (isNew) {
      navigation(`/createbug/websites/${website.id}`)
    } else {
      navigation(`/websites/${website.id}/createbug`)
    }
  }

  return (
    <Box
      onClick={handleClick}
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
