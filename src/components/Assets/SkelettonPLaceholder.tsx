/* eslint-disable react/no-array-index-key */
import { SkeletonText, SkeletonCircle } from '@chakra-ui/react'
import CustomBox from '../UI/CustomBox'

export default function SkelettonPlaceholder({
  number,
}: {
  number: number
}): JSX.Element {
  const items = new Array(number).fill(0)
  return (
    <>
      {items.map((_, index) => (
        <CustomBox key={index} padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle mt="2" noOfLines={1} />
          <SkeletonText mt="2" noOfLines={1} spacing="4" />
        </CustomBox>
      ))}
    </>
  )
}
