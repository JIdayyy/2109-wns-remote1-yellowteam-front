/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import { useGetAllBugsByQuery, SortOrder } from 'src/generated/graphql'
import { Spinner } from '@chakra-ui/react'
import { DateTime } from 'luxon'
import useSearchState from 'src/hooks/useSearchState'

const LineChart = (): JSX.Element => {
  const { website } = useSearchState()

  // const { data, loading } = useGetAllBugsByQuery({
  //   variables: {
  //     orderBy: {
  //       number: 'desc' as SortOrder,
  //     },
  //     skip: 0,
  //     take: 50,
  //     where: {
  //       Website: {
  //         is: {
  //           id: {
  //             equals: website || undefined,
  //           },
  //         },
  //       },
  //     },
  //   },
  // })

  // if (loading || !data)
  //   return (
  //     <Spinner
  //       width="100px"
  //       height="100px"
  //       thickness="20px"
  //       speed="0.65s"
  //       emptyColor="gray.200"
  //       color="blue.500"
  //       size="xl"
  //     />
  //   )

  // const weekItems = data.bugs.filter((item) => {
  //   return (
  //     DateTime.fromISO(item.created_at).startOf('day') <
  //     DateTime.local().startOf('day').minus({ days: -7 })
  //   )
  // })

  // const reduceByDate = () => {
  //   const classified = weekItems.reduce((prev: any, curr) => {
  //     const date = DateTime.fromISO(curr.created_at)
  //     if (prev[date.get('weekdayLong')]) {
  //       return {
  //         ...prev,
  //         [date.get('weekdayLong')]: prev[date.get('weekdayLong')] + 1,
  //       }
  //     }
  //     return {
  //       ...prev,
  //       [date.get('weekdayLong')]: 1,
  //     }
  //   }, [])

  //   const {
  //     Website,
  //     created_at,
  //     description,
  //     id,
  //     number,
  //     status,
  //     title,
  //     user,
  //     __typename,
  //     ...rest
  //   } = classified

  //   return rest
  // }

  // const dataValues = Object.values(reduceByDate())
  // const dataKeys = Object.keys(reduceByDate())

  return (
    // <Line
    //   style={{
    //     minWidth: 600,
    //     maxWidth: 600,
    //     color: 'blue',
    //     backgroundColor: 'white',
    //     borderRadius: '10px',
    //     padding: 30,
    //     boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
    //   }}
    //   data={{
    //     labels: dataKeys,
    //     datasets: [
    //       {
    //         label: 'Bugs',
    //         data: dataValues,
    //         fill: false,
    //         borderColor: 'rgb(75, 192, 192)',
    //         pointStyle: 'star',

    //         tension: 0.1,
    //       },
    //     ],
    //   }}
    // />
    <></>
  )
}

export default LineChart
