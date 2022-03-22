import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useGetAllBugsByQuery, SortOrder } from 'src/generated/graphql'
import useSearchState from 'src/hooks/useSearchState'
import SkelettonPlaceholder from '../Assets/SkelettonPLaceholder'
import BugListFilters from './Filters/BugListFilters'
import BugListItem from './ListItems/BugListItem'

const MotionBox = motion(Box)

export default function BugList(): JSX.Element {
  const { website } = useSearchState()

  const { data, loading } = useGetAllBugsByQuery({
    variables: {
      orderBy: {
        number: 'desc' as SortOrder,
      },
      where: {
        Website: {
          is: {
            id: {
              equals: website || undefined,
            },
          },
        },
      },
    },
  })

  return (
    <MotionBox
      shadow="lg"
      h="80%"
      backgroundColor="#FFFFFF"
      zIndex={20}
      position="fixed"
      minWidth="400px"
      maxWidth="400px"
    >
      <BugListFilters />

      <MotionBox
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '24px',
          },
        }}
        width="100%"
        height="80%"
        display="flex"
        flexDirection="column"
      >
        {!loading ? (
          data?.bugs.map((bug) => <BugListItem key={bug.id} bug={bug} />)
        ) : (
          <SkelettonPlaceholder number={20} />
        )}
      </MotionBox>
    </MotionBox>
  )
}
