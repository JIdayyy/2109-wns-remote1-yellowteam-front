import { Center, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const backgroundColor = (status: string): string => {
  if (status === 'CRITICAL') {
    return '#161A42'
  }
  if (status === 'HIGH') {
    return '#FF0000'
  }
  if (status === 'MEDIUM') {
    return '#9A8C43'
  }
  if (status === 'LOW') {
    return '#9988FF'
  }
  if (status === 'OPEN') {
    return '#9A8C43'
  }
  if (status === 'IN_PROGRESS') {
    return '#9988FF'
  }
  if (status === 'CLOSED') {
    return '#FF0000'
  }
  return 'gray'
}

interface IProps {
  priority: string
  name: string
}

const MotionCenter = motion(Center)
const MotionFlex = motion(Flex)

export default function BugInfoChip({ priority, name }: IProps): JSX.Element {
  return (
    <Flex
      cursor="pointer"
      width="150px"
      backgroundColor={backgroundColor(priority)}
      justifyContent="flex-end"
      direction="column"
      alignItems="flex-end"
      position="relative"
      shadow="md"
      rounded={2}
      py={2}
    >
      <MotionCenter
        left={0}
        top={0}
        height="100%"
        width="97%"
        whileHover={{
          width: '50%',
          justifyContent: 'center',
          boxShadow:
            'rgba(0, 0, 0, 0) 0px 4px 6px -1px, rgba(0, 0, 0, 0) 0px 2px 4px -1px ',
        }}
        position="absolute"
        backgroundColor="white"
        rounded={2}
      >
        <Text fontSize={12} fontWeight="bold" color="textPrimary">
          {name.toUpperCase()}
        </Text>
      </MotionCenter>
      <MotionFlex
        height="100%"
        w="50%"
        px={4}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white">{priority.toUpperCase()}</Text>
      </MotionFlex>
    </Flex>
  )
}
