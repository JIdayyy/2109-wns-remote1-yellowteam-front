/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import update from 'immutability-helper'

import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {
  GetAllBugsByDocument,
  SortOrder,
  useCreateCustomBugMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import useCreateBugState from 'src/hooks/useCreateBugState'
import useSearchState from 'src/hooks/useSearchState'
import useUploadFileState from 'src/hooks/useUploadFileState'
import customScrollBar from 'src/theme/scrollbar'
import useSound from 'use-sound'
import sendSound from '../../../static/sounds/send.mp3'
import RadioGroup from '../RadioGroup'

export const severityOptions = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']
export const priorityOptions = ['LOW', 'MEDIUM', 'HIGH']

interface IProps {
  setIsUpload: (value: boolean) => void
}

export default function CreateBugForm({ setIsUpload }: IProps): JSX.Element {
  const [play] = useSound(sendSound)
  const { control, handleSubmit, register } = useForm()
  const { website } = useSearchState()
  const {
    selectedWebsite,
    selectedCategory,
    dispatchSelectedCategory,
    dispatchSelectedWebsite,
  } = useCreateBugState()
  const { dispatchSetSelectedBug } = useUploadFileState()
  const toast = useToast()
  const navigate = useNavigate()
  const { user, dispatchLogout } = useAppState()

  if (!user) {
    dispatchLogout()
    navigate('/login')
  }

  // const queryVariables = {
  //   orderBy: {
  //     number: 'desc' as SortOrder,
  //   },
  //   where: {
  //     Website: {
  //       is: {
  //         id: {
  //           equals: website || undefined,
  //         },
  //       },
  //     },
  //   },
  // }

  const [mutate, { loading }] = useCreateCustomBugMutation({
    // refetchQueries: [
    //   {
    //     query: GetAllBugsByDocument,
    //     variables: queryVariables,
    //   },
    // ],

    updateQueries: {
      bugs: (prev, { mutationResult }) => {
        const newBug = mutationResult.data?.createBugCustom

        return update(prev, {
          entry: {
            bugs: {
              $unshift: [newBug],
            },
          },
        })
      },
    },
    onCompleted: (data) => {
      play()
      toast({
        title: 'Bug sent.',
        description: 'Thanks for this report.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      dispatchSetSelectedBug(data.createBugCustom.id)
      dispatchSelectedCategory('')
      dispatchSelectedWebsite('')
      setIsUpload(true)
      navigate(`/bugs/${data.createBugCustom.id}`)
    },
  })

  if (!user) return <div>You must be logged in to create a bug</div>

  const onSubmit = async (data: FieldValues) => {
    mutate({
      variables: {
        data: {
          ...data,
          Category: {
            connect: {
              id: selectedCategory,
            },
          },
          description: data.description,
          title: data.title,
          severity: data.severity,
          Website: {
            connect: {
              id: selectedWebsite,
            },
          },
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      },
    })
  }

  return (
    <Box width="100%" rounded={5} overflow="scroll" css={customScrollBar}>
      <FormLabel color="#747474" fontWeight="normal">
        Please give a title to this bug :
      </FormLabel>
      <Input my={2} color="black" {...register('title')} placeholder="Title" />

      <Text color="#747474" fontWeight="normal" fontSize={15}>
        What’s the severity :
      </Text>

      <RadioGroup
        options={severityOptions}
        isRequired
        control={control}
        name="severity"
        label="severity"
      />

      <Text color="#747474" fontWeight="normal" fontSize={15}>
        How do you define the priority of this bug for our team ?
      </Text>

      <RadioGroup
        options={priorityOptions}
        isRequired
        control={control}
        name="priority"
        label="priority"
      />

      <Textarea
        my={2}
        minH={200}
        color="black"
        {...register('description')}
        placeholder="Description"
      />

      <Button
        variant="solid"
        backgroundColor="green"
        color="white"
        isLoading={loading}
        onClick={handleSubmit(onSubmit)}
      >
        SUBMIT
      </Button>
    </Box>
  )
}
