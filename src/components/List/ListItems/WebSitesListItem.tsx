/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import { Box, Image, Link, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GetAllWebSitesQuery } from 'src/generated/graphql'

type Props = {
  website: GetAllWebSitesQuery['websites'][number]
  isNew?: boolean
}

const MotionBox = motion(Box)

export default function WebSitesListItem({
  website,
  isNew,
}: Props): JSX.Element {
  const navigation = useNavigate()

  const handleClick = () => {
    if (isNew) {
      return navigation(`/createbug/websites/${website.id}`)
    }
    return navigation(`/websites/${website.id}/createbug`)
  }

  return (
    <MotionBox
      rounded={5}
      width="265px"
      height="80px"
      shadow="md"
      justifyContent="flex-start"
      alignItems="center"
      m={1}
      whileHover={{ backgroundColor: '#F0F0F0' }}
      onClick={handleClick}
      p={4}
      cursor="pointer"
      display="flex"
      backgroundColor="white"
      flexDirection="row"
      key={website.id}
    >
      <Image mr={10} src={website.logo} width={10} height={10} />
      <Box w="100%">
        <Text color="#9F9F9F">{website.name}</Text>
        <Text noOfLines={1} w="100%" fontSize={10} color="#9F9F9F">
          <Link href={website.url} target="_blank" color="#9F9F9F">
            {website.url}
          </Link>
        </Text>
      </Box>
    </MotionBox>
  )
}
