import { ThemeOverride } from '@chakra-ui/react'

type GlobalStyles = Pick<ThemeOverride, 'styles'>

export default {
  styles: {
    global: {
      h1: {
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        fontSize: '16px',
      },
      default: {
        fontWeight: 'normal',
        fontFamily: 'Poppins',
        fontSize: '12px',
      },
      defaultBold: {
        fontWeight: 900,
        fontFamily: '',
        fontSize: '12px',
      },
    },
  },
} as GlobalStyles
