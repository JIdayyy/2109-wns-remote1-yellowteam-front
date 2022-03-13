import { Box, SkeletonText, SkeletonCircle } from '@chakra-ui/react'
import React from 'react'

export default function SkelettonPlaceholder({
  number,
}: {
  number: number
}): JSX.Element {
  const items = new Array(number).fill(0)
  return (
    <>
      {items.map((itm) => (
        <Box key={itm} padding="12" boxShadow="lg" bg="white">
          <SkeletonCircle mt="2" noOfLines={1} />
          <SkeletonText mt="2" noOfLines={3} spacing="4" />
        </Box>
      ))}
    </>
  )
}
