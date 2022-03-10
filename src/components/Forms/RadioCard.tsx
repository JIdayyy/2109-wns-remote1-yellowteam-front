/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { useRadio, Box, UseRadioProps } from '@chakra-ui/react'

interface RadioProps extends UseRadioProps {
  children?: React.ReactNode
}

const RadioCard: FC = (props: RadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()
  const { children } = props
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        backgroundColor="gray"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'pink.500',
          color: 'white',
          borderColor: 'pink.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  )
}

export default RadioCard
