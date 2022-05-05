import { ThemeComponents } from '@chakra-ui/react'
import Box from './Box/Index'
import Modal from './Modal'
import Input from './Input'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const componentsExtents: { components: ThemeComponents } = {
  components: {
    Box,
    Modal,
    Input,
    Button: {
      variants: {
        action: (props) => ({
          bg: props.colorMode === 'dark' ? 'gray.600' : 'darkBlueCustom',
          color: 'white',
          fontWeight: 'bold',
          _hover: {
            bg: 'gray.200',
          },
        }),
      },
    },
  },
}

export default componentsExtents
