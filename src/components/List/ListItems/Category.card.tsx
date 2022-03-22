import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GetAllCategoriesQuery } from 'src/generated/graphql'

type Props = {
  category: GetAllCategoriesQuery['categories'][number]
}

const MotionFlex = motion(Flex)

export default function CategoryCard({ category }: Props): JSX.Element {
  const sampleImg = `/features_blue.png`
  return (
    <Flex
      cursor="pointer"
      color="white"
      position="relative"
      m={1}
      minW="265px"
      h="70px"
      justifyContent="flex-end"
      alignItems="center"
      rounded={4}
      shadow="md"
      backgroundColor={category.backgroundColor}
    >
      <Box position="absolute" left={5}>
        <Image src={category.icon} width="40px" height="40px" />
      </Box>

      <MotionFlex
        whileHover={{
          width: '70%',
          justifyContent: 'center',
          boxShadow:
            'rgba(0, 0, 0, 0) 0px 4px 6px -1px, rgba(0, 0, 0, 0) 0px 2px 4px -1px ',
        }}
        cursor="pointer"
        color="white"
        w="98%"
        px={5}
        h="100%"
        zIndex={20}
        justifyContent="flex-start"
        alignItems="center"
        rounded={4}
        shadow="md"
        backgroundColor="white"
      >
        <Box>
          <Text fontSize={16} fontWeight="bold" color="#24323F">
            {category.name}
          </Text>
        </Box>
        <Box>
          <Image src={sampleImg} width="40px" height="40px" />
        </Box>
      </MotionFlex>
    </Flex>
  )
}
