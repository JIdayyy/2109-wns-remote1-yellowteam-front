/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import axios from 'axios'
import { Box, Button, Text } from '@chakra-ui/react'
import useAppState from 'src/hooks/useAppState'
import { FileValidated } from '@dropzone-ui/react/build/components/dropzone/components/utils/validation.utils'
import { useParams } from 'react-router-dom'
import UploadIcon from 'src/static/svg/UploadIcon'
import MyDropzone from 'src/components/DropZone'
import CustomFileItem from './FileItem'

const serverUrl =
  process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/graphql'

export default function UploadFile(): JSX.Element {
  const [file, setFile] = useState<FileValidated[]>([])
  const { bugId } = useParams()
  const { user } = useAppState()
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
    console.log(uploadSucces)
    const data = () =>
      axios
        .post(`${serverUrl}?userId=${user.id}&bugId=${id}`, formData, {
          ...config,
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent
            setFileOnUpload(oneFile.id)

            setProgress((loaded / total) * 100)
          },
        })
        .then((r) => {
          if (r.data.data.uploadFile) {
            setUploadSucces((c) => [...c, r.data.data.uploadFile.name])
          }
          setProgress(0)
          return r.data
        })
        .catch((r) => console.log(r))
    const res = await data()
    return res
  }
  const uploadAllFiles = async () => {
    const results = await Promise.all(
      file.map((fle) => handleUpload(bugId as string, fle))
    )
    return results
  }
  return (
    <>
      <Box
        width={['90%', '90%', '80%', '90%']}
        backgroundColor="white"
        rounded={5}
        overflow="hidden"
        display="flex"
        shadow="md"
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
            <UploadIcon />
            <Text color="#828282">Drag and Drop file or</Text>

            <Button
              zIndex={30}
              onClick={() => {
                console.log('browse')
              }}
            >
              Browse
            </Button>
          </Box>
        </Box>
        {/* <Input
        name="file"
        accept="*"
        multiple={false}
        id="file"
        onChange={handleImage}
        my={2}
        color="black"
        placeholder="File"
        type="file"
      /> */}
        <Box
          overflow="scroll"
          width="50%"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap={['wrap', 'wrap', 'wrap']}
          height="100%"
          p={5}
          backgroundColor="#ECECEC"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
        >
          {file.map((fle) => (
            <CustomFileItem
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
        backgroundColor="#2F80EC"
        color="white"
        onClick={() => uploadAllFiles()}
      >
        Upload
      </Button>
    </>
  )
}
