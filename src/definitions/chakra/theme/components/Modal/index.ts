import { ComponentStyleConfig } from '@chakra-ui/react'

const Modal: ComponentStyleConfig = {
  variants: {
    solid: (props) => ({
      bg: props.colorMode === 'dark' ? '#1A202C' : 'white',
    }),
  },
  // The default variant value
  defaultProps: {
    variant: 'solid',
  },
}

export default Modal
