/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState } from 'react'
import { useRadio, Box, UseRadioProps, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import InfoIcon from 'src/static/svg/InfoIcon'

interface RadioProps extends UseRadioProps {
  children?: React.ReactNode
}

const MotionBox = motion(Box)

const RadioCard: FC = (props: RadioProps) => {
  const [hover, setHover] = useState(false)
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const input = getInputProps()
  const checkbox = getCheckboxProps()
  const { children } = props

  const backgroundColor = (): { color: string; helperText: string } => {
    if (children === 'CRITICAL') {
      return {
        color: '#161A42',
        helperText:
          'A critical status indicate that the entire app / data is compromised, our team will review the issue and take action asap but use it only if necessary !',
      }
    }
    if (children === 'HIGH') {
      return {
        color: '#FF0000',
        helperText:
          'A high status indicate that a part of the app or data is compromised, our team will review the issue and take action asap.',
      }
    }
    if (children === 'MEDIUM') {
      return {
        color: '#9A8C43',
        helperText:
          'A medium status indicate that a bug impact the user experience or the app is not working properly, our team will review the issue and take action asap.',
      }
    }
    if (children === 'LOW') {
      return {
        color: '#9988FF',
        helperText:
          'A low status indicate that a bug is not impacting the user experience or the app is not working properly but the impact is minimal, our team will review the issue and take action asap.',
      }
    }
    return {
      color: 'gray',
      helperText:
        'A critical status indicate that the entire app / data is compromised',
    }
  }

  return (
    <Box
      as="label"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input {...input} />
      <Box
        position="relative"
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        backgroundColor={backgroundColor().color}
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
        <AnimatePresence key="helper-chip">
          {hover && (
            <MotionBox
              onClick={() => setHover(false)}
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              shadow="md"
              bottom={50}
              minW={600}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              zIndex={10}
              p={4}
              backgroundColor="white"
              rounded={5}
              position="absolute"
            >
              <InfoIcon />
              <Text mx={5} w="100%" color="gray">
                {backgroundColor().helperText}
              </Text>
            </MotionBox>
          )}
        </AnimatePresence>
        {children}
      </Box>
    </Box>
  )
}

export default RadioCard
