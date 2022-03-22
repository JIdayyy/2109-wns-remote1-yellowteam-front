import { Flex } from '@chakra-ui/react'

import CommentList from '../List/CommentList'
import AddComment from './AddComment'

export default function CommentsModule(): JSX.Element {
  return (
    <Flex direction="column" my={10}>
      <AddComment />
      <CommentList />
    </Flex>
  )
}
