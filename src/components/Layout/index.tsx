import { Box } from '@chakra-ui/react'
import { ReactNode, useEffect } from 'react'
import useAppState from 'src/hooks/useAppState'
import { useMutateMeMutation } from '../../generated/graphql'
import UserNavBar from '../UserNavBar'

interface IProps {
  children: ReactNode
}

export default function Layout({ children }: IProps): JSX.Element {
  const { dispatchLogin, dispatchLogout } = useAppState()

  const [me] = useMutateMeMutation({
    onCompleted: (data) => {
      dispatchLogin(data.me)
    },
    onError: () => {
      dispatchLogout()
    },
  })

  useEffect(() => {
    me()
  }, [])

  return (
    <Box height="100vh" width="100vw" display="flex">
      <UserNavBar />
      <Box width="100%" height="100%">
        {children}
      </Box>
    </Box>
  )
}
