/* eslint-disable react/jsx-props-no-spreading */
import { Box, Image, Progress } from '@chakra-ui/react'
import { FileValidated, FileItem } from '@dropzone-ui/react'
import SuccesIcon from '../../../static/img/CloudDone.png'

type Props = {
  fle: FileValidated
  fileOnUpload: string | number | undefined
  progress: number
  uploadSucces: string[]
}

export default function CustomFileItem({
  fle,
  progress,
  fileOnUpload,
  uploadSucces,
}: Props): JSX.Element {
  return (
    <Box position="relative">
      {fileOnUpload === fle.id && !!progress && (
        <Progress isIndeterminate hasStripe value={progress} />
      )}
      {uploadSucces.find((item) => item === fle.file.name) && (
        <Image
          zIndex={100}
          width={7}
          height={7}
          position="absolute"
          bottom={5}
          left={120}
          src={SuccesIcon}
        />
      )}
      <FileItem {...fle} preview />
    </Box>
  )
}
