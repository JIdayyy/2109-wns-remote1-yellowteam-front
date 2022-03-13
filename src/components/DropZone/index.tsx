/* eslint-disable react/jsx-props-no-spreading */
import { Dropzone, FileItem, FileValidated } from '@dropzone-ui/react'

interface IProps {
  file: FileValidated[]
  setFile: (FileValidated: FileValidated[]) => void
}

export default function MyDropzone({ file, setFile }: IProps): JSX.Element {
  return (
    <Dropzone
      style={{ border: '1px solid #e6e6e6', opacity: 0, zIndex: 20 }}
      onChange={(img) => {
        setFile(img)
      }}
      value={file}
    >
      {file.map((fle) => (
        <FileItem {...fle} preview />
      ))}
    </Dropzone>
  )
}
