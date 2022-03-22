import { Select } from '@chakra-ui/react'
import { ReactNode } from 'react'

const CustomSelect = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Select size="xs" borderColor="#24323F" rounded={4}>
      {children}
    </Select>
  )
}

export default CustomSelect
