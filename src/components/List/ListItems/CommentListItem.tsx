import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import useDateConversion from 'src/components/Hook/useDateConversion'
import { GetAllCommentsQuery } from 'src/generated/graphql'

type Props = {
  comment: GetAllCommentsQuery['comments'][number]
}

export default function CommentListItem({ comment }: Props): JSX.Element {
  const { computeDayDiff, todayDate } = useDateConversion()
  return (
    <Flex w="100%" p={4}>
      <Image src={comment.user.avatar} width={7} height={7} rounded="full" />
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="flex-start"
        mx={2}
        direction="column"
      >
        <Flex w="100%" justifyContent="flex-start" alignItems="center">
          <Text mx={1} textStyle="body">
            {comment.user.first_name} {comment.user.last_name}
          </Text>
          <Text mx={1}>
            {computeDayDiff(todayDate, comment.created_at)} days ago
          </Text>
        </Flex>
        <Text textStyle="body" fontWeight="light">
          {comment.text}
        </Text>
      </Flex>
      <Divider orientation="horizontal" />
    </Flex>
  )
}
