import { Button, Icon, Portal } from '@chakra-ui/react'
import { BiVolumeMute } from 'react-icons/bi'
import { GoUnmute } from 'react-icons/go'
import useLocalStorage from '../Hook/useLocalStorage'

export default function MuteButtonPortal(): JSX.Element {
  const [isMute, setIsMute] = useLocalStorage('isMute', false)

  const MuteButton = (): JSX.Element => (
    <Button
      position="absolute"
      bottom={10}
      bg="transparent"
      right={10}
      zIndex={100}
      onClick={() => setIsMute((c) => !c)}
    >
      {isMute ? <Icon as={BiVolumeMute} /> : <Icon as={GoUnmute} />}
    </Button>
  )
  return (
    <Portal>
      <MuteButton />
    </Portal>
  )
}
