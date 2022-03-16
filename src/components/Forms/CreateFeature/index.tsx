/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, Input } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export default function CreateFeature(): JSX.Element {
  const { id } = useParams()
  const { register, handleSubmit } = useForm<FieldValues>()

  const onSubmit = async (data: FieldValues) => {
    console.log(data, id)
  }

  return (
    <Flex>
      <Input {...register('name')} placeholder="Name" />
      <Input {...register('description')} placeholder="Description" />
      <Button onClick={handleSubmit(onSubmit)} />
    </Flex>
  )
}
