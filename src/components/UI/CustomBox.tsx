/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, useStyleConfig } from '@chakra-ui/react'

export default function CustomBox(props: any): JSX.Element {
  const { variant, ...rest } = props

  const styles = useStyleConfig('Box', { variant })

  return <Box __css={styles} {...rest} />
}
