import { Flex, Spinner } from '@chakra-ui/react'
import { useGetAllCategoriesQuery } from 'src/generated/graphql'
import CategoryCard from './ListItems/Category.card'

export default function CategoriesList(): JSX.Element {
  const { data, loading } = useGetAllCategoriesQuery()
  if (loading) return <Spinner />

  return (
    <Flex
      my={5}
      w="full"
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDir="row"
    >
      {data?.categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Flex>
  )
}
