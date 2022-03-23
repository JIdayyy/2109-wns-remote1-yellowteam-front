/* eslint-disable import/no-extraneous-dependencies */
import Lottie from 'react-lottie'
import { Center } from '@chakra-ui/react'
import animationData from '../Lotties/NoMatch.json'

const NoMatchPage = (): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Center w="100%" h="100%">
      <Lottie options={defaultOptions} height={400} width={400} />
    </Center>
  )
}

export default NoMatchPage
