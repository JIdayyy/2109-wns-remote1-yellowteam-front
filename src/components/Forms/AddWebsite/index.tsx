/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import {
  GetAllWebSitesDocument,
  useCreateWebsiteMutation,
} from 'src/generated/graphql'

interface IProps {
  onClose: () => void
}

export default function AddWebsiteForm({ onClose }: IProps): JSX.Element {
  const { register, handleSubmit } = useForm()
  const [value, setValue] = useState('0')

  const [createWebsite, { loading }] = useCreateWebsiteMutation({
    onCompleted: async () => {
      onClose()
    },
    refetchQueries: [
      {
        query: GetAllWebSitesDocument,
      },
    ],
  })

  const onSubmit = (data: FieldValues) => {
    createWebsite({
      variables: {
        data: {
          isPreview: value === 'yes' && true,
          logo: data.logo,
          name: data.name,
          url: data.url,
        },
      },
    })
  }

  return (
    <FormControl>
      <FormLabel color="#747474" fontWeight="normal">
        Informations
      </FormLabel>
      <Input my={2} {...register('name')} placeholder="Website name" />
      <Input my={2} {...register('url')} placeholder="Website url" />
      <FormLabel color="#747474" fontWeight="normal">
        Add an url of the website logo or upload it
      </FormLabel>
      <Input my={2} {...register('logo')} placeholder="Website logo url" />
      <FormLabel color="#747474" fontWeight="normal">
        This website is in preview / development ?
      </FormLabel>

      <RadioGroup my={2} onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Stack>
      </RadioGroup>

      <Button
        my={5}
        zIndex={30}
        isLoading={loading}
        w="full"
        variant="action"
        onClick={handleSubmit(onSubmit)}
      >
        SUBMIT
      </Button>
    </FormControl>
  )
}
