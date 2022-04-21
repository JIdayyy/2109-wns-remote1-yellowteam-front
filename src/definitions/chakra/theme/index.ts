import { extendTheme } from '@chakra-ui/react'

import styles from './styles'

import colors from './foundations/colors'

import componentsExtents from './components/index'

import fontSizes from './foundations/fontSizes'

import mainTheme from '../../../theme/mainTheme'

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

const overrides = {
  ...styles,
  ...componentsExtents,
  ...colors,
  ...fontSizes,
  ...mainTheme,
}

const theme = extendTheme(overrides)

export default theme
