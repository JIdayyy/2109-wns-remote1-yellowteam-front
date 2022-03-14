import { Box } from '@chakra-ui/react'
import { useGetAllBugsByQuery } from 'src/generated/graphql'
import SkelettonPlaceholder from '../Assets/SkelettonPLaceholder'
import BugListItem from './ListItems/BugListItem'

export default function BugList(): JSX.Element {
  const { data, loading } = useGetAllBugsByQuery({
    variables: {
      where: {
        websiteId: {
          contains: '',
        },
      },
    },
  })

  return (
    <Box
      className="bugListShagow"
      overflowY="scroll"
      shadow="revert"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
          background: '#DFDFDF',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '24px',
        },
      }}
      width="20%"
      minW="20%"
      flexShrink={2}
      height="80%"
      display="flex"
      flexDirection="column"
    >
      {!loading ? (
        data?.bugs.map((bug) => <BugListItem key={bug.id} bug={bug} />)
      ) : (
        <SkelettonPlaceholder number={20} />
      )}
    </Box>
  )
}
