/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import {
  GetAllBugsByDocument,
  useCreateCustomBugMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import RadioGroup from '../RadioGroup'

export const severityOptions = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']
export const priorityOptions = ['LOW', 'MEDIUM', 'HIGH']

export default function CreateBugForm(): JSX.Element {
  const { control, handleSubmit, register } = useForm()
  const toast = useToast()

  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAppState()
  if (!user) return <>no user</>

  const queryVariables = {
    where: {
      websiteId: {
        contains: '',
      },
    },
  }

  const [mutate, { loading }] = useCreateCustomBugMutation({
    refetchQueries: [
      {
        query: GetAllBugsByDocument,
        variables: queryVariables,
      },
    ],
    onCompleted: (data) => {
      console.log(data)
      toast({
        title: 'Bug sent.',
        description: 'Thanks for this report.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate(
        `/createbug/websites/${id}/bug/${data.createBugCustom.id}/uploadfiles`
      )
    },
  })

  if (!user) return <div>You must be logged in to create a bug</div>
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
              id,
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
    <Box
      width={['90%', '90%', '80%', '90%']}
      backgroundColor="white"
      rounded={5}
      shadow="md"
      overflow="scroll"
      p={8}
      css={{
        '&::-webkit-scrollbar': {
          width: '6px',
          position: 'absolute',
          right: -10,
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          position: 'absolute',
          right: -10,
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          position: 'absolute',
          right: -10,
          borderRadius: '24px',
        },
      }}
    >
      <Box mb={10}>
        <Text color="#747474" fontWeight="bold" fontSize={15}>
          Repport a new Bug 🐛
        </Text>
        <Text color="#747474" fontWeight="normal" fontSize={15}>
          First we would like to thank you for using our tool. We’re now going
          to need some information.
        </Text>
      </Box>
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
        minH={400}
        color="black"
        {...register('description')}
        placeholder="Description"
      />

      <Button
        variant="solid"
        backgroundColor="green"
        onClick={handleSubmit(onSubmit)}
      >
        {loading ? <Spinner /> : 'SUBMIT'}
      </Button>
    </Box>
  )
}
