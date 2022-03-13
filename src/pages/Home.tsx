/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@chakra-ui/react'
import CutomDonutChart from 'src/components/Charts/PieChart'

export default function Home(): JSX.Element {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="80%"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '24px',
        },
      }}
      p={10}
      flexDirection="row"
      overflowY="scroll"
    >
      <Box rounded={2} m={10} shadow="md" p={10} bgColor="white">
        <CutomDonutChart />
      </Box>
    </Box>
  )
}
