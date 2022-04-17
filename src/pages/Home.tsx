/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@chakra-ui/react'
// import LineChart from 'src/components/Charts/LineChart'
// import CutomDonutChart from 'src/components/Charts/PieChart'
import BugList from 'src/components/List/BugList'
import customScrollBar from 'src/theme/scrollbar'

export default function Home(): JSX.Element {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="100%"
      css={customScrollBar}
      flexDirection="row"
      overflowY="scroll"
    >
      <BugList />
    </Box>
  )
}
