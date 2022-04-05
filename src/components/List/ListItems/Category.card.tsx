import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { GetAllCategoriesQuery } from 'src/generated/graphql'
import useCreateBugState from 'src/hooks/useCreateBugState'

type Props = {
  category: GetAllCategoriesQuery['categories'][number]
}

const MotionFlex = motion(Flex)

export default function CategoryCard({ category }: Props): JSX.Element {
  const { dispatchSelectedCategory, selectedCategory } = useCreateBugState()

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
        onClick={() => dispatchSelectedCategory(category.id)}
        width={selectedCategory === category.id ? '70%' : '100%'}
        cursor="pointer"
        color="white"
        px={5}
        h="100%"
        zIndex={20}
        justifyContent="center"
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
      </MotionFlex>
    </Flex>
  )
}
