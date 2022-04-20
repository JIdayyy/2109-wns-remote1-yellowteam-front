/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import {
  useRadioGroup,
  HStack,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useController, Control, FieldValues } from 'react-hook-form'
import RadioCard from './RadioCard'

const RadioGroup: FC<{
  control: Control<FieldValues>
  options: string[]
  label?: string
  name: string
  isRequired: boolean
}> = ({ control, name, isRequired, options }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
    rules: { required: { value: true, message: 'Required field' } },
  })
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange: field.onChange,
    value: field.value,
  })

  const group = getRootProps()

  return (
    <FormControl
      my={4}
      isRequired={isRequired}
      isInvalid={!!errors[name]}
      mb={6}
    >
      <HStack {...group} spacing={4}>
        {options.map((value: string) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
      <FormErrorMessage>
        {errors[name] && errors[name]!.message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default RadioGroup
