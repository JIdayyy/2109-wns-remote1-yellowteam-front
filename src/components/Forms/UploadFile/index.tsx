/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Image, Text, useToast } from '@chakra-ui/react'
import useAppState from 'src/hooks/useAppState'
import { FileValidated } from '@dropzone-ui/react/build/components/dropzone/components/utils/validation.utils'
import { useParams } from 'react-router-dom'
import MyDropzone from 'src/components/DropZone'
import { GetAllFilesByBugDocument } from 'src/generated/graphql'
import customClient from 'src/services/graphql'
import UploadIcon from '../../../static/img/cloudUpload.png'
import CustomFileItem from './FileItem'

const serverUrl =
  process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/graphql'

interface IProps {
  onClose: () => void
  setIsUpload?: (value: boolean) => void
}

export default function UploadFile({
  onClose,
  setIsUpload,
}: IProps): JSX.Element {
  const [file, setFile] = useState<FileValidated[]>([])
  const { id: bugId } = useParams()
  const { user } = useAppState()
  const toast = useToast()
  const [progress, setProgress] = useState(0)
  const [fileOnUpload, setFileOnUpload] = useState<string | number | undefined>(
    ''
  )
  const [uploadSucces, setUploadSucces] = useState<string[]>([])
  if (!user) return <>no user</>

  const handleUpload = async (id: string, oneFile: FileValidated) => {
    const formData = new FormData()
    formData.append(
      'operations',
      JSON.stringify({
        query:
          'mutation upload($file: Upload!){\n uploadFile(file: $file){\n  name\n  path\n  id\n}\n}\n',
      })
    )

    formData.append('map', JSON.stringify({ '0': ['variables.file'] }))
    formData.append('0', oneFile.file)

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'platform-auth-user-agent': 'web-platform',
      },
      withCredentials: true,
    }
    const data = () =>
      axios
        .post(
          `${serverUrl}?userId=${user.id}&bugId=${bugId}&size=${oneFile.file.size}`,
          formData,
          {
            ...config,
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent
              setFileOnUpload(oneFile.id)

              setProgress((loaded / total) * 100)
            },
          }
        )
        .then(async (r) => {
          if (r.data.data.uploadFile) {
            toast({
              title: 'Files uploaded successfully.',
              description: 'We got your files !',
              status: 'success',
              duration: 2000,
              isClosable: true,
            })

            await customClient.refetchQueries({
              include: [GetAllFilesByBugDocument],
              optimistic: true,
            })
            setUploadSucces((c) => [...c, r.data.data.uploadFile.name])
          }
          setProgress(0)
          return r.data
        })
        .catch((r) => {
          console.log(r)
          toast({
            title: 'Error during upload.',
            description: 'Error !',
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        })
    const res = await data()
    return res
  }

  useEffect(() => {
    if (
      uploadSucces.length === file.length &&
      uploadSucces.length > 0 &&
      setIsUpload
    ) {
      setIsUpload(false)
      onClose()
    }
  }, [uploadSucces])

  const uploadAllFiles = async () => {
    const results = await Promise.all(
      file.map((fle) => handleUpload(bugId as string, fle))
    )
    return results
  }

  return (
    <Box
      width="100%"
      backgroundColor="white"
      rounded={5}
      overflow="hidden"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      height="100%"
    >
      <Box
        width="100%"
        backgroundColor="white"
        rounded={5}
        overflow="hidden"
        display="flex"
        height="100%"
      >
        <Box
          width="50%"
          height="100%"
          backgroundColor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MyDropzone file={file} setFile={setFile} />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute"
          >
            <Image src={UploadIcon} width={100} height={100} />
            <Text color="#828282">Drag and Drop file or click to browse</Text>
          </Box>
        </Box>

        <Box
          overflow="scroll"
          width="50%"
          height="-moz-max-content"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap={['wrap', 'wrap', 'wrap']}
          overflowY="scroll"
          maxHeight="500px"
          backgroundColor="#ECECEC"
          css={{
            '&::-webkit-scrollbar': {
              width: '2px',
            },
            '&::-webkit-scrollbar-track': {
              width: '2px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
        >
          {file.map((fle) => (
            <CustomFileItem
              key={fle.id}
              uploadSucces={uploadSucces}
              fileOnUpload={fileOnUpload}
              fle={fle}
              progress={progress}
            />
          ))}
        </Box>
      </Box>
      <Button
        my={5}
        zIndex={30}
        variant="action"
        onClick={() => uploadAllFiles()}
      >
        Upload
      </Button>
    </Box>
  )
}
