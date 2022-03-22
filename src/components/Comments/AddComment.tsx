/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, Image, Input, Spinner, useToast } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import {
  GetAllCommentsDocument,
  SortOrder,
  useCreateCommentMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'

export default function AddComment(): JSX.Element {
  const { handleSubmit, register, reset, setValue } = useForm()
  const { id } = useParams()
  const toast = useToast()

  const GetAllCommentsVariables = {
    where: {
      Bug: {
        is: {
          id: {
            equals: id,
          },
        },
      },
    },
    orderBy: {
      created_at: 'desc' as SortOrder,
    },
  }

  const [createComment, { loading }] = useCreateCommentMutation({
    refetchQueries: [
      { query: GetAllCommentsDocument, variables: GetAllCommentsVariables },
    ],
    onCompleted: () => {
      reset()
      setValue('comment', '')
      toast({
        title: 'Comment sent',
        description: 'Thanks for this contribution.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    },
  })

  const { user } = useAppState()

  const onSubmit = (formData: FieldValues) => {
    createComment({
      variables: {
        data: {
          user: {
            connect: {
              id: user?.id,
            },
          },
          text: formData.comment,
          Bug: {
            connect: {
              id,
            },
          },
        },
      },
    })
  }

  return (
    <Flex
      w="100%"
      shadow="md"
      p={1}
      justifyContent="space-between"
      alignItems="center"
      border="1px solid #B8B8B8"
      rounded={4}
    >
      <Image
        fallbackSrc="https://via.placeholder.com/150"
        mx={2}
        src={user?.avatar}
        height={7}
        w={7}
        rounded="full"
      />
      <Input
        size="sm"
        mx={1}
        {...register('comment', { required: true })}
        placeholder="Comment on this bug..."
      />
      <Button
        mx={1}
        w="200px"
        size="sm"
        color="white"
        rounded={4}
        px={14}
        backgroundColor="#24323F"
        onClick={handleSubmit(onSubmit)}
      >
        {loading ? <Spinner /> : 'SUBMIT'}
      </Button>
    </Flex>
  )
}
