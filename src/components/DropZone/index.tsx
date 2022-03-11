/* eslint-disable react/jsx-props-no-spreading */
import { Box, Text } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function MyDropzone({
  callback,
}: {
  callback: (file: any) => void
}): JSX.Element {
  const onDrop = useCallback((acceptedFiles) => {
    callback(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Box
      borderColor="#000000"
      border="5px dashed black"
      rounded={5}
      minH={200}
      backgroundColor="#FFFFF"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Text>Drop the files here ...</Text>
      ) : (
        <Text>Dragn drop some files here, or click to select files</Text>
      )}
    </Box>
  )
}
