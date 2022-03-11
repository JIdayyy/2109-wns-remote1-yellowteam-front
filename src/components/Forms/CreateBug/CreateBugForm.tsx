/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Image,
  Input,
  Link,
  Spinner,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
  GetAllBugsByDocument,
  useCreateBugMutation,
} from 'src/generated/graphql'
import useAppState from 'src/hooks/useAppState'
import { ChangeEvent, useState } from 'react'
import { Dropzone, FileItem } from '@dropzone-ui/react'
import { FileValidated } from '@dropzone-ui/react/build/components/dropzone/components/utils/validation.utils'
import RadioGroup from '../RadioGroup'

export const severityOptions = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']
export const priorityOptions = ['LOW', 'MEDIUM', 'HIGH']

export default function CreateBugForm(): JSX.Element {
  const { control, handleSubmit, register, reset } = useForm()
  const { id } = useParams()
  const { user } = useAppState()
  if (!user) return <>no user</>
  const [image, setImage] = useState<File | undefined>()
  const [file, setFile] = useState<FileValidated[]>([])
  const [fileUrl, setFileUrl] = useState<string>('')

  const queryVariables = {
    where: {
      websiteId: {
        contains: '',
      },
    },
  }

  const handleUpload = async (bugId: string) => {
    const formData = new FormData()
    formData.append(
      'operations',
      JSON.stringify({
        query:
          'mutation upload($file: Upload!){\n uploadFile(file: $file){\n  name\n  path\n  id\n}\n}\n',
      })
    )
    formData.append('map', JSON.stringify({ '0': ['variables.file'] }))

    formData.append('0', image as File)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'platform-auth-user-agent': 'web-platform',
      },
    }

    const data = () =>
      axios
        .post(
          `http://localhost:5000/graphql?userId=${user.id}&bugId=${bugId}`,
          formData,
          config
        )
        .then((r) => setFileUrl(r.data.data.uploadFile.path))
    console.log(await data())
  }

  const [mutate, { loading }] = useCreateBugMutation({
    refetchQueries: [
      {
        query: GetAllBugsByDocument,
        variables: queryVariables,
      },
    ],
    onCompleted: (data) => handleUpload(data.createBug.id).then(() => reset()),
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
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0])
    }
  }
  return (
    <Box
      width="100%"
      height="100%"
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
      <Text color="black">Repport a new Bug</Text>
      <Input my={2} color="black" {...register('title')} placeholder="Title" />
      {fileUrl && (
        <Link target="_blank" href={fileUrl}>
          <Text color="black">{fileUrl}</Text>
        </Link>
      )}
      <Image src={fileUrl} />

      <Dropzone onChange={(img) => setFile(img)} value={file}>
        {file.map((fle) => (
          <FileItem {...fle} preview />
        ))}
      </Dropzone>

      <Input
        name="file"
        accept="*"
        multiple={false}
        id="file"
        onChange={handleImage}
        my={2}
        color="black"
        placeholder="File"
        type="file"
      />
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
