import { ComponentStyleConfig } from '@chakra-ui/react'

const Box: ComponentStyleConfig = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    alignItems: 'justify-between',
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? '#1A202C' : 'white',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'solid',
  },
}

export default Box
