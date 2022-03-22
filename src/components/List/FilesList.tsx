import { Box, Divider, Flex, Link, SkeletonText, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { DateTime } from 'luxon'
import { useParams } from 'react-router-dom'
import { useGetAllFilesByBugQuery } from 'src/generated/graphql'
import FileHeaderIcon from 'src/static/svg/FilesHeaderIcon'

const MotionFlex = motion(Flex)

export default function FilesList(): JSX.Element {
  const { id } = useParams()

  const { data, loading } = useGetAllFilesByBugQuery({
    variables: {
      where: {
        id,
      },
    },
  })
  const creationDate = (file: string) => {
    return DateTime.fromISO(file)
  }

  return (
    <Box
      minH="100px"
      maxH="500px"
      overflowY="scroll"
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
      {!loading ? (
        data?.bug.File.map((file) => (
          <>
            <MotionFlex
              p={2}
              whileHover={{ backgroundColor: '#F2F2F2' }}
              width="100%"
              alignItems="center"
            >
              <Flex width="100%">
                <FileHeaderIcon />
                <Link target="_blank" href={file.path}>
                  <Text mx={2} noOfLines={1} isTruncated textStyle="body">
                    {file.name}
                  </Text>
                </Link>
              </Flex>
              <Text
                w="20%"
                noOfLines={1}
                isTruncated
                textStyle="body"
                width="20%"
              >
                {file.size} ko
              </Text>
              <Text
                w="20%"
                noOfLines={1}
                isTruncated
                textStyle="body"
                width="20%"
              >
                {file.type}
              </Text>
              <Text
                w="20%"
                noOfLines={1}
                isTruncated
                textStyle="body"
                width="20%"
              >
                {creationDate(file.created_at).toLocaleString()}
              </Text>
            </MotionFlex>
            <Divider orientation="horizontal" />
          </>
        ))
      ) : (
        <Box padding="2" boxShadow="lg" bg="white">
          <SkeletonText mt="2" noOfLines={1} spacing="4" />
          <SkeletonText mt="2" noOfLines={1} spacing="4" />
          <SkeletonText mt="2" noOfLines={1} spacing="4" />
          <SkeletonText mt="2" noOfLines={1} spacing="4" />
          <SkeletonText mt="2" noOfLines={1} spacing="4" />
        </Box>
      )}
    </Box>
  )
}
