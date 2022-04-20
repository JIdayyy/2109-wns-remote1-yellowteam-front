import { ThemeComponents } from '@chakra-ui/react'
import Box from './Box/Index'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const componentsExtents: { components: ThemeComponents } = {
  components: {
    Box,
    Select: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '382px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
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
    Menu: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '382px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
      },
    },
  },
}

export default componentsExtents
