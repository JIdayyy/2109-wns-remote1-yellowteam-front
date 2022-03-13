/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Flex, FormControl, Input, Text } from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAppState from 'src/hooks/useAppState'
import { useMutateLoginMutation } from '../../../generated/graphql'

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate()

  const { dispatchLogin } = useAppState()
  const [login] = useMutateLoginMutation({
    onCompleted: (data) => {
      dispatchLogin(data.login)
      navigate('/')
    },

    onError: (error) => {
      console.error(error)
    },
  })

  const { handleSubmit, register } = useForm()

  const onSubmit = async ({ email, password }: FieldValues): Promise<void> => {
    login({
      variables: { data: { email, password } },
    })
  }

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
      h="100vh"
    >
      <Text fontFamily="Poppins" fontSize={30} fontWeight="bold">
        Sign In to DC bug report
      </Text>
      <FormControl p={10} w={['90%', '80%', '80%', '80%']}>
        <Input
          id="email"
          placeholder="Email"
          my={1}
          type="text"
          {...register('email')}
        />
        <Input
          id="password"
          placeholder="Password"
          my={1}
          type="password"
          {...register('password')}
        />
      </FormControl>
      <Button
        my={3}
        w={['65%', '55%', '35%', '25%']}
        backgroundColor="#24323F"
        color="#ffffff"
        onClick={handleSubmit(onSubmit)}
      >
        SIGN IN
      </Button>
    </Flex>
  )
}
