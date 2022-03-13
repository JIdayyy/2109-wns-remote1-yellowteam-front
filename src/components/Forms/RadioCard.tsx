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

  const backgroundColor = (): string => {
    if (children === 'CRITICAL') {
      return '#161A42'
    }
    if (children === 'HIGH') {
      return '#FF0000'
    }
    if (children === 'MEDIUM') {
      return '#9A8C43'
    }
    if (children === 'LOW') {
      return '#9988FF'
    }
    return 'gray'
  }

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        backgroundColor={backgroundColor()}
        borderRadius="md"
        shadow="md"
        boxShadow="lg"
        _checked={{
          boxShadow: 'sm',
          bg: '#FFD600',
          color: 'white',
          borderColor: '#161A42',
          border: '2px',
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
