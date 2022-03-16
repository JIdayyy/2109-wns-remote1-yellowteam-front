/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useGetAllBugsByQuery } from 'src/generated/graphql'
import { Spinner } from '@chakra-ui/react'

const BugDonutChart = (): JSX.Element => {
  const { data, loading } = useGetAllBugsByQuery({
    variables: {
      orderBy: {
        number: 'desc' as unknown as undefined,
      },
    },
  })

  if (loading || !data)
    return (
      <Spinner
        width="300px"
        height="300px"
        thickness="80px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    )

  const bugStatusCountReducer = () =>
    data.bugs.reduce(
      (prev, curr) => {
        if (curr.status === 'OPEN') {
          return {
            ...prev,
            open: prev.open + 1,
          }
        }
        if (curr.status === 'CLOSED') {
          return {
            ...prev,
            closed: prev.closed + 1,
          }
        }
        if (curr.status === 'IN_PROGRESS') {
          return {
            ...prev,
            in_progress: prev.in_progress + 1,
          }
        }
        return prev
      },
      {
        open: 0,
        closed: 0,
        in_progress: 0,
      }
    )

  const bugStatusCount = [
    bugStatusCountReducer().closed,
    bugStatusCountReducer().open,
    bugStatusCountReducer().in_progress,
  ]
  const donnutDatas = {
    labels: ['OPEN', 'CLOSED', 'IN PROGRESS'],
    datasets: [
      {
        label: 'My First Dataset',
        data: bugStatusCount,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  }
  return <Doughnut style={{ minWidth: 300 }} data={donnutDatas} />
}

export default BugDonutChart
