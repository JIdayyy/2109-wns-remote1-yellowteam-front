import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { SortOrder, useGetAllCommentsQuery } from 'src/generated/graphql'
import FileHeaderIcon from 'src/static/svg/FilesHeaderIcon'
import CommentListItem from './ListItems/CommentListItem'

export default function CommentList(): JSX.Element {
  const { id } = useParams()

  const { data } = useGetAllCommentsQuery({
    variables: {
      where: {
        bugId: {
          equals: id,
        },
      },
      orderBy: {
        created_at: 'desc' as SortOrder,
      },
    },
  })

  return (
    <Flex
      my={5}
      shadow="md"
      direction="column"
      rounded={4}
      border="1px solid #B8B8B8"
    >
      <Flex p={4} borderBottom="1px solid #B8B8B8">
        <FileHeaderIcon />
        <Text mx={2} textStyle="body">
          Comments
        </Text>
      </Flex>
      <Flex
        direction="column"
        w="full"
        h="full"
        maxH="400px"
        overflowY="scroll"
      >
        {data?.comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </Flex>
    </Flex>
  )
}
