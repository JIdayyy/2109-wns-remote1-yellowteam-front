/* eslint-disable react/jsx-props-no-spreading */
import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import {
  GetAllBugsByDocument,
  useCreateBugMutation,
} from 'src/generated/graphql'
import useCreateBug from 'src/hooks/useCreateBugState'
import RadioGroup from '../RadioGroup'

export const severityOptions = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']
export const priorityOptions = ['LOW', 'MEDIUM', 'HIGH']

export default function CreateBugForm(): JSX.Element {
  const { control, handleSubmit, register, reset } = useForm()

  const [mutate] = useCreateBugMutation({
    refetchQueries: [
      {
        query: GetAllBugsByDocument,
        variables: {
          where: {
            websiteId: {
              equals: '9f3fe4e5-72eb-482d-8ff6-f88ccd61bbda',
            },
          },
        },
      },
    ],
    onCompleted: () => reset(),
  })
  const { website } = useCreateBug()

  const onSubmit = async (data: FieldValues) => {
    mutate({
      variables: {
        data: {
          ...data,
          description: data.description,
          title: data.title,
          severity: data.severity,
          Website: {
            connect: {
              id: website,
            },
          },
          user: {
            connect: {
              id: '47e1fc85-9f69-48db-8b5a-367ffc01810b',
            },
          },
        },
      },
    })
  }

  return (
    <Box width="100%" height="100%">
      <Input my={2} color="black" {...register('title')} placeholder="Title" />
      <Textarea
        my={2}
        color="black"
        {...register('description')}
        placeholder="Description"
      />

      <Text color="black">Severity :</Text>

      <RadioGroup
        options={severityOptions}
        isRequired
        control={control}
        name="severity"
        label="severity"
      />

      <Text color="black">Priority :</Text>

      <RadioGroup
        options={priorityOptions}
        isRequired
        control={control}
        name="priority"
        label="priority"
      />

      <Button onClick={handleSubmit(onSubmit)}>SUBMIT</Button>
    </Box>
  )
}
