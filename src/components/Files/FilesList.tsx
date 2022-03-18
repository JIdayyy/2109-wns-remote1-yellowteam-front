import { Box, Divider, Flex, Link, SkeletonText, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
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

  return (
    <Box
      minH="400px"
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
                  <Text mx={2} noOfLines={1} fontSize={12} color="#747474">
                    {file.name}
                  </Text>
                </Link>
              </Flex>
              <Text
                noOfLines={1}
                fontWeight="normal"
                fontSize={12}
                color="#747474"
                width="30%"
              >
                {file.size} ko
              </Text>
              <Text
                noOfLines={1}
                fontWeight="normal"
                fontSize={12}
                color="#747474"
                width="30%"
              >
                {file.created_at}
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
